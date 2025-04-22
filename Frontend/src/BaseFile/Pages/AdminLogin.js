

// import React, { useState, useEffect } from "react";
// import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
// import { useNavigate } from "react-router-dom";
// import ErrorAlert from "../comman/ErrorAlert";
// import { loginAdmin, clearErrors } from "../../redux/authSlice";
// import { useSelector, useDispatch } from "react-redux";
// import Spinner from "../comman/Spinner";
// import { useFormik } from "formik";
// import * as Yup from "yup";
// import { Link } from "react-router-dom";
// import Header from "../../CoreFile/Header";
// import Footer from "../../CoreFile/Footer";

// export default function   AdminLogin() {
//   const [showPass, setShowPass] = useState(false);
//   const { loading, error, admin } = useSelector((state) => state.auth);
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const initialValues = {
//     email: "",
//     password: "",
//   };

//   const validationSchema = Yup.object().shape({
//     email: Yup.string().email("Incorrect email").required("Email is required"),
//     password: Yup.string().required("Password is required"),
//   });

//   const formik = useFormik({
//     initialValues,
//     validationSchema: validationSchema,
//     onSubmit: async (values) => {
//       dispatch(loginAdmin(values));
//     },
//   });

//   useEffect(() => {
//     if (error) {
//       const timer = setTimeout(() => {
//         dispatch(clearErrors());
//       }, 2000);
//       return () => clearTimeout(timer);
//     }
//     if (admin) {
//       navigate(`/admin/dashboard`);
//     }
//   }, [error, dispatch, admin, navigate]);

//   return (
//     <>
//       <Header />

//       <div
//         className="flex justify-center items-center p-4 h-screen bg-center bg-cover"
//         style={{
//           backgroundImage:
//             "url('https://img.freepik.com/free-photo/blue-low-poly-background_1048-13185.jpg')",
//         }}
//       >
//         <div className="overflow-hidden w-full max-w-md bg-white bg-opacity-20 rounded-lg shadow-lg backdrop-filter backdrop-blur-lg">
//           {/* Header with background image */}
//           <div
//             className="relative h-72 bg-center bg-cover hover:scale-105"
//             style={{
//               backgroundImage:
//                 "url('https://img.freepik.com/free-vector/tablet-login-concept-illustration_114360-7873.jpg?uid=R90634854&ga=GA1.1.1673403856.1719407260&semt=ais_hybrid')",
//               backgroundPosition: "center top",
//             }}
//           >
//             <div className="flex absolute inset-0 justify-center items-center bg-black/30"></div>
//           </div>

//           {/* Form */}
//           <div className="p-8">
//             <form className="space-y-6" onSubmit={formik.handleSubmit}>
//               <div className="space-y-2">
//                 <label htmlFor="email" className="text-2xl text-white">
//                   Email
//                 </label>
//                 <input
//                   id="email"
//                   name="email"
//                   placeholder="Enter email"
//                   value={formik.values.email}
//                   onChange={formik.handleChange}
//                   onBlur={formik.handleBlur}
//                   className="p-2 w-full bg-white bg-opacity-20 rounded-lg shadow-lg backdrop-filter backdrop-blur-lg placeholder:text-gray-900"
//                   required
//                 />
//                 {formik.touched.email && formik.errors.email && (
//                   <p className="text-xs text-red-500">{formik.errors.email}</p>
//                 )}
//               </div>

//               <div className="space-y-2">
//                 <label htmlFor="password" className="text-2xl text-white">
//                   Password
//                 </label>
//                 <div className="relative">
//                   <input
//                     id="password"
//                     name="password"
//                     type={showPass ? "text" : "password"}
//                     placeholder="Enter password"
//                     value={formik.values.password}
//                     onChange={formik.handleChange}
//                     onBlur={formik.handleBlur}
//                     className="p-2 w-full bg-white bg-opacity-20 rounded-lg shadow-lg backdrop-filter backdrop-blur-lg placeholder:text-gray-900"
//                     required
//                   />
//                   <span
//                     onClick={() => setShowPass(!showPass)}
//                     className="absolute inset-y-0 right-0 pr-3 text-gray-600 cursor-pointer"
//                   >
//                     {showPass ? (
//                       <FaRegEyeSlash className="w-8 h-9 text-gray-900" />
//                     ) : (
//                       <FaRegEye className="w-8 h-9 text-gray-900" />
//                     )}
//                   </span>
//                 </div>
//                 {formik.touched.password && formik.errors.password && (
//                   <p className="text-xs text-red-500">{formik.errors.password}</p>
//                 )}
//               </div>

//               {error && <ErrorAlert error={error} />}

//               <button
//                 type="submit"
//                 className={`py-2 w-full font-medium text-white bg-green-500 rounded-full hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2`}
//               >
//                 {loading ? <Spinner /> : "Login"}
//               </button>
//             </form>

//             <p className="mt-4 text-lg text-center text-white">
//               Not a member?{" "}
//               <Link
//                 to="/"
//                 className="font-semibold text-blue-500 hover:text-blue-500 hover:underline"
//               >
//                 User Login Here
//               </Link>
//             </p>
//           </div>
//         </div>
//       </div>

//       <Footer />
//     </>
//   );
// }





import React, { useState, useEffect } from "react";
import { FaRegEye, FaRegEyeSlash, FaLock, FaEnvelope } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import ErrorAlert from "../comman/ErrorAlert";
import { loginAdmin, clearErrors } from "../../redux/authSlice";
import { useSelector, useDispatch } from "react-redux";
import Spinner from "../comman/Spinner";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import Header from "../../CoreFile/Header";
import Footer from "../../CoreFile/Footer";

export default function AdminLogin() {
  const [showPass, setShowPass] = useState(false);
  const { loading, error, admin } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Incorrect email").required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  const formik = useFormik({
    initialValues,
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      dispatch(loginAdmin(values));
    },
  });

  useEffect(() => {
    if (error) {
      const timer = setTimeout(() => {
        dispatch(clearErrors());
      }, 2000);
      return () => clearTimeout(timer);
    }
    if (admin) {
      navigate(`/admin/dashboard`);
    }
  }, [error, dispatch, admin, navigate]);

  return (
    <>
      <Header />

      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl w-full flex flex-col md:flex-row bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Left Section - Illustration */}
          <div className="md:w-1/2 bg-orange-50 p-6 flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-orange-500/20 to-orange-600/10 z-0"></div>
            
            <div className="relative z-10">
              <div className="flex items-center mb-8">
                <img src="/adtoEarn.png" alt="Logo" className="h-10 w-10" />
                <span className="ml-2 text-2xl font-bold text-orange-500">AdToEarn</span>
              </div>
              
              <h1 className="text-3xl font-bold text-gray-800 mb-4">Welcome Back Admin</h1>
              <p className="text-gray-600 mb-6">Access your dashboard to manage operations, users, and monitor system performance.</p>
              
              <div className="bg-white/80 backdrop-blur-sm p-4 rounded-lg shadow-sm border border-orange-100">
                <h3 className="font-medium text-orange-600 mb-2">System Updates</h3>
                <p className="text-sm text-gray-600">Latest platform updates have been deployed. Check the changelog for new features.</p>
              </div>
            </div>
            
            <div className="relative z-10 mt-auto">
              <div className="flex flex-col space-y-3">
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center text-orange-500">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="ml-2 text-sm text-gray-600">Enhanced Security Protocols</span>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center text-orange-500">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="ml-2 text-sm text-gray-600">Real-time Analytics Dashboard</span>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center text-orange-500">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="ml-2 text-sm text-gray-600">Advanced User Management</span>
                </div>
              </div>
            </div>
            
            {/* Decorative circles */}
            <div className="absolute -bottom-16 -right-16 w-64 h-64 rounded-full bg-orange-200/50 z-0"></div>
            <div className="absolute -top-12 -left-12 w-48 h-48 rounded-full bg-orange-300/30 z-0"></div>
          </div>
          
          {/* Right Section - Login Form */}
          <div className="md:w-1/2 p-8 md:p-12">
            <div className="mb-8 text-center">
              <h2 className="text-2xl font-bold text-gray-800">Admin Login</h2>
              <p className="text-gray-600 mt-1">Enter your credentials to access your account</p>
            </div>
            
            <form className="space-y-6" onSubmit={formik.handleSubmit}>
              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email Address
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaEnvelope className="h-5 w-5 text-orange-500" />
                  </div>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="admin@example.com"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                    required
                  />
                </div>
                {formik.touched.email && formik.errors.email && (
                  <p className="text-xs text-red-500 mt-1">{formik.errors.email}</p>
                )}
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                    Password
                  </label>
                  <a href="#" className="text-xs text-orange-500 hover:text-orange-600">
                    Forgot password?
                  </a>
                </div>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaLock className="h-5 w-5 text-orange-500" />
                  </div>
                  <input
                    id="password"
                    name="password"
                    type={showPass ? "text" : "password"}
                    placeholder="••••••••"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className="block w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                    required
                  />
                  <div
                    onClick={() => setShowPass(!showPass)}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
                  >
                    {showPass ? (
                      <FaRegEyeSlash className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                    ) : (
                      <FaRegEye className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                    )}
                  </div>
                </div>
                {formik.touched.password && formik.errors.password && (
                  <p className="text-xs text-red-500 mt-1">{formik.errors.password}</p>
                )}
              </div>

              {error && <ErrorAlert error={error} />}

              <div>
                <button
                  type="submit"
                  className="w-full py-3 px-4 rounded-lg shadow-md text-white font-medium bg-orange-500 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 transition-all duration-200"
                  disabled={loading}
                >
                  {loading ? <Spinner /> : "Sign In"}
                </button>
              </div>
            </form>

            <div className="mt-8 text-center">
              <p className="text-sm text-gray-600">
                Not an admin?{" "}
                <Link
                  to="/"
                  className="font-medium text-orange-500 hover:text-orange-600 hover:underline"
                >
                  User Login Here
                </Link>
              </p>
            </div>
            
            {/* Security Notice */}
            <div className="mt-10 pt-6 border-t border-gray-200">
              <div className="flex items-center justify-center">
                <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-orange-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="ml-2 text-xs text-gray-500">Secured by SSL encryption. Your connection is secure.</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}