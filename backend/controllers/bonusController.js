const {
  createBonus,
  getBonuses,
  getBonusById,
  updateBonus,
  deleteBonus,
} = require("../services/bonusService");
const { createTransaction } = require("../controllers/transactionController");
const catchAsyncErrors = require("../middlewares/cathAsyncErrorsMiddleware");
const db = require("../config/database");
// Create a new bonus
exports.addBonus = catchAsyncErrors(async (req, res) => {
  const { amount, bonus_type, status } = req.body;

  if (!amount || !bonus_type) {
    return res.status(400).json({ message: "Missing required fields" });
  }

  try {
    const result = await createBonus(amount, bonus_type, status);
    res.status(201).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
});

// Get all bonuses
exports.getAllBonuses = catchAsyncErrors(async (req, res) => {
  try {
    const bonuses = await getBonuses();
    res.status(200).json(bonuses);
  } catch (error) {
    res.status(500).json(error);
  }
});

// Get a single bonus by ID
exports.getBonus = catchAsyncErrors(async (req, res) => {
  const { id } = req.params;

  try {
    const bonus = await getBonusById(id);
    if (!bonus) {
      return res.status(404).json({ message: "Bonus not found" });
    }
    res.status(200).json(bonus);
  } catch (error) {
    res.status(500).json(error);
  }
});

// Update a bonus (Admin Only)
exports.updateBonus = catchAsyncErrors(async (req, res) => {
  const { id } = req.params;
  const { amount, bonus_type, status } = req.body;

  if (!amount || !bonus_type || !status) {
    return res.status(400).json({ message: "Missing required fields" });
  }

  try {
    const result = await updateBonus(id, amount, bonus_type, status);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
});

// Delete a bonus (Admin Only)
exports.deleteBonus = catchAsyncErrors(async (req, res) => {
  const { id } = req.params;

  try {
    const result = await deleteBonus(id);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
});

// Update user balance and create transaction
exports.claimBonus = catchAsyncErrors(async (req, res) => {
  const { user_id, bonus_type } = req.body;
  console.log(req.body)

  
  if (!user_id || !bonus_type) {
    console.error("Missing user_id or bonus_type in request");
    return res
      .status(400)
      .json({ message: "User ID and Bonus Type are required" });
  }

  try {
    // Step 1: Check if user has gigs left

      // Step 2: Fetch bonus amount
      const bonusQuery = `
        SELECT amount 
        FROM bonuses 
        WHERE bonus_type = ? AND status = 'approved' 
        ORDER BY created_at DESC 
        LIMIT 1
      `;

      db.query(bonusQuery, [bonus_type], async (err, bonusResult) => {
        if (err) {
          console.error("Error fetching bonus:", err);
          return res.status(500).json({ message: "Database error while fetching bonus", error: err });
        }

        if (bonusResult.length === 0) {
          console.warn(`No approved bonus found for type: ${bonus_type}`);
          return res.status(404).json({ message: "No approved bonus found for this type" });
        }

        const bonusAmount = parseFloat(bonusResult[0].amount);
        console.log(`Bonus fetched: ${bonusAmount} for type ${bonus_type}`);

        // Step 3: Map bonus_type to column
        let columnToUpdate;
        switch (bonus_type) {
          case "sponsor_income":
            columnToUpdate = "sponsor_income";
            break;
          case "add_income":
            columnToUpdate = "add_income";
            break;
          case "telegram_income":
            columnToUpdate = "telegram_income";
            break;
          case "insta_income":
            columnToUpdate = "insta_income";
            break;
          case "roi_income":
            columnToUpdate = "roi_income";
            break;
          default:
            console.error("Invalid bonus type:", bonus_type);
            return res.status(400).json({ message: "Invalid bonus type" });
        }

        // Step 4: Update user's bonus column
        const updateUserQuery = `
          UPDATE users 
          SET ${columnToUpdate} = ${columnToUpdate} + ?, 
              wallet = wallet + ?
          WHERE id = ?
        `;
        db.query(updateUserQuery, [bonusAmount, bonusAmount, user_id], async (err, updateResult) => {
          if (err) {
            console.error("Error updating user bonus column:", err);
            return res.status(500).json({ message: "Database error while updating user", error: err });
          }

          if (updateResult.affectedRows === 0) {
            console.warn("User not found with id:", user_id);
            return res.status(404).json({ message: "User not found" });
          }

          console.log(`Updated ${columnToUpdate} for user ${user_id} by ${bonusAmount}`);

          // Step 5: Create transaction
          try {
            const transaction = await createTransaction(
              user_id,
              bonusAmount,
              "credit",
              bonus_type,
              "completed"
            );

            console.log("Transaction created:", transaction);

            res.status(200).json({
              message: "Bonus claimed successfully",
              bonus_type,
              bonusAmount,
              transaction,
            });
          } catch (transactionError) {
            console.error("Error creating transaction:", transactionError);
            res.status(500).json({ message: "Transaction error", error: transactionError });
          }
        });
      });
  
  } catch (error) {
    console.error("Unexpected server error:", error);
    res.status(500).json({ message: "Server error", error });
  }
});



// const insertRoiTransaction = (user_id, amount, type, onAmount, percent) => {
//   return new Promise((resolve, reject) => {
//     const insertQuery = `
//       INSERT INTO roi_transaction 
//         (user_id, amount, type, createdAt, onamount, percent) 
//       VALUES 
//         (?, ?, ?, NOW(), ?, ?)
//     `;

//     db.query(
//       insertQuery,
//       [user_id, amount, type, onAmount, percent],
//       (err, result) => {
//         if (err) {
//           console.error("Error inserting ROI transaction:", err);
//           return reject(err);
//         }

//         // Fetch the inserted transaction
//         const transactionId = result.insertId;

//         db.query(
//           "SELECT * FROM roi_transaction WHERE id = ?",
//           [transactionId],
//           (err, transactions) => {
//             if (err) {
//               console.error("Error fetching new ROI transaction:", err);
//               return reject(err);
//             }

//             if (transactions.length === 0) {
//               return reject(
//                 new Error("ROI transaction not found after insertion")
//               );
//             }

//             console.log(
//               `ROI transaction created for user ${user_id}: ${amount} (${percent}% of ${onAmount})`
//             );
//             resolve(transactions[0]);
//           }
//         );
//       }
//     );
//   });
// };

// exports.claimBonus = catchAsyncErrors(async (req, res) => {
//   const { user_id, bonus_type } = req.body;

//   if (!user_id || !bonus_type) {
//     console.error("Missing user_id or bonus_type in request");
//     return res
//       .status(400)
//       .json({ message: "User ID and Bonus Type are required" });
//   }

//   try {
//     // If it's ROI income, we need to calculate based on user's active plan and compound income
//     if (bonus_type === "roi_income") {
//       // First, get the user's active plan and compound income
//       const userQuery = `
//         SELECT plan_id, compound_income 
//         FROM users 
//         WHERE id = ?
//       `;

//       db.query(userQuery, [user_id], async (err, userResult) => {
//         if (err) {
//           console.error("Error fetching user:", err);
//           return res
//             .status(500)
//             .json({
//               message: "Database error while fetching user",
//               error: err,
//             });
//         }

//         if (userResult.length === 0) {
//           console.warn("User not found with id:", user_id);
//           return res.status(404).json({ message: "User not found" });
//         }

//         const { plan_id, compound_income } = userResult[0];

//         if (!plan_id) {
//           console.warn("User doesn't have an active plan:", user_id);
//           return res
//             .status(400)
//             .json({ message: "User doesn't have an active plan" });
//         }

//         // Get the plan details to calculate ROI
//         const planQuery = `
//           SELECT ROI_day 
//           FROM plans 
//           WHERE id = ?
//         `;

//         db.query(planQuery, [plan_id], async (err, planResult) => {
//           if (err) {
//             console.error("Error fetching plan:", err);
//             return res
//               .status(500)
//               .json({
//                 message: "Database error while fetching plan",
//                 error: err,
//               });
//           }

//           if (planResult.length === 0) {
//             console.warn("Plan not found with id:", plan_id);
//             return res.status(404).json({ message: "Plan not found" });
//           }

//           console.log(plan_id);
//           console.log(planResult);

//           const roiDayPercentage = parseFloat(planResult[0].ROI_day);

//           // Calculate ROI amount based on compound income and ROI percentage
//           const bonusAmount = (compound_income * roiDayPercentage) / 100;
//           console.log(
//             `ROI Bonus calculated: ${bonusAmount} (${roiDayPercentage}% of ${compound_income})`
//           );

//           // Update user's roi_income and wallet
//           const updateUserQuery = `
//           UPDATE users 
//           SET roi_income = roi_income + ?,
//               wallet = wallet + ?,
//               compound_income = compound_income + ?
//           WHERE id = ?
//         `;

//           db.query(
//             updateUserQuery,
//             [bonusAmount, bonusAmount, bonusAmount, user_id],
//             async (err, updateResult) => {
//               if (err) {
//                 console.error("Error updating user ROI income:", err);
//                 return res
//                   .status(500)
//                   .json({
//                     message: "Database error while updating user",
//                     error: err,
//                   });
//               }

//               if (updateResult.affectedRows === 0) {
//                 console.warn("User not found with id:", user_id);
//                 return res.status(404).json({ message: "User not found" });
//               }

//               console.log(
//                 `Updated roi_income for user ${user_id} by ${bonusAmount}`
//               );

//               try {
//                 // Insert into ROI transaction table
//                 const roiTransaction = await insertRoiTransaction(
//                   user_id,
//                   bonusAmount,
//                   "Invest ROI",
//                   compound_income,
//                   roiDayPercentage
//                 );

//                 // Create general transaction
//                 const transaction = await createTransaction(
//                   user_id,
//                   bonusAmount,
//                   "credit",
//                   bonus_type,
//                   "completed"
//                 );

//                 console.log("Transactions created:", {
//                   roiTransaction,
//                   transaction,
//                 });

//                 res.status(200).json({
//                   message: "ROI Bonus claimed successfully",
//                   bonus_type,
//                   bonusAmount,
//                   roiTransaction,
//                   transaction,
//                 });
//               } catch (transactionError) {
//                 console.error("Error creating transactions:", transactionError);
//                 res
//                   .status(500)
//                   .json({
//                     message: "Transaction error",
//                     error: transactionError,
//                   });
//               }
//             }
//           );
//         });
//       });
//     } else {
//       // For non-ROI bonus types, keep the original logic
//       const bonusQuery = `
//         SELECT amount 
//         FROM bonuses 
//         WHERE bonus_type = ? AND status = 'approved'
//         ORDER BY created_at DESC
//         LIMIT 1
//       `;

//       db.query(bonusQuery, [bonus_type], async (err, bonusResult) => {
//         if (err) {
//           console.error("Error fetching bonus:", err);
//           return res
//             .status(500)
//             .json({
//               message: "Database error while fetching bonus",
//               error: err,
//             });
//         }

//         if (bonusResult.length === 0) {
//           console.warn(`No approved bonus found for type: ${bonus_type}`);
//           return res
//             .status(404)
//             .json({ message: "No approved bonus found for this type" });
//         }

//         const bonusAmount = parseFloat(bonusResult[0].amount);
//         console.log(`Bonus fetched: ${bonusAmount} for type ${bonus_type}`);

//         // Map bonus_type to column
//         let columnToUpdate;
//         switch (bonus_type) {
//           case "sponsor_income":
//             columnToUpdate = "sponsor_income";
//             break;
//           case "add_income":
//             columnToUpdate = "add_income";
//             break;
//           case "telegram_income":
//             columnToUpdate = "telegram_income";
//             break;
//           case "insta_income":
//             columnToUpdate = "insta_income";
//             break;
//           default:
//             console.error("Invalid bonus type:", bonus_type);
//             return res.status(400).json({ message: "Invalid bonus type" });
//         }

//         // Update user's bonus column and wallet
//         const updateUserQuery = `
//           UPDATE users 
//           SET ${columnToUpdate} = ${columnToUpdate} + ?,
//               wallet = wallet + ?
//           WHERE id = ?
//         `;

//         db.query(
//           updateUserQuery,
//           [bonusAmount, bonusAmount, user_id],
//           async (err, updateResult) => {
//             if (err) {
//               console.error(`Error updating user ${columnToUpdate}:`, err);
//               return res
//                 .status(500)
//                 .json({
//                   message: "Database error while updating user",
//                   error: err,
//                 });
//             }

//             if (updateResult.affectedRows === 0) {
//               console.warn("User not found with id:", user_id);
//               return res.status(404).json({ message: "User not found" });
//             }

//             console.log(
//               `Updated ${columnToUpdate} for user ${user_id} by ${bonusAmount}`
//             );

//             // Create transaction
//             try {
//               const transaction = await createTransaction(
//                 user_id,
//                 bonusAmount,
//                 "credit",
//                 bonus_type,
//                 "completed"
//               );

//               console.log("Transaction created:", transaction);

//               res.status(200).json({
//                 message: "Bonus claimed successfully",
//                 bonus_type,
//                 bonusAmount,
//                 transaction,
//               });
//             } catch (transactionError) {
//               console.error("Error creating transaction:", transactionError);
//               res
//                 .status(500)
//                 .json({
//                   message: "Transaction error",
//                   error: transactionError,
//                 });
//             }
//           }
//         );
//       });
//     }
//   } catch (error) {
//     console.error("Unexpected server error:", error);
//     res.status(500).json({ message: "Server error", error });
//   }
// });
