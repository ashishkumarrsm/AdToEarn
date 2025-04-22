// import { useState, useEffect } from "react";
// import { Description, Field, Label, Switch } from "@headlessui/react";
// import {
//   ChevronRight,
//   Settings,
//   Power,
//   UserPlus,
//   Lock,
//   CreditCard,
//   DollarSign,
//   HelpCircle,
//   RefreshCw,
//   LogIn,
//   Bell,
// } from "lucide-react";
// import { 

//   Users,  
//   Download, 
//   PlusCircle 
// } from 'lucide-react';
// import {
//   getSettings,
//   clearErrors,
//   clearMessage,
//   updateSettings,
// } from "../redux/settingsSlice";
// import { useDispatch, useSelector } from "react-redux";
// import SuccessAlert from "../BaseFile/comman/SuccessAlert";
// import ErrorAlert from "../BaseFile/comman/ErrorAlert";
// export default function AdminSetting() {
//   const dispatch = useDispatch();
//   const { settings, loading, error, message } = useSelector(
//     (state) => state.settings
//   );

//   // Initialize states based on settings from backend
//   const [level, setLevel] = useState(false);
//   const [direct, setDirect] = useState(false);
//   const [reward, setReward] = useState(false);
//   const [register, setRegister] = useState(false);
//   const [login, setLogin] = useState(false);
//   const [withdrawal, setWithdrawal] = useState(false);
//   const [deposite, setDeposite] = useState(false);
//   const [roi, setRoi] = useState(false);
//   const [support, setSupport] = useState(false);
//   const [topup, setTopup] = useState(false);

//   useEffect(() => {
//     dispatch(getSettings());
//   }, [dispatch]);

//   useEffect(() => {
//     if (settings) {
//       setLevel(settings.setlevel === 1);
//       setDirect(settings.setdirect === 1);
//       setReward(settings.setreward === 1);
//       setRegister(settings.setregister === 1);
//       setLogin(settings.setlogin === 1);
//       setWithdrawal(settings.setwithdrawal === 1);
//       setDeposite(settings.setdeposite === 1);
//       setRoi(settings.setroi === 1);
//       setSupport(settings.setsupport === 1);
//       setTopup(settings.settopup === 1);
//     }
//   }, [settings]);

//   useEffect(() => {
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
//   }, [dispatch, error, message]);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const values = {
//       level,
//       direct,
//       reward,
//       register,
//       login,
//       withdrawal,
//       deposite,
//       roi,
//       support,
//       topup,
//     };
//     dispatch(updateSettings(values));
//   };
  

//   return (
//     <div>
//       <main className="bg-gradient-to-br from-indigo-800 to-purple-900 p-6 rounded-lg">
//         <div className="max-w-6xl mx-auto ">
//           <div className="pt-5 pb-8 overflow-hidden text-gray-100   rounded-md ">
//             <div className="   ">
//               {message && <SuccessAlert message={message} />}
//               {error && <ErrorAlert error={error} />}
//               <form
//                 className="  max-w-5xl mx-auto"
//                 onSubmit={handleSubmit}
//               >
//                 <div className="  bg-white/20 p-3 rounded-xl shadow-2xl border border-white/60  ">
//                   <div className="">
//                     <div className=" rounded-2xl p-6">
//                       <div className="flex justify-center   items-center space-x-4">
//                         <Settings className="w-12 h-12 text-white" />
//                         <div>
//                           <div className="text-4xl text-center font-bold text-white">
//                             App Settings
//                           </div>
                         
//                         </div>
//                       </div>
//                     </div>
//                     <ul role="list" className="   mt-6">
//                       <div className="grid xl:grid-cols-3 lg:grid-cols-2  grid-cols-1  gap-x-4">
//                       <Field
//                             as="li"
//                             className="flex items-center shadow-lg mb-4 rounded-xl justify-between p-4 bg-gradient-to-br from-indigo-800 to-purple-900"
//                           >
//                             <div>
//                               <DollarSign className="  font-bold  p-3 bg-white/20 rounded-full group-hover:bg-blue-100 transition-colors h-14 w-14 item-center flex justify-center " />

//                               <div className="flex flex-col ">
//                               <Label
//                                 as="p"
//                                 passive
//                                 className="text-lg font-semibold mt-3 text-white"
//                               >
//                                 Allow Level Income
//                               </Label>
//                               <Description className="text-sm text-gray-300 font-light ">
//                                 You can turn on and off level income for users.
//                               </Description>
//                               </div>
//                             </div>

//                             <Switch
//                               checked={level}
//                               onChange={setLevel}
//                              className="group relative ml-4 inline-flex h-8   w-16 text-green-400 hover:text-green-300 transition-colors flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent bg-gray-900/50 duration-200 data-[checked]:bg-purple-400  ease-in-out focus:outline-none "
//                             >
//                               <span
//                                 aria-hidden="true"
//                                 className="inline-block h-7 w-7 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out group-data-[checked]:translate-x-8"
//                               />
//                             </Switch>
//                           </Field>
                          
//                          <Field
//                             as="li"
//                             className="flex items-center shadow-lg mb-4 rounded-xl justify-between p-4 bg-gradient-to-br from-indigo-800 to-purple-900"
//                           >
//                             <div>
                              
//                               <DollarSign className="  font-bold  p-3 bg-white/20 rounded-full group-hover:bg-blue-100 transition-colors h-14 w-14 item-center flex justify-center " />
//                               <div className="flex flex-col">
//                                 <Label
//                                   as="p"
//                                   passive
//                                   className="text-lg font-semibold mt-3 text-white "
//                                 >
//                                   Allow Direct Income
//                                 </Label>
//                                  <Description className="text-sm text-gray-300 font-light">
//                                   You can turn on and off direct income for
//                                   users.
//                                 </Description>
//                               </div>
//                             </div>

//                             <Switch
//                               checked={direct}
//                               onChange={setDirect}
//                              className="group relative ml-4 inline-flex h-8   w-16 text-green-400 hover:text-green-300 transition-colors flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent bg-gray-900/50 duration-200 data-[checked]:bg-purple-400  ease-in-out focus:outline-none "
//                             >
//                               <span
//                                 aria-hidden="true"
//                                 className="inline-block h-7 w-7 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out group-data-[checked]:translate-x-8"
//                               />
//                             </Switch>
//                           </Field>
//                          <Field
//                             as="li"
//                             className="flex items-center shadow-lg mb-4 rounded-xl justify-between p-4 bg-gradient-to-br from-indigo-800 to-purple-900"
//                           >
//                             <div>
                              
//                               <DollarSign className="  font-bold  p-3 bg-white/20 rounded-full group-hover:bg-blue-100 transition-colors h-14 w-14 item-center flex justify-center " />
//                               <div className="flex flex-col">
//                                 <Label
//                                   as="p"
//                                   passive
//                                   className="text-lg font-semibold mt-3 text-white "
//                                 >
//                                   Allow Reward
//                                 </Label>
//                                  <Description className="text-sm text-gray-300 font-light">
//                                   You can turn on and off rewards for users.
//                                 </Description>
//                               </div>
//                             </div>

//                             <Switch
//                               checked={reward}
//                               onChange={setReward}
//                              className="group relative ml-4 inline-flex h-8   w-16 text-green-400 hover:text-green-300 transition-colors flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent bg-gray-900/50 duration-200 data-[checked]:bg-purple-400  ease-in-out focus:outline-none "
//                             >
//                               <span
//                                 aria-hidden="true"
//                                 className="inline-block h-7 w-7 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out group-data-[checked]:translate-x-8"
//                               />
//                             </Switch>
//                           </Field>
//                          <Field
//                             as="li"
//                             className="flex items-center shadow-lg mb-4 rounded-xl justify-between p-4 bg-gradient-to-br from-indigo-800 to-purple-900"
//                           >
//                             <div>
                              
//                               <DollarSign className="  font-bold  p-3 bg-white/20 rounded-full group-hover:bg-blue-100 transition-colors h-14 w-14 item-center flex justify-center " />
//                               <div className="flex flex-col">
//                                 <Label
//                                   as="p"
//                                   passive
//                                   className="text-lg font-semibold mt-3 text-white "
//                                 >
//                                   Allow New Registration
//                                 </Label>
//                                  <Description className="text-sm text-gray-300 font-light">
//                                   You can turn on and off new registrations for
//                                   new users.
//                                 </Description>
//                               </div>
//                             </div>

//                             <Switch
//                               checked={register}
//                               onChange={setRegister}
//                              className="group relative ml-4 inline-flex h-8   w-16 text-green-400 hover:text-green-300 transition-colors flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent bg-gray-900/50 duration-200 data-[checked]:bg-purple-400  ease-in-out focus:outline-none "
//                             >
//                               <span
//                                 aria-hidden="true"
//                                 className="inline-block h-7 w-7 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out group-data-[checked]:translate-x-8"
//                               />
//                             </Switch>
//                           </Field>
//                          <Field
//                             as="li"
//                             className="flex items-center shadow-lg mb-4 rounded-xl justify-between p-4 bg-gradient-to-br from-indigo-800 to-purple-900"
//                           >
//                             <div>
                              
//                               <DollarSign className="  font-bold  p-3 bg-white/20 rounded-full group-hover:bg-blue-100 transition-colors h-14 w-14 item-center flex justify-center " />
//                               <div className="flex flex-col">
//                                 <Label
//                                   as="p"
//                                   passive
//                                   className="text-lg font-semibold mt-3 text-white "
//                                 >
//                                   Allow Login
//                                 </Label>
//                                 <Description className="text-sm text-gray-300 font-light">
//                                   You can turn on and off login for users.
//                                 </Description>
//                               </div>
//                             </div>

//                             <Switch
//                               checked={login}
//                               onChange={setLogin}
//                              className="group relative ml-4 inline-flex h-8   w-16 text-green-400 hover:text-green-300 transition-colors flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent bg-gray-900/50 duration-200 data-[checked]:bg-purple-400  ease-in-out focus:outline-none "
//                             >
//                               <span
//                                 aria-hidden="true"
//                                 className="inline-block h-7 w-7 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out group-data-[checked]:translate-x-8"
//                               />
//                             </Switch>
//                           </Field>
                       
                     
//                          <Field
//                             as="li"
//                             className="flex items-center shadow-lg mb-4 rounded-xl justify-between p-4 bg-gradient-to-br from-indigo-800 to-purple-900"
//                           >
//                             <div>
                              
//                               <DollarSign className="  font-bold  p-3 bg-white/20 rounded-full group-hover:bg-blue-100 transition-colors h-14 w-14 item-center flex justify-center " />
//                               <div className="flex flex-col">
//                                 <Label
//                                   as="p"
//                                   passive
//                                   className="text-lg font-semibold mt-3 text-white "
//                                 >
//                                   Allow Withdrawal
//                                 </Label>
//                                 <Description className="text-sm text-gray-300 font-light ">
//                                   You can turn on and off withdrawals for users.
//                                 </Description>
//                               </div>
//                             </div>

//                             <Switch
//                               checked={withdrawal}
//                               onChange={setWithdrawal}
//                              className="group relative ml-4 inline-flex h-8   w-16 text-green-400 hover:text-green-300 transition-colors flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent bg-gray-900/50 duration-200 data-[checked]:bg-purple-400  ease-in-out focus:outline-none "
//                             >
//                               <span
//                                 aria-hidden="true"
//                                 className="inline-block h-7 w-7 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out group-data-[checked]:translate-x-8"
//                               />
//                             </Switch>
//                           </Field>
//                          <Field
//                             as="li"
//                             className="flex items-center shadow-lg mb-4 rounded-xl justify-between p-4 bg-gradient-to-br from-indigo-800 to-purple-900"
//                           >
//                             <div>
                              
//                               <DollarSign className="  font-bold  p-3 bg-white/20 rounded-full group-hover:bg-blue-100 transition-colors h-14 w-14 item-center flex justify-center " />
//                               <div className="flex flex-col">
//                                 <Label
//                                   as="p"
//                                   passive
//                                   className="text-lg font-semibold mt-3 text-white "
//                                 >
//                                   Allow Deposite
//                                 </Label>
//                                  <Description className="text-sm text-gray-300 font-light">
//                                   You can turn on and off deposites for users.
//                                 </Description>
//                               </div>
//                             </div>

//                             <Switch
//                               checked={deposite}
//                               onChange={setDeposite}
//                              className="group relative ml-4 inline-flex h-8   w-16 text-green-400 hover:text-green-300 transition-colors flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent bg-gray-900/50 duration-200 data-[checked]:bg-purple-400  ease-in-out focus:outline-none "
//                             >
//                               <span
//                                 aria-hidden="true"
//                                 className="inline-block h-7 w-7 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out group-data-[checked]:translate-x-8"
//                               />
//                             </Switch>
//                           </Field>
//                          <Field
//                             as="li"
//                             className="flex items-center shadow-lg mb-4 rounded-xl justify-between p-4 bg-gradient-to-br from-indigo-800 to-purple-900"
//                           >
//                             <div>
                              
//                               <DollarSign className="  font-bold  p-3 bg-white/20 rounded-full group-hover:bg-blue-100 transition-colors h-14 w-14 item-center flex justify-center " />
//                               <div className="flex flex-col">
//                                 <Label
//                                   as="p"
//                                   passive
//                                   className="text-lg font-semibold mt-3 text-white "
//                                 >
//                                   Allow ROI
//                                 </Label>
//                                  <Description className="text-sm text-gray-300 font-light">
//                                   You can turn on and off ROI for users.
//                                 </Description>
//                               </div>
//                             </div>

//                             <Switch
//                               checked={roi}
//                               onChange={setRoi}
//                              className="group relative ml-4 inline-flex h-8   w-16 text-green-400 hover:text-green-300 transition-colors flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent bg-gray-900/50 duration-200 data-[checked]:bg-purple-400  ease-in-out focus:outline-none "
//                             >
//                               <span
//                                 aria-hidden="true"
//                                 className="inline-block h-7 w-7 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out group-data-[checked]:translate-x-8"
//                               />
//                             </Switch>
//                           </Field>
//                          <Field
//                             as="li"
//                             className="flex items-center shadow-lg mb-4 rounded-xl justify-between p-4 bg-gradient-to-br from-indigo-800 to-purple-900"
//                           >
//                             <div>
//                             <DollarSign className="  font-bold  p-3 bg-white/20 rounded-full group-hover:bg-blue-100 transition-colors h-14 w-14 item-center flex justify-center " />
//                               <div className="flex flex-col">
//                                 <Label
//                                   as="p"
//                                   passive
//                                   className="text-lg font-semibold mt-3 text-white "
//                                 >
//                                   Allow Support
//                                 </Label>
//                                  <Description className="text-sm text-gray-300 font-light">
//                                   You can turn on and off support for users.
//                                 </Description>
//                               </div>
//                             </div>

//                             <Switch
//                               checked={support}
//                               onChange={setSupport}
//                              className="group relative ml-4 inline-flex h-8   w-16 text-green-400 hover:text-green-300 transition-colors flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent bg-gray-900/50 duration-200 data-[checked]:bg-purple-400  ease-in-out focus:outline-none "
//                             >
//                               <span
//                                 aria-hidden="true"
//                                 className="inline-block h-7 w-7 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out group-data-[checked]:translate-x-8"
//                               />
//                             </Switch>
//                           </Field>
//                          <Field
//                             as="li"
//                             className="flex items-center shadow-lg mb-4 rounded-xl justify-between p-4 bg-gradient-to-br from-indigo-800 to-purple-900"
//                           >
//                             <div>
//                             <DollarSign className="  font-bold  p-3 bg-white/20 rounded-full group-hover:bg-blue-100 transition-colors h-14 w-14 item-center flex justify-center " />
//                               <div className="flex flex-col">
//                               <Label
//                                 as="p"
//                                 passive
//                                 className="text-lg font-semibold mt-3 text-white "
//                               >
//                                 Allow Topup
//                               </Label>
//                                 <Description className="text-sm text-gray-300 font-light">
//                                 You can turn on and off topup for users.
//                               </Description>
//                               </div>
//                             </div>

//                             <Switch
//                               checked={topup}
//                               onChange={setTopup}
//                              className="group relative ml-4 inline-flex h-8   w-16 text-green-400 hover:text-green-300 transition-colors flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent bg-gray-900/50 duration-200 data-[checked]:bg-purple-400  ease-in-out focus:outline-none "
//                             >
//                               <span
//                                 aria-hidden="true"
//                                 className="inline-block h-7 w-7 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out group-data-[checked]:translate-x-8"
//                               />
//                             </Switch>
//                           </Field>
                   
                      
                      
//                       </div>
//                     </ul>
//                   </div>
//                 </div>

//                 <div className="pt-6  ">
//                   <div className="flex justify-end gap-4 px-4 sm:px-6">
//                     <button
//                       type="submit"
//                       className="inline-flex justify-center px-6 py-2 text-base font-semibold mt-3 text-white rounded-md shadow-sm  hover:bg-purple-800 bg-purple-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-700"
//                     >
//                       Save
//                     </button>
//                     <button
//                       type="button"
//                       className="inline-flex justify-center px-6 py-2 text-base font-semibold mt-3 text-white bg-black rounded-md shadow-sm hover:bg-gray-800  "
//                     >
//                       Cancel
//                     </button>
//                   </div>
//                 </div>
//               </form>
//             </div>
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// }







import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Settings,
  DollarSign,
  Users,
  Key,
  ShieldCheck,
  BellRing,
  Wallet,
  BarChart4,
  HelpCircle,
  ArrowUpCircle,
  Sliders,
  LogIn,
  UserPlus,
  Download,
  Upload,
  CreditCard,
  LineChart,
  Lock
} from "lucide-react";
import {
  getSettings,
  clearErrors,
  clearMessage,
  updateSettings,
} from "../redux/settingsSlice";

// Alert Components
const SuccessAlert = ({ message }) => (
  <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 mb-4 rounded shadow-md">
    <div className="flex items-center">
      <div className="py-1">
        <svg className="h-6 w-6 text-green-500 mr-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
        </svg>
      </div>
      <div>
        <p className="font-bold">Success</p>
        <p className="text-sm">{message}</p>
      </div>
    </div>
  </div>
);

const ErrorAlert = ({ error }) => (
  <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-4 rounded shadow-md">
    <div className="flex items-center">
      <div className="py-1">
        <svg className="h-6 w-6 text-red-500 mr-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </div>
      <div>
        <p className="font-bold">Error</p>
        <p className="text-sm">{error}</p>
      </div>
    </div>
  </div>
);

// Toggle Switch Component
const ToggleSwitch = ({ checked, onChange, label, description, icon }) => {
  const Icon = icon;
  
  return (
    <div className="flex items-center justify-between p-5 bg-white rounded-xl shadow-lg border-l-4 border-orange-500 mb-4 hover:shadow-xl transition-all flex-wrap">
      <div className="flex items-center flex-wrap">
        <div className="p-3 bg-orange-100 text-orange-500 rounded-lg mr-4">
          <Icon size={24} />
        </div>
        <div>
          <h3 className="font-semibold text-gray-800 text-lg">{label}</h3>
          <p className="text-gray-500 text-sm">{description}</p>
        </div>
      </div>
      <div className="relative inline-block w-16 align-middle select-none">
        <input
          type="checkbox"
          checked={checked}
          onChange={() => onChange(!checked)}
          className="opacity-0 absolute h-0 w-0"
          id={`toggle-${label.replace(/\s+/g, '-').toLowerCase()}`}
        />
        <label
          htmlFor={`toggle-${label.replace(/\s+/g, '-').toLowerCase()}`}
          className={`block overflow-hidden h-8 rounded-full cursor-pointer transition-colors duration-200 ease-in-out ${
            checked ? "bg-orange-500" : "bg-gray-300"
          }`}
        >
          <span
            className={`block h-8 w-8 rounded-full bg-white shadow transform transition-transform duration-200 ease-in-out ${
              checked ? "translate-x-8" : "translate-x-0"
            }`}
          />
        </label>
      </div>
    </div>
  );
};

// Stats Card Component
const StatsCard = ({ title, value, icon }) => {
  const Icon = icon;
  
  return (
    <div className="bg-white p-4 rounded-xl shadow-lg border-b-4 border-orange-500">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-gray-500 text-sm">{title}</p>
          <p className="text-2xl font-bold text-gray-800">{value}</p>
        </div>
        <div className="p-3 bg-orange-100 text-orange-500 rounded-lg">
          <Icon size={24} />
        </div>
      </div>
    </div>
  );
};

export default function AdminSetting() {
  const dispatch = useDispatch();
  const { settings, loading, error, message } = useSelector(
    (state) => state.settings
  );

  // Initialize states based on settings from backend
  const [level, setLevel] = useState(false);
  const [direct, setDirect] = useState(false);
  const [reward, setReward] = useState(false);
  const [register, setRegister] = useState(false);
  const [login, setLogin] = useState(false);
  const [withdrawal, setWithdrawal] = useState(false);
  const [deposite, setDeposite] = useState(false);
  const [roi, setRoi] = useState(false);
  const [support, setSupport] = useState(false);
  const [topup, setTopup] = useState(false);
  
  // New state for the active tab
  const [activeTab, setActiveTab] = useState("features");

  useEffect(() => {
    dispatch(getSettings());
  }, [dispatch]);

  useEffect(() => {
    if (settings) {
      setLevel(settings.setlevel === 1);
      setDirect(settings.setdirect === 1);
      setReward(settings.setreward === 1);
      setRegister(settings.setregister === 1);
      setLogin(settings.setlogin === 1);
      setWithdrawal(settings.setwithdrawal === 1);
      setDeposite(settings.setdeposite === 1);
      setRoi(settings.setroi === 1);
      setSupport(settings.setsupport === 1);
      setTopup(settings.settopup === 1);
    }
  }, [settings]);

  useEffect(() => {
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

  const handleSubmit = (e) => {
    e.preventDefault();
    const values = {
      level,
      direct,
      reward,
      register,
      login,
      withdrawal,
      deposite,
      roi,
      support,
      topup,
    };
    dispatch(updateSettings(values));
  };

  // Tabs data
  const tabs = [
    { id: "features", label: "Features", icon: Sliders },
    { id: "statistics", label: "Statistics", icon: BarChart4 },
    { id: "security", label: "Security", icon: ShieldCheck },
  ];

  return (
    <div className=" bg-gray-50">
      <div className="w-full mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="p-3 bg-orange-100 text-orange-500 rounded-full">
                <Settings size={32} />
              </div>
              <div className="ml-4">
                <h1 className="text-3xl font-bold text-gray-800">System Settings</h1>
                <p className="text-gray-500">Manage your application settings and configurations</p>
              </div>
            </div>
            <div className="hidden md:flex space-x-2">
              <button className="px-4 py-2 bg-white text-orange-500 border border-orange-500 rounded-lg hover:bg-orange-50 transition-colors">
                Reset
              </button>
              <button 
                onClick={handleSubmit}
                className="px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors">
                Save Changes
              </button>
            </div>
          </div>
        </div>

        {/* Alerts */}
        {message && <SuccessAlert message={message} />}
        {error && <ErrorAlert error={error} />}

        {/* Tabs */}
        <div className="mb-6 flex overflow-x-auto whitespace-nowrap pb-2 border-b">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center px-5 py-3 mr-4 font-medium whitespace-nowrap transition-colors ${
                  activeTab === tab.id
                    ? "text-orange-500 border-b-2 border-orange-500"
                    : "text-gray-500 hover:text-gray-700"
                }`}
              >
                <Icon size={18} className="mr-2" />
                {tab.label}
              </button>
            );
          })}
        </div>

        <form onSubmit={handleSubmit}>
          {/* Features Tab Content */}
          {activeTab === "features" && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="space-y-1">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">Income Features</h2>
                <ToggleSwitch
                  checked={level}
                  onChange={setLevel}
                  label="Level Income"
                  description="Turn on and off level income for users"
                  icon={BarChart4}
                />
                <ToggleSwitch
                  checked={direct}
                  onChange={setDirect}
                  label="Direct Income"
                  description="Turn on and off direct income for users"
                  icon={DollarSign}
                />
                <ToggleSwitch
                  checked={reward}
                  onChange={setReward}
                  label="Rewards"
                  description="Turn on and off rewards for users"
                  icon={CreditCard}
                />
                <ToggleSwitch
                  checked={roi}
                  onChange={setRoi}
                  label="ROI"
                  description="Turn on and off ROI for users"
                  icon={LineChart}
                />
              </div>
              
              <div className="space-y-1">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">User Features</h2>
                <ToggleSwitch
                  checked={register}
                  onChange={setRegister}
                  label="Registration"
                  description="Turn on and off new registrations"
                  icon={UserPlus}
                />
                <ToggleSwitch
                  checked={login}
                  onChange={setLogin}
                  label="Login"
                  description="Turn on and off user logins"
                  icon={LogIn}
                />
                <ToggleSwitch
                  checked={support}
                  onChange={setSupport}
                  label="Support"
                  description="Turn on and off support for users"
                  icon={HelpCircle}
                />
              </div>
              
              <div className="space-y-1">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">Transaction Features</h2>
                <ToggleSwitch
                  checked={withdrawal}
                  onChange={setWithdrawal}
                  label="Withdrawals"
                  description="Turn on and off withdrawals for users"
                  icon={Upload}
                />
                <ToggleSwitch
                  checked={deposite}
                  onChange={setDeposite}
                  label="Deposits"
                  description="Turn on and off deposits for users"
                  icon={Download}
                />
                <ToggleSwitch
                  checked={topup}
                  onChange={setTopup}
                  label="Topup"
                  description="Turn on and off topup for users"
                  icon={ArrowUpCircle}
                />
              </div>
              
              <div className="space-y-1">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">Quick Info</h2>
                <div className="bg-gradient-to-r from-orange-500 to-orange-600 p-6 rounded-xl text-white ">
                  <h3 className="text-xl font-bold mb-2">System Status</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span>Active Features:</span>
                      <span className="font-semibold">
                        {[level, direct, reward, register, login, withdrawal, deposite, roi, support, topup].filter(Boolean).length} / 10
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span>Last Updated:</span>
                      <span className="font-semibold">Today, 14:32</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Configuration Health:</span>
                      <span className="font-semibold">Excellent</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Statistics Tab Content */}
          {activeTab === "statistics" && (
            <div>
              <h2 className="text-xl font-semibold text-gray-800 mb-6">System Statistics</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <StatsCard title="Active Users" value="1,285" icon={Users} />
                <StatsCard title="Daily Transactions" value="324" icon={CreditCard} />
                <StatsCard title="Total Deposits" value="$45,789" icon={Download} />
                <StatsCard title="Total Withdrawals" value="$23,456" icon={Upload} />
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-lg mb-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Feature Usage Graph</h3>
                <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center">
                  <p className="text-gray-500">Feature usage analytics graph would appear here</p>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">System Performance</h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-gray-700">Server Load</span>
                      <span className="text-sm font-medium text-gray-700">45%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div className="bg-orange-500 h-2.5 rounded-full" style={{ width: "45%" }}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-gray-700">Database Performance</span>
                      <span className="text-sm font-medium text-gray-700">78%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div className="bg-orange-500 h-2.5 rounded-full" style={{ width: "78%" }}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-gray-700">API Response Time</span>
                      <span className="text-sm font-medium text-gray-700">92%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div className="bg-orange-500 h-2.5 rounded-full" style={{ width: "92%" }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Security Tab Content */}
          {activeTab === "security" && (
            <div>
              <h2 className="text-xl font-semibold text-gray-800 mb-6">Security Settings</h2>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Authentication</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="p-2 bg-orange-100 text-orange-500 rounded-lg mr-3">
                          <Key size={20} />
                        </div>
                        <div>
                          <p className="font-medium text-gray-800">Two-Factor Authentication</p>
                          <p className="text-sm text-gray-500">Require 2FA for administrative access</p>
                        </div>
                      </div>
                      <div className="relative inline-block w-12 align-middle select-none">
                        <input type="checkbox" className="opacity-0 absolute h-0 w-0" id="toggle-2fa" />
                        <label
                          htmlFor="toggle-2fa"
                          className="block overflow-hidden h-6 rounded-full cursor-pointer bg-gray-300"
                        >
                          <span className="block h-6 w-6 rounded-full bg-white shadow transform" />
                        </label>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="p-2 bg-orange-100 text-orange-500 rounded-lg mr-3">
                          <Lock size={20} />
                        </div>
                        <div>
                          <p className="font-medium text-gray-800">Password Policy</p>
                          <p className="text-sm text-gray-500">Enforce strong password requirements</p>
                        </div>
                      </div>
                      <div className="relative inline-block w-12 align-middle select-none">
                        <input type="checkbox" className="opacity-0 absolute h-0 w-0" id="toggle-password" checked={true} />
                        <label
                          htmlFor="toggle-password"
                          className="block overflow-hidden h-6 rounded-full cursor-pointer bg-orange-500"
                        >
                          <span className="block h-6 w-6 rounded-full bg-white shadow transform translate-x-6" />
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Activity Log</h3>
                  <div className="space-y-4">
                    <div className="border-l-4 border-orange-500 pl-4 py-1">
                      <p className="font-medium text-gray-800">Settings updated</p>
                      <p className="text-sm text-gray-500">Today, 12:43 PM</p>
                    </div>
                    <div className="border-l-4 border-orange-500 pl-4 py-1">
                      <p className="font-medium text-gray-800">New admin added</p>
                      <p className="text-sm text-gray-500">Yesterday, 3:12 PM</p>
                    </div>
                    <div className="border-l-4 border-orange-500 pl-4 py-1">
                      <p className="font-medium text-gray-800">Withdrawal system maintenance</p>
                      <p className="text-sm text-gray-500">Apr 20, 2025, 9:30 AM</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Mobile Buttons */}
          <div className="md:hidden flex space-x-3 mt-8 flex-wrap gap-2">
            <button 
              type="button"
              className="flex-1 px-4 py-3 bg-white text-orange-500 border border-orange-500 rounded-lg text-center">
              Cancel
            </button>
            <button 
              type="submit"
              className="flex-1 px-4 py-3 bg-orange-500 text-white rounded-lg text-center">
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}