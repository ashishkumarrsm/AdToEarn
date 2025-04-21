import { useState, useEffect } from "react";
import { Description, Field, Label, Switch } from "@headlessui/react";
import {
  ChevronRight,
  Settings,
  Power,
  UserPlus,
  Lock,
  CreditCard,
  DollarSign,
  HelpCircle,
  RefreshCw,
  LogIn,
  Bell,
} from "lucide-react";
import { 

  Users,  
  Download, 
  PlusCircle 
} from 'lucide-react';
import {
  getSettings,
  clearErrors,
  clearMessage,
  updateSettings,
} from "../redux/settingsSlice";
import { useDispatch, useSelector } from "react-redux";
import SuccessAlert from "../BaseFile/comman/SuccessAlert";
import ErrorAlert from "../BaseFile/comman/ErrorAlert";
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
  

  return (
    <div>
      <main className="bg-gradient-to-br from-indigo-800 to-purple-900 p-6 rounded-lg">
        <div className="max-w-6xl mx-auto ">
          <div className="pt-5 pb-8 overflow-hidden text-gray-100   rounded-md ">
            <div className="   ">
              {message && <SuccessAlert message={message} />}
              {error && <ErrorAlert error={error} />}
              <form
                className="  max-w-5xl mx-auto"
                onSubmit={handleSubmit}
              >
                <div className="  bg-white/20 p-3 rounded-xl shadow-2xl border border-white/60  ">
                  <div className="">
                    <div className=" rounded-2xl p-6">
                      <div className="flex justify-center   items-center space-x-4">
                        <Settings className="w-12 h-12 text-white" />
                        <div>
                          <div className="text-4xl text-center font-bold text-white">
                            App Settings
                          </div>
                         
                        </div>
                      </div>
                    </div>
                    <ul role="list" className="   mt-6">
                      <div className="grid xl:grid-cols-3 lg:grid-cols-2  grid-cols-1  gap-x-4">
                      <Field
                            as="li"
                            className="flex items-center shadow-lg mb-4 rounded-xl justify-between p-4 bg-gradient-to-br from-indigo-800 to-purple-900"
                          >
                            <div>
                              <DollarSign className="  font-bold  p-3 bg-white/20 rounded-full group-hover:bg-blue-100 transition-colors h-14 w-14 item-center flex justify-center " />

                              <div className="flex flex-col ">
                              <Label
                                as="p"
                                passive
                                className="text-lg font-semibold mt-3 text-white"
                              >
                                Allow Level Income
                              </Label>
                              <Description className="text-sm text-gray-300 font-light ">
                                You can turn on and off level income for users.
                              </Description>
                              </div>
                            </div>

                            <Switch
                              checked={level}
                              onChange={setLevel}
                             className="group relative ml-4 inline-flex h-8   w-16 text-green-400 hover:text-green-300 transition-colors flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent bg-gray-900/50 duration-200 data-[checked]:bg-purple-400  ease-in-out focus:outline-none "
                            >
                              <span
                                aria-hidden="true"
                                className="inline-block h-7 w-7 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out group-data-[checked]:translate-x-8"
                              />
                            </Switch>
                          </Field>
                          
                         <Field
                            as="li"
                            className="flex items-center shadow-lg mb-4 rounded-xl justify-between p-4 bg-gradient-to-br from-indigo-800 to-purple-900"
                          >
                            <div>
                              
                              <DollarSign className="  font-bold  p-3 bg-white/20 rounded-full group-hover:bg-blue-100 transition-colors h-14 w-14 item-center flex justify-center " />
                              <div className="flex flex-col">
                                <Label
                                  as="p"
                                  passive
                                  className="text-lg font-semibold mt-3 text-white "
                                >
                                  Allow Direct Income
                                </Label>
                                 <Description className="text-sm text-gray-300 font-light">
                                  You can turn on and off direct income for
                                  users.
                                </Description>
                              </div>
                            </div>

                            <Switch
                              checked={direct}
                              onChange={setDirect}
                             className="group relative ml-4 inline-flex h-8   w-16 text-green-400 hover:text-green-300 transition-colors flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent bg-gray-900/50 duration-200 data-[checked]:bg-purple-400  ease-in-out focus:outline-none "
                            >
                              <span
                                aria-hidden="true"
                                className="inline-block h-7 w-7 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out group-data-[checked]:translate-x-8"
                              />
                            </Switch>
                          </Field>
                         <Field
                            as="li"
                            className="flex items-center shadow-lg mb-4 rounded-xl justify-between p-4 bg-gradient-to-br from-indigo-800 to-purple-900"
                          >
                            <div>
                              
                              <DollarSign className="  font-bold  p-3 bg-white/20 rounded-full group-hover:bg-blue-100 transition-colors h-14 w-14 item-center flex justify-center " />
                              <div className="flex flex-col">
                                <Label
                                  as="p"
                                  passive
                                  className="text-lg font-semibold mt-3 text-white "
                                >
                                  Allow Reward
                                </Label>
                                 <Description className="text-sm text-gray-300 font-light">
                                  You can turn on and off rewards for users.
                                </Description>
                              </div>
                            </div>

                            <Switch
                              checked={reward}
                              onChange={setReward}
                             className="group relative ml-4 inline-flex h-8   w-16 text-green-400 hover:text-green-300 transition-colors flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent bg-gray-900/50 duration-200 data-[checked]:bg-purple-400  ease-in-out focus:outline-none "
                            >
                              <span
                                aria-hidden="true"
                                className="inline-block h-7 w-7 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out group-data-[checked]:translate-x-8"
                              />
                            </Switch>
                          </Field>
                         <Field
                            as="li"
                            className="flex items-center shadow-lg mb-4 rounded-xl justify-between p-4 bg-gradient-to-br from-indigo-800 to-purple-900"
                          >
                            <div>
                              
                              <DollarSign className="  font-bold  p-3 bg-white/20 rounded-full group-hover:bg-blue-100 transition-colors h-14 w-14 item-center flex justify-center " />
                              <div className="flex flex-col">
                                <Label
                                  as="p"
                                  passive
                                  className="text-lg font-semibold mt-3 text-white "
                                >
                                  Allow New Registration
                                </Label>
                                 <Description className="text-sm text-gray-300 font-light">
                                  You can turn on and off new registrations for
                                  new users.
                                </Description>
                              </div>
                            </div>

                            <Switch
                              checked={register}
                              onChange={setRegister}
                             className="group relative ml-4 inline-flex h-8   w-16 text-green-400 hover:text-green-300 transition-colors flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent bg-gray-900/50 duration-200 data-[checked]:bg-purple-400  ease-in-out focus:outline-none "
                            >
                              <span
                                aria-hidden="true"
                                className="inline-block h-7 w-7 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out group-data-[checked]:translate-x-8"
                              />
                            </Switch>
                          </Field>
                         <Field
                            as="li"
                            className="flex items-center shadow-lg mb-4 rounded-xl justify-between p-4 bg-gradient-to-br from-indigo-800 to-purple-900"
                          >
                            <div>
                              
                              <DollarSign className="  font-bold  p-3 bg-white/20 rounded-full group-hover:bg-blue-100 transition-colors h-14 w-14 item-center flex justify-center " />
                              <div className="flex flex-col">
                                <Label
                                  as="p"
                                  passive
                                  className="text-lg font-semibold mt-3 text-white "
                                >
                                  Allow Login
                                </Label>
                                <Description className="text-sm text-gray-300 font-light">
                                  You can turn on and off login for users.
                                </Description>
                              </div>
                            </div>

                            <Switch
                              checked={login}
                              onChange={setLogin}
                             className="group relative ml-4 inline-flex h-8   w-16 text-green-400 hover:text-green-300 transition-colors flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent bg-gray-900/50 duration-200 data-[checked]:bg-purple-400  ease-in-out focus:outline-none "
                            >
                              <span
                                aria-hidden="true"
                                className="inline-block h-7 w-7 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out group-data-[checked]:translate-x-8"
                              />
                            </Switch>
                          </Field>
                       
                     
                         <Field
                            as="li"
                            className="flex items-center shadow-lg mb-4 rounded-xl justify-between p-4 bg-gradient-to-br from-indigo-800 to-purple-900"
                          >
                            <div>
                              
                              <DollarSign className="  font-bold  p-3 bg-white/20 rounded-full group-hover:bg-blue-100 transition-colors h-14 w-14 item-center flex justify-center " />
                              <div className="flex flex-col">
                                <Label
                                  as="p"
                                  passive
                                  className="text-lg font-semibold mt-3 text-white "
                                >
                                  Allow Withdrawal
                                </Label>
                                <Description className="text-sm text-gray-300 font-light ">
                                  You can turn on and off withdrawals for users.
                                </Description>
                              </div>
                            </div>

                            <Switch
                              checked={withdrawal}
                              onChange={setWithdrawal}
                             className="group relative ml-4 inline-flex h-8   w-16 text-green-400 hover:text-green-300 transition-colors flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent bg-gray-900/50 duration-200 data-[checked]:bg-purple-400  ease-in-out focus:outline-none "
                            >
                              <span
                                aria-hidden="true"
                                className="inline-block h-7 w-7 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out group-data-[checked]:translate-x-8"
                              />
                            </Switch>
                          </Field>
                         <Field
                            as="li"
                            className="flex items-center shadow-lg mb-4 rounded-xl justify-between p-4 bg-gradient-to-br from-indigo-800 to-purple-900"
                          >
                            <div>
                              
                              <DollarSign className="  font-bold  p-3 bg-white/20 rounded-full group-hover:bg-blue-100 transition-colors h-14 w-14 item-center flex justify-center " />
                              <div className="flex flex-col">
                                <Label
                                  as="p"
                                  passive
                                  className="text-lg font-semibold mt-3 text-white "
                                >
                                  Allow Deposite
                                </Label>
                                 <Description className="text-sm text-gray-300 font-light">
                                  You can turn on and off deposites for users.
                                </Description>
                              </div>
                            </div>

                            <Switch
                              checked={deposite}
                              onChange={setDeposite}
                             className="group relative ml-4 inline-flex h-8   w-16 text-green-400 hover:text-green-300 transition-colors flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent bg-gray-900/50 duration-200 data-[checked]:bg-purple-400  ease-in-out focus:outline-none "
                            >
                              <span
                                aria-hidden="true"
                                className="inline-block h-7 w-7 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out group-data-[checked]:translate-x-8"
                              />
                            </Switch>
                          </Field>
                         <Field
                            as="li"
                            className="flex items-center shadow-lg mb-4 rounded-xl justify-between p-4 bg-gradient-to-br from-indigo-800 to-purple-900"
                          >
                            <div>
                              
                              <DollarSign className="  font-bold  p-3 bg-white/20 rounded-full group-hover:bg-blue-100 transition-colors h-14 w-14 item-center flex justify-center " />
                              <div className="flex flex-col">
                                <Label
                                  as="p"
                                  passive
                                  className="text-lg font-semibold mt-3 text-white "
                                >
                                  Allow ROI
                                </Label>
                                 <Description className="text-sm text-gray-300 font-light">
                                  You can turn on and off ROI for users.
                                </Description>
                              </div>
                            </div>

                            <Switch
                              checked={roi}
                              onChange={setRoi}
                             className="group relative ml-4 inline-flex h-8   w-16 text-green-400 hover:text-green-300 transition-colors flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent bg-gray-900/50 duration-200 data-[checked]:bg-purple-400  ease-in-out focus:outline-none "
                            >
                              <span
                                aria-hidden="true"
                                className="inline-block h-7 w-7 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out group-data-[checked]:translate-x-8"
                              />
                            </Switch>
                          </Field>
                         <Field
                            as="li"
                            className="flex items-center shadow-lg mb-4 rounded-xl justify-between p-4 bg-gradient-to-br from-indigo-800 to-purple-900"
                          >
                            <div>
                            <DollarSign className="  font-bold  p-3 bg-white/20 rounded-full group-hover:bg-blue-100 transition-colors h-14 w-14 item-center flex justify-center " />
                              <div className="flex flex-col">
                                <Label
                                  as="p"
                                  passive
                                  className="text-lg font-semibold mt-3 text-white "
                                >
                                  Allow Support
                                </Label>
                                 <Description className="text-sm text-gray-300 font-light">
                                  You can turn on and off support for users.
                                </Description>
                              </div>
                            </div>

                            <Switch
                              checked={support}
                              onChange={setSupport}
                             className="group relative ml-4 inline-flex h-8   w-16 text-green-400 hover:text-green-300 transition-colors flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent bg-gray-900/50 duration-200 data-[checked]:bg-purple-400  ease-in-out focus:outline-none "
                            >
                              <span
                                aria-hidden="true"
                                className="inline-block h-7 w-7 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out group-data-[checked]:translate-x-8"
                              />
                            </Switch>
                          </Field>
                         <Field
                            as="li"
                            className="flex items-center shadow-lg mb-4 rounded-xl justify-between p-4 bg-gradient-to-br from-indigo-800 to-purple-900"
                          >
                            <div>
                            <DollarSign className="  font-bold  p-3 bg-white/20 rounded-full group-hover:bg-blue-100 transition-colors h-14 w-14 item-center flex justify-center " />
                              <div className="flex flex-col">
                              <Label
                                as="p"
                                passive
                                className="text-lg font-semibold mt-3 text-white "
                              >
                                Allow Topup
                              </Label>
                                <Description className="text-sm text-gray-300 font-light">
                                You can turn on and off topup for users.
                              </Description>
                              </div>
                            </div>

                            <Switch
                              checked={topup}
                              onChange={setTopup}
                             className="group relative ml-4 inline-flex h-8   w-16 text-green-400 hover:text-green-300 transition-colors flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent bg-gray-900/50 duration-200 data-[checked]:bg-purple-400  ease-in-out focus:outline-none "
                            >
                              <span
                                aria-hidden="true"
                                className="inline-block h-7 w-7 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out group-data-[checked]:translate-x-8"
                              />
                            </Switch>
                          </Field>
                   
                      
                      
                      </div>
                    </ul>
                  </div>
                </div>

                <div className="pt-6  ">
                  <div className="flex justify-end gap-4 px-4 sm:px-6">
                    <button
                      type="submit"
                      className="inline-flex justify-center px-6 py-2 text-base font-semibold mt-3 text-white rounded-md shadow-sm  hover:bg-purple-800 bg-purple-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-700"
                    >
                      Save
                    </button>
                    <button
                      type="button"
                      className="inline-flex justify-center px-6 py-2 text-base font-semibold mt-3 text-white bg-black rounded-md shadow-sm hover:bg-gray-800  "
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
