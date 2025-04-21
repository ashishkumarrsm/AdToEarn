

// "use client"

// import { useState, useEffect } from "react"
// import { Link, useLocation, useNavigate } from "react-router-dom"
// import { useSelector, useDispatch } from "react-redux"
// import { useFormik } from "formik"
// import * as Yup from "yup"

// // Import necessary components
// import Spinner from "../comman/Spinner"
// import ErrorAlert from "../comman/ErrorAlert"
// import SuccessAlert from "../comman/SuccessAlert"
// import Header from "../../CoreFile/Header"
// import Footer from "../../CoreFile/Footer"

// // Import icons
// import { FaRegEye, FaRegEyeSlash, FaUser, FaEnvelope, FaPhone, FaLock, FaUserTag, FaGift, FaCheck } from "react-icons/fa"

// // Import Redux actions
// import { signupUser, clearErrors, clearMessage } from "../../redux/authSlice"

// // Custom hook to get URL query parameters
// const useQuery = () => {
//   return new URLSearchParams(useLocation().search)
// }

// export default function Registration() {
//   const dispatch = useDispatch()
//   const navigate = useNavigate()
//   const query = useQuery()

//   const { loading, error, message, auth } = useSelector((state) => state.auth)

//   const [referralCode, setReferralCode] = useState(null)
//   const [showPass, setShowPass] = useState(false)
//   const [showConfirmPass, setShowConfirmPass] = useState(false)
//   const [termsAgreed, setTermsAgreed] = useState(false)

//   // Effect to handle referral code and authentication
//   useEffect(() => {
//     const referral = query.get("referral")
//     if (referral) {
//       setReferralCode(referral)
//     }

//     if (auth) {
//       navigate(`/${auth?.role}/dashboard`)
//     }

//     // Error and message clearing
//     if (error) {
//       const timer = setTimeout(() => {
//         dispatch(clearErrors())
//       }, 5000)
//       return () => clearTimeout(timer)
//     }

//     if (message) {
//       const timer = setTimeout(() => {
//         dispatch(clearMessage())
//       }, 5000)
//       return () => clearTimeout(timer)
//     }
//   }, [query, auth, error, message, dispatch, navigate])

//   // Initial form values
//   const initialValues = {
//     fullname: "",
//     email: "",
//     username: "",
//     phone: "",
//     password: "",
//     confirmPassword: "",
//     referralBy: "",
//   }

//   // Validation schema
//   const validationSchema = Yup.object().shape({
//     email: Yup.string().email("Invalid email address").required("Email is required"),
//     fullname: Yup.string().required("Full name is required").min(2, "Full name must be at least 2 characters"),
//     username: Yup.string().required("Username is required").min(3, "Username must be at least 3 characters"),
//     phone: Yup.string()
//       .required("Phone number is required")
//       .matches(/^[0-9]{10}$/, "Phone number must be 10 digits"),
//     password: Yup.string()
//       .min(8, "Password must be at least 8 characters")
//       .matches(
//         /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
//         "Password must include uppercase, lowercase, number, and special character",
//       )
//       .required("Password is required"),
//     confirmPassword: Yup.string()
//       .oneOf([Yup.ref("password"), null], "Passwords must match")
//       .required("Confirm password is required"),
//   })

//   // Formik form handling
//   const formik = useFormik({
//     initialValues,
//     validationSchema,
//     onSubmit: async (values) => {
//       if (!termsAgreed) {
//         alert("Please agree to the Terms of Use")
//         return
//       }

//       if (referralCode) {
//         values.referralBy = referralCode
//       }

//       dispatch(signupUser(values))
//     },
//   })

//   return (
//     <>
//       <Header />
//       <div className="h-[75px]"></div>

//       {/* Main container with orange gradient background */}
//       <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-orange-50 to-amber-50">
//         <div className="w-full max-w-4xl">
//           {/* Card container with modern shadow */}
//           <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-orange-100">
//             <div className="md:flex">
//               {/* Left side - Branding */}
//               <div className="md:w-2/5 p-8 bg-gradient-to-br from-orange-600 to-amber-700 relative">
//                 <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/crissxcross.png')]"></div>
//                 <div className="relative z-10">
//                   <h2 className="text-3xl font-bold text-white mb-4">Join Our Community</h2>
//                   <p className="text-orange-100 mb-8">
//                     Create an account to access premium features and start growing your investments.
//                   </p>

//                   <div className="space-y-5">
//                     {[
//                       "Premium investment tools",
//                       "Daily profit tracking",
//                       "24/7 expert support",
//                       "Secure transactions"
//                     ].map((feature, index) => (
//                       <div key={index} className="flex items-center group">
//                         <div className="bg-white/20 p-2 rounded-lg mr-4">
//                           <FaCheck className="h-5 w-5 text-orange-200" />
//                         </div>
//                         <p className="text-orange-50 font-medium">{feature}</p>
//                       </div>
//                     ))}
//                   </div>

//                   <div className="mt-12">
//                     <p className="text-orange-200">Already have an account?</p>
//                     <Link
//                       to="/user/login"
//                       className="inline-block mt-2 text-white font-medium hover:text-orange-50 transition-colors"
//                     >
//                       Sign in here →
//                     </Link>
//                   </div>
//                 </div>
//               </div>

//               {/* Right side - Form */}
//               <div className="md:w-3/5 p-8 bg-white">
//                 <div className="text-center mb-8">
//                   <h2 className="text-3xl font-bold text-gray-900">Create Account</h2>
//                   <p className="text-gray-600 mt-2">Start your journey in just a few steps</p>
//                 </div>

//                 <form onSubmit={formik.handleSubmit} className="space-y-5">
//                   {/* Full Name */}
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-2">
//                       Full Name
//                     </label>
//                     <div className="relative">
//                       <FaUser className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
//                       <input
//                         type="text"
//                         name="fullname"
//                         placeholder="John Doe"
                      
//                         value={formik.values.fullname}
//                         onChange={formik.handleChange}
//                         onBlur={formik.handleBlur}
//                         // ... existing formik props ...
//                         className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-100 transition-all"
//                       />
//                     </div>
//                     {formik.touched.fullname && formik.errors.fullname && (
//                       <p className="mt-1 text-xs text-red-400">{formik.errors.fullname}</p>
//                     )}
                   
//                   </div>

//                   {/* Email */}
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-2">
//                       Email Address
//                     </label>
//                     <div className="relative">
//                       <FaEnvelope className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
//                       <input
//                         type="email"
//                         name="email"
//                         id="email"
//                         placeholder="you@example.com"
//                         value={formik.values.email}
//                         onChange={formik.handleChange}
//                         onBlur={formik.handleBlur}
//                         // ... existing formik props ...
//                         className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-100 transition-all"
//                       />
//                     </div>
//                     {formik.touched.email && formik.errors.email && (
//                       <p className="mt-1 text-xs text-red-400">{formik.errors.email}</p>
//                     )}
//                     {/* ... error message ... */}
//                   </div>

//                   {/* Username & Phone */}
//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                     {/* Username */}
//                     <div>
//                       <label className="block text-sm font-medium text-gray-700 mb-2">
//                         Username
//                       </label>
//                       <div className="relative">
//                         <FaUserTag className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
//                         <input
//                           id="username"
//                           type="text"
//                           name="username"
//                           placeholder="johndoe"
//                           value={formik.values.username}
//                           onChange={formik.handleChange}
//                           onBlur={formik.handleBlur}
//                           // ... existing formik props ...
//                           className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-100 transition-all"
//                         />
//                       </div>
//                       {formik.touched.username && formik.errors.username && (
//                         <p className="mt-1 text-xs text-red-400">{formik.errors.username}</p>
//                       )}
//                       {/* ... error message ... */}
//                     </div>

//                     {/* Phone */}
//                     <div>
//                       <label className="block text-sm font-medium text-gray-700 mb-2">
//                         Phone Number
//                       </label>
//                       <div className="relative">
//                         <FaPhone className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
//                         <input
//                           type="tel"
//                            id="phone"
//                           name="phone"
//                           placeholder="1234567890"
//                           value={formik.values.phone}
//                           onChange={formik.handleChange}
//                           onBlur={formik.handleBlur}
//                           // ... existing formik props ...
//                           className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-100 transition-all"
//                         />
//                       </div>
//                       {formik.touched.phone && formik.errors.phone && (
//                         <p className="mt-1 text-xs text-red-400">{formik.errors.phone}</p>
//                       )}
//                       {/* ... error message ... */}
//                     </div>
//                   </div>

//                   {/* Password & Confirm Password */}
//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                     {/* Password */}
//                     <div>
//                       <label className="block text-sm font-medium text-gray-700 mb-2">
//                         Password
//                       </label>
//                       <div className="relative">
//                         <FaLock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
//                         <input
//                           type={showPass ? "text" : "password"}
//                           name="password"
//                           id="password"
//                           placeholder="••••••••"
//                           value={formik.values.password}
//                           onChange={formik.handleChange}
//                           onBlur={formik.handleBlur}
//                           // ... existing formik props ...
//                           className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-100 transition-all"
//                         />
//                          <button
//                           type="button"
//                           onClick={() => setShowPass(!showPass)}
//                           className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
//                         >
//                           {showPass ? <FaRegEyeSlash size={18} /> : <FaRegEye size={18} />}
//                         </button>
//                         {/* ... show/hide button ... */}
//                       </div>
//                       {formik.touched.password && formik.errors.password && (
//                         <p className="mt-1 text-xs text-red-400">{formik.errors.password}</p>
//                       )}
//                       {/* ... error message ... */}
//                     </div>

//                     {/* Confirm Password */}
//                     <div>
//                       <label className="block text-sm font-medium text-gray-700 mb-2">
//                         Confirm Password
//                       </label>
//                       <div className="relative">
//                         <FaLock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
//                         <input
//                           type={showConfirmPass ? "text" : "password"}
//                           name="confirmPassword"
//                           placeholder="••••••••"
//                           value={formik.values.confirmPassword}
//                           onChange={formik.handleChange}
//                           onBlur={formik.handleBlur}
//                           // ... existing formik props ...
//                           className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-100 transition-all"
//                         />
//                         <button
//                           type="button"
//                           onClick={() => setShowConfirmPass(!showConfirmPass)}
//                           className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
//                         >
//                           {showConfirmPass ? <FaRegEyeSlash size={18} /> : <FaRegEye size={18} />}
//                         </button>
//                         {/* ... show/hide button ... */}
//                       </div>
//                       {formik.touched.confirmPassword && formik.errors.confirmPassword && (
//                         <p className="mt-1 text-xs text-red-400">{formik.errors.confirmPassword}</p>
//                       )}
//                       {/* ... error message ... */}
//                     </div>
//                   </div>

//                   {/* Referral Code */}
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-2">
//                       Referral Code <span className="text-gray-500">(Optional)</span>
//                     </label>
//                     <div className="relative">
//                       <FaGift className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
//                       <input
//                         name="referralBy"
//                         placeholder="Enter referral code"
//                         type="text"
//                         value={referralCode || formik.values.referralBy}
//                         onChange={formik.handleChange}
//                         onBlur={formik.handleBlur}
//                         disabled={!!referralCode}
//                         // ... existing formik props ...
//                         className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-100 transition-all"
//                       />
//                     </div>
//                   </div>

//                   {/* Terms Agreement */}
//                   <div className="flex items-center mt-4">
//                     <input
//                       type="checkbox"
//                       checked={termsAgreed}
//                       onChange={() => setTermsAgreed(!termsAgreed)}
//                       className="w-4 h-4 text-orange-600 border-gray-300 rounded focus:ring-orange-500"
//                     />
//                     <label className="ml-2 text-sm text-gray-600">
//                       I agree to the{" "}
//                       <a href="#" className="text-orange-600 hover:underline">
//                         Terms of Use
//                       </a>
//                     </label>
//                   </div>

//                   {/* Submit Button */}
//                   <div className="pt-4">
//                     <button
//                       type="submit"
//                       disabled={loading || !termsAgreed}
//                       className="w-full px-6 py-3 bg-orange-600 hover:bg-orange-700 text-white font-medium rounded-lg transition-all shadow-md hover:shadow-orange-200 disabled:opacity-50 disabled:cursor-not-allowed"
//                     >
//                       {loading ? <Spinner /> : "Create Account"}
//                     </button>
//                   </div>
//                 </form>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//     {/* Error and Success Alerts */}
//     {error && <ErrorAlert error={error} />}
//       {message && <SuccessAlert message={message} />}
//     </>
//   )
// }







"use client"

import { useState, useEffect } from "react"
import { Link, useLocation, useNavigate } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { useFormik } from "formik"
import * as Yup from "yup"

// Import necessary components
import Spinner from "../comman/Spinner"
import ErrorAlert from "../comman/ErrorAlert"
import SuccessAlert from "../comman/SuccessAlert"
import Header from "../../CoreFile/Header"
import Footer from "../../CoreFile/Footer"

// Import icons
import { FaRegEye, FaRegEyeSlash, FaUser, FaEnvelope, FaPhone, FaLock, FaUserTag, FaGift, FaCheck } from "react-icons/fa"

// Import Redux actions
import { signupUser, clearErrors, clearMessage } from "../../redux/authSlice"

// Custom hook to get URL query parameters
const useQuery = () => {
  return new URLSearchParams(useLocation().search)
}

export default function Registration() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const query = useQuery()

  const { loading, error, message, auth } = useSelector((state) => state.auth)

  const [referralCode, setReferralCode] = useState(null)
  const [showPass, setShowPass] = useState(false)
  const [showConfirmPass, setShowConfirmPass] = useState(false)
  const [termsAgreed, setTermsAgreed] = useState(false)

  // Effect to handle referral code and authentication
  useEffect(() => {
    const referral = query.get("referral")
    if (referral) {
      setReferralCode(referral)
    }

    if (auth) {
      navigate(`/${auth?.role}/dashboard`)
    }

    // Error and message clearing
    if (error) {
      const timer = setTimeout(() => {
        dispatch(clearErrors())
      }, 5000)
      return () => clearTimeout(timer)
    }

    if (message) {
      const timer = setTimeout(() => {
        dispatch(clearMessage())
      }, 5000)
      return () => clearTimeout(timer)
    }
  }, [query, auth, error, message, dispatch, navigate])

  // Initial form values
  const initialValues = {
    fullname: "",
    email: "",
    username: "",
    phone: "",
    password: "",
    confirmPassword: "",
    referralBy: "",
  }

  // Validation schema
  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email address").required("Email is required"),
    fullname: Yup.string().required("Full name is required").min(2, "Full name must be at least 2 characters"),
    username: Yup.string().required("Username is required").min(3, "Username must be at least 3 characters"),
    phone: Yup.string()
      .required("Phone number is required")
      .matches(/^[0-9]{10}$/, "Phone number must be 10 digits"),
    password: Yup.string()
      .min(8, "Password must be at least 8 characters")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        "Password must include uppercase, lowercase, number, and special character",
      )
      .required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Confirm password is required"),
  })

  // Formik form handling
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async (values) => {
      if (!termsAgreed) {
        alert("Please agree to the Terms of Use")
        return
      }

      if (referralCode) {
        values.referralBy = referralCode
      }

      dispatch(signupUser(values))
    },
  })

  return (
    <>
      <Header />
      <div className="h-[75px]"></div>

      {/* Main container with orange gradient background */}
      <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-orange-50 to-orange-100">
        <div className="w-full max-w-6xl">
          {/* Card container with modern glass effect */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-orange-100">
            <div className="md:flex">
              {/* Left side - Form */}
              <div className="md:w-3/5 p-10">
                <div className="mb-10">
                  <h2 className="text-4xl font-bold text-gray-800 mb-2">Create Your Account</h2>
                  <p className="text-orange-500">Join our platform in just a few steps</p>
                </div>

                <form onSubmit={formik.handleSubmit} className="space-y-6">
                  {/* Full Name & Email */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Full Name */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Full Name
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                          <FaUser className="text-orange-500" />
                        </div>
                        <input
                          type="text"
                          name="fullname"
                          placeholder="John Doe"
                          value={formik.values.fullname}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          className="w-full pl-10 pr-4 py-3 bg-orange-50 rounded-lg border border-orange-200 focus:border-orange-500 focus:ring focus:ring-orange-200 focus:ring-opacity-50 transition-all"
                        />
                      </div>
                      {formik.touched.fullname && formik.errors.fullname && (
                        <p className="mt-1 text-xs text-red-500">{formik.errors.fullname}</p>
                      )}
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                          <FaEnvelope className="text-orange-500" />
                        </div>
                        <input
                          type="email"
                          name="email"
                          id="email"
                          placeholder="you@example.com"
                          value={formik.values.email}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          className="w-full pl-10 pr-4 py-3 bg-orange-50 rounded-lg border border-orange-200 focus:border-orange-500 focus:ring focus:ring-orange-200 focus:ring-opacity-50 transition-all"
                        />
                      </div>
                      {formik.touched.email && formik.errors.email && (
                        <p className="mt-1 text-xs text-red-500">{formik.errors.email}</p>
                      )}
                    </div>
                  </div>

                  {/* Username & Phone */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Username */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Username
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                          <FaUserTag className="text-orange-500" />
                        </div>
                        <input
                          id="username"
                          type="text"
                          name="username"
                          placeholder="johndoe"
                          value={formik.values.username}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          className="w-full pl-10 pr-4 py-3 bg-orange-50 rounded-lg border border-orange-200 focus:border-orange-500 focus:ring focus:ring-orange-200 focus:ring-opacity-50 transition-all"
                        />
                      </div>
                      {formik.touched.username && formik.errors.username && (
                        <p className="mt-1 text-xs text-red-500">{formik.errors.username}</p>
                      )}
                    </div>

                    {/* Phone */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Phone Number
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                          <FaPhone className="text-orange-500" />
                        </div>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          placeholder="1234567890"
                          value={formik.values.phone}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          className="w-full pl-10 pr-4 py-3 bg-orange-50 rounded-lg border border-orange-200 focus:border-orange-500 focus:ring focus:ring-orange-200 focus:ring-opacity-50 transition-all"
                        />
                      </div>
                      {formik.touched.phone && formik.errors.phone && (
                        <p className="mt-1 text-xs text-red-500">{formik.errors.phone}</p>
                      )}
                    </div>
                  </div>

                  {/* Password & Confirm Password */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Password */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Password
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                          <FaLock className="text-orange-500" />
                        </div>
                        <input
                          type={showPass ? "text" : "password"}
                          name="password"
                          id="password"
                          placeholder="••••••••"
                          value={formik.values.password}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          className="w-full pl-10 pr-10 py-3 bg-orange-50 rounded-lg border border-orange-200 focus:border-orange-500 focus:ring focus:ring-orange-200 focus:ring-opacity-50 transition-all"
                        />
                        <button
                          type="button"
                          onClick={() => setShowPass(!showPass)}
                          className="absolute right-3 top-1/2 -translate-y-1/2 text-orange-500 hover:text-orange-600 transition-colors"
                        >
                          {showPass ? <FaRegEyeSlash size={18} /> : <FaRegEye size={18} />}
                        </button>
                      </div>
                      {formik.touched.password && formik.errors.password && (
                        <p className="mt-1 text-xs text-red-500">{formik.errors.password}</p>
                      )}
                    </div>

                    {/* Confirm Password */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Confirm Password
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                          <FaLock className="text-orange-500" />
                        </div>
                        <input
                          type={showConfirmPass ? "text" : "password"}
                          name="confirmPassword"
                          placeholder="••••••••"
                          value={formik.values.confirmPassword}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          className="w-full pl-10 pr-10 py-3 bg-orange-50 rounded-lg border border-orange-200 focus:border-orange-500 focus:ring focus:ring-orange-200 focus:ring-opacity-50 transition-all"
                        />
                        <button
                          type="button"
                          onClick={() => setShowConfirmPass(!showConfirmPass)}
                          className="absolute right-3 top-1/2 -translate-y-1/2 text-orange-500 hover:text-orange-600 transition-colors"
                        >
                          {showConfirmPass ? <FaRegEyeSlash size={18} /> : <FaRegEye size={18} />}
                        </button>
                      </div>
                      {formik.touched.confirmPassword && formik.errors.confirmPassword && (
                        <p className="mt-1 text-xs text-red-500">{formik.errors.confirmPassword}</p>
                      )}
                    </div>
                  </div>

                  {/* Referral Code */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Referral Code <span className="text-gray-500">(Optional)</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <FaGift className="text-orange-500" />
                      </div>
                      <input
                        name="referralBy"
                        placeholder="Enter referral code"
                        type="text"
                        value={referralCode || formik.values.referralBy}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        disabled={!!referralCode}
                        className="w-full pl-10 pr-4 py-3 bg-orange-50 rounded-lg border border-orange-200 focus:border-orange-500 focus:ring focus:ring-orange-200 focus:ring-opacity-50 transition-all disabled:bg-orange-50 disabled:text-gray-500"
                      />
                    </div>
                  </div>

                  {/* Terms Agreement */}
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      checked={termsAgreed}
                      onChange={() => setTermsAgreed(!termsAgreed)}
                      className="w-4 h-4 text-orange-500 border-orange-300 rounded focus:ring-orange-500"
                    />
                    <label className="ml-2 text-sm text-gray-600">
                      I agree to the{" "}
                      <a href="#" className="text-orange-500 hover:underline">
                        Terms of Use
                      </a>{" "}
                      and{" "}
                      <a href="#" className="text-orange-500 hover:underline">
                        Privacy Policy
                      </a>
                    </label>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={loading || !termsAgreed}
                      className="w-full px-6 py-4 bg-orange-500 hover:bg-orange-600 text-white font-medium rounded-lg transition-all shadow-lg hover:shadow-orange-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                    >
                      {loading ? <Spinner /> : "Create Your Account"}
                    </button>
                  </div>

                  <div className="text-center pt-2">
                    <p className="text-gray-600">
                      Already have an account?{" "}
                      <Link to="/user/login" className="text-orange-500 font-medium hover:underline">
                        Sign in
                      </Link>
                    </p>
                  </div>
                </form>
              </div>

              {/* Right side - Features */}
              <div className="md:w-2/5 bg-gradient-to-br from-orange-500 to-orange-600 p-10 flex items-center">
                <div className="w-full">
                  <div className="mb-8">
                    <h2 className="text-3xl font-bold text-white mb-4">Join Our Platform</h2>
                    <p className="text-orange-100 text-lg">
                      Create an account today and unlock premium features to maximize your investment potential.
                    </p>
                  </div>

                  <div className="space-y-6">
                    {[
                      {
                        title: "Advanced Analytics",
                        description: "Track your investments with real-time data and insights."
                      },
                      {
                        title: "Premium Support",
                        description: "Get 24/7 access to our expert customer support team."
                      },
                      {
                        title: "Secure Transactions",
                        description: "Rest easy with our enterprise-grade security protocols."
                      },
                      {
                        title: "Personalized Strategy",
                        description: "Receive custom investment recommendations based on your goals."
                      }
                    ].map((feature, index) => (
                      <div key={index} className="flex items-start">
                        <div className="bg-white/20 p-2 rounded-lg mr-4 flex-shrink-0">
                          <FaCheck className="h-5 w-5 text-white" />
                        </div>
                        <div>
                          <h3 className="text-white font-semibold">{feature.title}</h3>
                          <p className="text-orange-100 text-sm">{feature.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-12 bg-orange-600/30 p-4 rounded-lg border border-orange-500/30">
                    <p className="text-orange-100 text-sm">
                      "This platform has transformed how I manage my investments. The tools are intuitive and the support team is always ready to help."
                    </p>
                    <p className="text-white font-medium mt-2">— Sarah Johnson, Premium Member</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Error and Success Alerts */}
      {error && <ErrorAlert error={error} />}
      {message && <SuccessAlert message={message} />}
    </>
  )
}