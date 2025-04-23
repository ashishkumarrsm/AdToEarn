// import { Link } from "react-router-dom";
// import { useState, useEffect } from "react";
// import { AiFillDelete } from "react-icons/ai";
// import { Confirmation } from "../BaseFile/comman/Confirmation";
// import Loader from "../BaseFile/comman/Loader";
// import { Radio, RadioGroup } from "@headlessui/react";
// import { CheckIcon } from "@heroicons/react/20/solid";
// import Spinner from "../BaseFile/comman/Spinner";

// import {
//   getAllPlans,
//   clearErrors,
//   deletePlan,
//   clearMessage,
// } from "../redux/planSlice";
// import { useDispatch, useSelector } from "react-redux";

// export default function AdminPlan() {
//   const dispatch = useDispatch();
//   const { allplans, loading, error, message } = useSelector(
//     (state) => state.allplans
//   );

//   const [searchQuery, setSearchQuery] = useState("");
//   const [modalopen, setModalopen] = useState(false);
//   const [annual, setAnnual] = useState(false);
//   const [deleteID, setdeleteID] = useState();

//   useEffect(() => {
//     dispatch(getAllPlans());
//     if (error) {
//       const errorInterval = setInterval(() => {
//         dispatch(clearErrors());
//       }, 3000);
//       return () => clearInterval(errorInterval);
//     }
//     if (message) {
//       const messageInterval = setInterval(() => {
//         dispatch(clearMessage());
//       }, 3000);
//       return () => clearInterval(messageInterval);
//     }
//   }, [dispatch, error, message, clearErrors, clearMessage]);

//   function isClose() {
//     setModalopen(false);
//   }
//   function handleDelete(id) {
//     setdeleteID(id);
//     if (deleteID) {
//       console.log(id);
//       setModalopen(true);
//     }
//   }

//   return (
//     <>
//       {loading ? (
//         <Loader isLoading={loading} />
//       ) : (
//         <div className="flex items-center">
//           <div className="flex items-center px-4 py-28 mx-auto max-w-7xl">
//             <div className="grid isolate grid-cols-1 gap-4 mx-auto mt-10 lg:grid-cols-4 sm:grid-cols-2">


//               {allplans?.map((allPlans) => (
//                 <>
//                   <div
//                     class="overflow-hidden relative p-5 rounded-xl duration-1000 cursor-pointer group hover:duration-1000 bg-neutral-800"
//                   >
//                     <div
//                       class="absolute -top-12 -left-12 w-24 h-24 bg-transparent rounded-full shadow-inner transition-all duration-1000 ease-in-out group-hover:scale-150 shadow-yellow-800 group-hover:duration-1000"
//                     ></div>
//                     <div
//                       class="absolute left-14 top-44 w-24 h-24 bg-transparent rounded-full shadow-inner transition-all duration-1000 ease-in-out group-hover:scale-150 shadow-red-800 group-hover:duration-1000"
//                     ></div>
//                     <div
//                       class="absolute top-24 left-56 w-24 h-24 bg-transparent rounded-full shadow-inner transition-all duration-1000 ease-in-out group-hover:scale-150 shadow-sky-800 group-hover:duration-1000"
//                     ></div>
//                     <div
//                       class="absolute top-12 left-12 w-12 h-12 bg-transparent rounded-full shadow-inner transition-all duration-1000 ease-in-out group-hover:scale-150 shadow-red-800 group-hover:duration-1000"
//                     ></div>
//                     <div
//                       class="absolute top-12 left-12 w-44 h-44 bg-transparent rounded-full shadow-inner transition-all duration-1000 ease-in-out group-hover:scale-150 shadow-green-800 group-hover:duration-1000"
//                     ></div>
//                     <div
//                       class="absolute -left-12 -top-24 w-64 h-64 bg-transparent rounded-full shadow-inner transition-all duration-1000 ease-in-out group-hover:scale-150 shadow-sky-800 group-hover:duration-1000"
//                     ></div>
//                     <div
//                       class="absolute left-12 top-24 w-4 h-4 bg-transparent rounded-full shadow-inner transition-all duration-1000 ease-in-out group-hover:scale-150 shadow-sky-500 group-hover:duration-1000"
//                     ></div>
//                     <div
//                       class="flex flex-col gap-2 justify-center p-3 w-full h-full bg-gray-800 rounded-xl shadow-xl shadow-neutral-900"
//                     >
//                       <span class="z-50 text-2xl italic font-bold text-white uppercase"> {allPlans?.name}</span>
//                       <p class="italic font-bold text-white">
//                         {allPlans?.description}
//                       </p>
//                       <p class="text-4xl italic font-bold text-white">
//                         ${allPlans?.monthly_price}
//                       </p>






//                       <ul
//                         role="list"
//                         className="mt-8 space-y-3 text-base leading-6 text-justify"
//                       >
//                         <li className="flex gap-x-3 text-white">
//                           <CheckIcon
//                             aria-hidden="true"
//                             className="flex-none w-5 h-6 text-indigo-100"
//                           />
//                           {allPlans?.ROI_overall} % ROI Overall
//                         </li>
//                         <li className="flex gap-x-3 text-base text-justify text-white">
//                           <CheckIcon
//                             aria-hidden="true"
//                             className="flex-none w-5 h-6 text-indigo-100"
//                           />
//                           {allPlans?.Sponser_bonus} % Sponser Bonus
//                         </li>
//                         <li className="flex gap-x-3 text-base text-justify text-white">
//                           <CheckIcon
//                             aria-hidden="true"
//                             className="flex-none w-5 h-6 text-indigo-100"
//                           />
//                           T & C : Participants must be at least 18 years old to enroll in any marketing plan
//                         </li>
//                       </ul>
//                     </div>
//                   </div>
//                 </>
//               ))}






              
//             </div>
//           </div>
//         </div>
//       )}

//       {modalopen && (
//         <Confirmation
//           isClose={isClose}
//           deletefunction={deletePlan}
//           id={deleteID}
//         />
//       )}
//     </>
//   );
// }


























import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { AiFillDelete, AiFillStar } from "react-icons/ai";
import { Confirmation } from "../BaseFile/comman/Confirmation";
import Loader from "../BaseFile/comman/Loader";
import { Radio, RadioGroup } from "@headlessui/react";
import { CheckIcon, ChartBarIcon, CurrencyDollarIcon, UserGroupIcon } from "@heroicons/react/20/solid";
import Spinner from "../BaseFile/comman/Spinner";

import {
  getAllPlans,
  clearErrors,
  deletePlan,
  clearMessage,
} from "../redux/planSlice";
import { useDispatch, useSelector } from "react-redux";

export default function AdminPlan() {
  const dispatch = useDispatch();
  const { allplans, loading, error, message } = useSelector(
    (state) => state.allplans
  );

  const [searchQuery, setSearchQuery] = useState("");
  const [modalopen, setModalopen] = useState(false);
  const [annual, setAnnual] = useState(false);
  const [deleteID, setdeleteID] = useState();
  const [selectedPlan, setSelectedPlan] = useState(null);

  useEffect(() => {
    dispatch(getAllPlans());
    if (error) {
      const errorInterval = setInterval(() => {
        dispatch(clearErrors());
      }, 3000);
      return () => clearInterval(errorInterval);
    }
    if (message) {
      const messageInterval = setInterval(() => {
        dispatch(clearMessage());
      }, 3000);
      return () => clearInterval(messageInterval);
    }
  }, [dispatch, error, message]);

  function isClose() {
    setModalopen(false);
  }

  function handleDelete(id) {
    setdeleteID(id);
    if (id) {
      setModalopen(true);
    }
  }

  function handleSelectPlan(plan) {
    setSelectedPlan(plan);
  }

  return (
    <>
      {loading ? (
        <Loader isLoading={loading} />
      ) : (
        <div className="min-h-screen bg-gray-50">
          <div className="w-full mx-auto px-4 py-12 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
                <span className="text-orange-500">Premium</span> Plans
              </h1>
              <p className="mt-5 max-w-xl mx-auto text-xl text-gray-500">
                Choose the perfect plan for your investment needs
              </p>
              
              {/* Toggle for Monthly/Annual */}
              <div className="mt-8 flex justify-center">
                <div className="bg-gray-100 p-1 rounded-full flex">
                  <button
                    type="button"
                    className={`${
                      !annual ? 'bg-orange-500 text-white' : 'bg-transparent text-gray-500'
                    } rounded-full py-2 px-6 text-sm font-medium transition-all`}
                    onClick={() => setAnnual(false)}
                  >
                    Monthly
                  </button>
                  <button
                    type="button"
                    className={`${
                      annual ? 'bg-orange-500 text-white' : 'bg-transparent text-gray-500'
                    } rounded-full py-2 px-6 text-sm font-medium transition-all`}
                    onClick={() => setAnnual(true)}
                  >
                    Annual (Save 20%)
                  </button>
                </div>
              </div>
              
              {/* Search Bar */}
              <div className="mt-6 max-w-md mx-auto">
                <div className="relative">
                  <input
                    type="text"
                    className="w-full pl-4 pr-10 py-2 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-orange-500"
                    placeholder="Search plans..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                    <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Performance Metrics */}
            <div className="mb-12 grid grid-cols-1 gap-5 sm:grid-cols-3">
              <div className="bg-white overflow-hidden shadow rounded-lg">
                <div className="px-4 py-5 sm:p-6">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 bg-orange-100 rounded-md p-3">
                      <CurrencyDollarIcon className="h-6 w-6 text-orange-500" aria-hidden="true" />
                    </div>
                    <div className="ml-5 w-0 flex-1">
                      <dl>
                        <dt className="text-sm font-medium text-gray-500 truncate">Average ROI</dt>
                        <dd className="flex items-baseline">
                          <div className="text-2xl font-semibold text-gray-900">145%</div>
                          <div className="ml-2 flex items-baseline text-sm font-semibold text-green-600">
                            <svg className="self-center flex-shrink-0 h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                              <path fillRule="evenodd" d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
                            </svg>
                            <span className="sr-only">Increased by</span>
                            12.5%
                          </div>
                        </dd>
                      </dl>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white overflow-hidden shadow rounded-lg">
                <div className="px-4 py-5 sm:p-6">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 bg-orange-100 rounded-md p-3">
                      <UserGroupIcon className="h-6 w-6 text-orange-500" aria-hidden="true" />
                    </div>
                    <div className="ml-5 w-0 flex-1">
                      <dl>
                        <dt className="text-sm font-medium text-gray-500 truncate">Active Users</dt>
                        <dd className="flex items-baseline">
                          <div className="text-2xl font-semibold text-gray-900">2,540</div>
                          <div className="ml-2 flex items-baseline text-sm font-semibold text-green-600">
                            <svg className="self-center flex-shrink-0 h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                              <path fillRule="evenodd" d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
                            </svg>
                            <span className="sr-only">Increased by</span>
                            8.1%
                          </div>
                        </dd>
                      </dl>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white overflow-hidden shadow rounded-lg">
                <div className="px-4 py-5 sm:p-6">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 bg-orange-100 rounded-md p-3">
                      <ChartBarIcon className="h-6 w-6 text-orange-500" aria-hidden="true" />
                    </div>
                    <div className="ml-5 w-0 flex-1">
                      <dl>
                        <dt className="text-sm font-medium text-gray-500 truncate">Plan Conversions</dt>
                        <dd className="flex items-baseline">
                          <div className="text-2xl font-semibold text-gray-900">78.5%</div>
                          <div className="ml-2 flex items-baseline text-sm font-semibold text-green-600">
                            <svg className="self-center flex-shrink-0 h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                              <path fillRule="evenodd" d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
                            </svg>
                            <span className="sr-only">Increased by</span>
                            5.4%
                          </div>
                        </dd>
                      </dl>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Plan Cards Grid */}
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {allplans?.map((plan) => (
                <div 
                  key={plan.id}
                  className="relative overflow-hidden bg-white rounded-2xl shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
                >
                  {/* Fancy accent */}
                  <div className="absolute inset-0">
                    <div className="absolute -top-16 -left-16 w-32 h-32 bg-orange-500 opacity-10 rounded-full"></div>
                    <div className="absolute top-32 right-0 w-20 h-20 bg-orange-300 opacity-20 rounded-full transform translate-x-1/2"></div>
                    <div className="absolute bottom-0 left-10 w-24 h-24 bg-orange-400 opacity-10 rounded-full transform translate-y-1/2"></div>
                  </div>
                  
                  {/* Price Tag Accent */}
                  <div className="absolute top-6 right-6">
                    <div className="bg-orange-500 text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg">
                      ${plan?.monthly_price}/mo
                    </div>
                  </div>
                  
                  <div className="relative p-6">
                    <div className="flex items-center mb-4">
                      <div className="bg-orange-100 p-2 rounded-lg">
                        <AiFillStar className="h-6 w-6 text-orange-500" />
                      </div>
                      <h3 className="ml-3 text-xl font-bold text-gray-900">{plan?.name}</h3>
                    </div>
                    
                    <p className="text-gray-600 mb-6">{plan?.description}</p>
                    
                    {/* ROI Graph Visualization */}
                    <div className="mb-6">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-gray-500">ROI Progress</span>
                        <span className="text-sm font-bold text-orange-500">{plan?.ROI_overall}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div 
                          className="bg-orange-500 h-2.5 rounded-full" 
                          style={{ width: `${Math.min(100, plan?.ROI_overall)}%` }}
                        ></div>
                      </div>
                    </div>
                    
                    <ul className="space-y-3 text-sm text-gray-600">
                      <li className="flex">
                        <CheckIcon className="h-5 w-5 text-orange-500 flex-shrink-0 mr-2" />
                        <span>{plan?.ROI_overall}% ROI Overall</span>
                      </li>
                      <li className="flex">
                        <CheckIcon className="h-5 w-5 text-orange-500 flex-shrink-0 mr-2" />
                        <span>{plan?.Sponser_bonus}% Sponsor Bonus</span>
                      </li>
                      <li className="flex">
                        <CheckIcon className="h-5 w-5 text-orange-500 flex-shrink-0 mr-2" />
                        <span className="text-xs">T & C: Participants must be at least 18 years old</span>
                      </li>
                    </ul>
                    
                    <div className="mt-6 flex justify-between items-center">
                      <button
                        onClick={() => handleSelectPlan(plan)}
                        className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-orange-500 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
                      >
                        Select Plan
                      </button>
                      
                      <button
                        onClick={() => handleDelete(plan.id)}
                        className="p-2 text-gray-400 hover:text-red-500 rounded-full hover:bg-gray-100"
                      >
                        <AiFillDelete className="h-5 w-5" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Add New Plan Button */}
            <div className="mt-12 text-center">
              <Link
                to="/add-plan"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-orange-500 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
              >
                Add New Plan
              </Link>
            </div>
          </div>
        </div>
      )}

      {modalopen && (
        <Confirmation
          isClose={isClose}
          deletefunction={deletePlan}
          id={deleteID}
        />
      )}
      
      {/* Selected Plan Modal */}
      {selectedPlan && (
        <div className="fixed inset-0 overflow-y-auto z-50">
          <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 transition-opacity" aria-hidden="true">
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>
            <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
            <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6">
              <div>
                <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-orange-100">
                  <CheckIcon className="h-6 w-6 text-orange-500" aria-hidden="true" />
                </div>
                <div className="mt-3 text-center sm:mt-5">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">{selectedPlan.name} Selected</h3>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                      You have selected the {selectedPlan.name} plan with {selectedPlan.ROI_overall}% ROI.
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-5 sm:mt-6 sm:grid sm:grid-cols-2 sm:gap-3 sm:grid-flow-row-dense">
                <button
                  type="button"
                  className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-orange-500 text-base font-medium text-white hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 sm:col-start-2 sm:text-sm"
                  onClick={() => setSelectedPlan(null)}
                >
                  Confirm
                </button>
                <button
                  type="button"
                  className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 sm:mt-0 sm:col-start-1 sm:text-sm"
                  onClick={() => setSelectedPlan(null)}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}