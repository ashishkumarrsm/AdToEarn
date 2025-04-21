// "use client"
// import { useState, useEffect } from "react"
// import { FaRegEye, FaRegEyeSlash } from "react-icons/fa"
// import { useNavigate, Link } from "react-router-dom"
// import { useSelector, useDispatch } from "react-redux"
// import { useFormik } from "formik"
// import * as Yup from "yup"

// import Header from "../../CoreFile/Header"
// import Footer from "../../CoreFile/Footer"
// import Spinner from "../comman/Spinner"
// import ErrorAlert from "../comman/ErrorAlert"
// import SuccessAlert from "../comman/SuccessAlert"

// import { loginUser, clearErrors } from "../../redux/authSlice"
// import { sendForgotLink, clearMessage, clearErrors as clrerr } from "../../redux/forgotSlice"

// export default function Login() {
//   const [showPass, setShowPass] = useState(false)
//   const { loading, error, auth } = useSelector((state) => state.auth)
//   const { loading: load, message, error: Err } = useSelector((state) => state.forgot)
//   const dispatch = useDispatch()
//   const navigate = useNavigate()

//   const initialValues = { email: "", password: "" }
//   const validationSchema = Yup.object().shape({
//     email: Yup.string().required("Email or username is required"),
//     password: Yup.string().required("Password is required"),
//   })

//   const formik = useFormik({
//     initialValues,
//     validationSchema,
//     onSubmit: async (values) => {
//       dispatch(loginUser(values))
//     },
//   })

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       if (error) dispatch(clearErrors())
//       if (Err) dispatch(clrerr())
//       if (message) dispatch(clearMessage())
//     }, 3000)

//     if (auth) navigate(`/${auth?.role}/dashboard`)

//     return () => clearTimeout(timer)
//   }, [error, Err, message, auth, dispatch])

//   const handleForgotPass = () => {
//     if (!formik.values.email) {
//       alert("Please enter your email")
//       return
//     }
//     dispatch(sendForgotLink({ email: formik.values.email, role: "user" }))
//   }

//   return (
//     <>
//       <Header />
//       <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-orange-100 via-amber-100 to-yellow-50 p-6">
//         <div className="bg-white w-full max-w-3xl shadow-2xl rounded-xl overflow-hidden grid md:grid-cols-2">
//           {/* Left */}
//           <div className="bg-gradient-to-br from-orange-500 to-amber-600 text-white flex flex-col justify-center items-center p-10 hidden md:flex">
//             <h1 className="text-3xl font-semibold mb-4">Welcome Back 👋</h1>
//             <p className="text-orange-100 mb-6 text-center">Sign in to manage your account & insights.</p>
//             <svg className="w-16 h-16 text-white/80" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
//               <path d="M12 4v16m8-8H4" />
//             </svg>
//           </div>

//           {/* Right */}
//           <div className="p-8 md:p-10">
//             <h2 className="text-2xl font-bold text-gray-900 mb-2">Sign In</h2>
//             <p className="text-gray-500 mb-6">Access your dashboard</p>

//             <form onSubmit={formik.handleSubmit} className="space-y-6">
//               {/* Email */}
//               <div>
//                 <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email or Username</label>
//                 <input
//                   type="text"
//                   name="email"
//                   id="email"
//                   onChange={formik.handleChange}
//                   onBlur={formik.handleBlur}
//                   value={formik.values.email}
//                   className="mt-1 w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
//                   placeholder="Enter your email"
//                 />
//                 {formik.touched.email && formik.errors.email && (
//                   <p className="text-sm text-red-600 mt-1">{formik.errors.email}</p>
//                 )}
//               </div>

//               {/* Password */}
//               <div>
//                 <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
//                 <div className="relative">
//                   <input
//                     type={showPass ? "text" : "password"}
//                     name="password"
//                     id="password"
//                     onChange={formik.handleChange}
//                     onBlur={formik.handleBlur}
//                     value={formik.values.password}
//                     className="mt-1 w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
//                     placeholder="Enter your password"
//                   />
//                   <button
//                     type="button"
//                     onClick={() => setShowPass(!showPass)}
//                     className="absolute right-3 top-3 text-gray-500 hover:text-gray-800"
//                   >
//                     {showPass ? <FaRegEyeSlash /> : <FaRegEye />}
//                   </button>
//                 </div>
//                 {formik.touched.password && formik.errors.password && (
//                   <p className="text-sm text-red-600 mt-1">{formik.errors.password}</p>
//                 )}
//               </div>

//               {/* Alerts */}
//               {error && <ErrorAlert error={error} />}
//               {Err && <ErrorAlert error={Err} />}
//               {message && <SuccessAlert message={message} />}

//               {/* Actions */}
//               <div className="flex items-center justify-between">
//                 <label className="flex items-center text-sm text-gray-600">
//                   <input type="checkbox" className="h-4 w-4 text-orange-600 mr-2 border-gray-300 rounded" />
//                   Remember me
//                 </label>
//                 <button onClick={handleForgotPass} type="button" className="text-sm text-orange-600 hover:underline">
//                   Forgot password?
//                 </button>
//               </div>

//               {/* Submit */}
//               <button
//                 type="submit"
//                 className="w-full bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-semibold py-3 rounded-lg shadow-md transition duration-200"
//                 disabled={loading || load}
//               >
//                 {loading || load ? <Spinner /> : "Sign In"}
//               </button>
//             </form>

//             {/* Register */}
//             <p className="mt-6 text-center text-sm text-gray-600">
//               Don’t have an account?{" "}
//               <Link to="/registration" className="text-orange-600 hover:underline font-medium">
//                 Register now
//               </Link>
//             </p>
//           </div>
//         </div>
//       </div>
//       <Footer />
//     </>
//   )
// }










"use client"
import { useState, useEffect } from "react"
import { FaRegEye, FaRegEyeSlash, FaEnvelope, FaLock, FaUserCircle } from "react-icons/fa"
import { useNavigate, Link } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { useFormik } from "formik"
import * as Yup from "yup"

import Header from "../../CoreFile/Header"
import Footer from "../../CoreFile/Footer"
import Spinner from "../comman/Spinner"
import ErrorAlert from "../comman/ErrorAlert"
import SuccessAlert from "../comman/SuccessAlert"

import { loginUser, clearErrors } from "../../redux/authSlice"
import { sendForgotLink, clearMessage, clearErrors as clrerr } from "../../redux/forgotSlice"

export default function Login() {
  const [showPass, setShowPass] = useState(false)
  const { loading, error, auth } = useSelector((state) => state.auth)
  const { loading: load, message, error: Err } = useSelector((state) => state.forgot)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const initialValues = { email: "", password: "" }
  const validationSchema = Yup.object().shape({
    email: Yup.string().required("Email or username is required"),
    password: Yup.string().required("Password is required"),
  })

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async (values) => {
      dispatch(loginUser(values))
    },
  })

  useEffect(() => {
    const timer = setTimeout(() => {
      if (error) dispatch(clearErrors())
      if (Err) dispatch(clrerr())
      if (message) dispatch(clearMessage())
    }, 3000)

    if (auth) navigate(`/${auth?.role}/dashboard`)

    return () => clearTimeout(timer)
  }, [error, Err, message, auth, dispatch])

  const handleForgotPass = () => {
    if (!formik.values.email) {
      alert("Please enter your email")
      return
    }
    dispatch(sendForgotLink({ email: formik.values.email, role: "user" }))
  }

  return (
    <>
      <Header />
      
      {/* Main container */}
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-5xl">
          {/* Card with shadow effect */}
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col md:flex-row">
            
            {/* Left side - Decorative/Branding Area */}
            <div className="md:w-2/5 relative">
              {/* Background pattern with overlay */}
              <div className="absolute inset-0 bg-orange-500 bg-opacity-90 z-10"></div>
              <div 
                className="absolute inset-0 opacity-30 z-0" 
                style={{ 
                  backgroundImage: "url('data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E')",
                }}
              ></div>
              
              {/* Content */}
              <div className="relative h-full flex flex-col justify-center p-12 z-20">
                <div className="text-center md:text-left">
                  <div className="inline-block p-3 rounded-full bg-white/20 mb-6">
                    <FaUserCircle className="h-10 w-10 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-white mb-6">Welcome Back</h2>
                  <p className="text-white/80 text-lg mb-8">
                    Sign in to your account to access your dashboard and continue your journey.
                  </p>
                  
                  <div className="space-y-4 mt-12 hidden md:block">
                    {["Real-time Analytics", "Secure Transactions", "Premium Support"].map((item, index) => (
                      <div key={index} className="flex items-center">
                        <div className="h-2 w-2 rounded-full bg-white mr-3"></div>
                        <span className="text-white">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right side - Form */}
            <div className="md:w-3/5 p-8 md:p-12">
              <div className="max-w-md mx-auto">
                <div className="text-center md:text-left mb-10">
                  <h3 className="text-2xl font-bold text-gray-900">Sign In</h3>
                  <p className="text-gray-500 mt-2">Please enter your credentials to continue</p>
                </div>
                
                <form onSubmit={formik.handleSubmit} className="space-y-6">
                  {/* Email field */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email or Username
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <FaEnvelope className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        type="text"
                        name="email"
                        id="email"
                        placeholder="Enter your email or username"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.email}
                        className="block w-full pl-10 pr-3 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 bg-gray-50"
                      />
                    </div>
                    {formik.touched.email && formik.errors.email && (
                      <p className="mt-1 text-sm text-red-500">{formik.errors.email}</p>
                    )}
                  </div>
                  
                  {/* Password field */}
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                        Password
                      </label>
                      <button 
                        type="button" 
                        onClick={handleForgotPass}
                        className="text-sm font-medium text-orange-500 hover:text-orange-600"
                      >
                        Forgot password?
                      </button>
                    </div>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <FaLock className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        type={showPass ? "text" : "password"}
                        name="password"
                        id="password"
                        placeholder="Enter your password"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.password}
                        className="block w-full pl-10 pr-10 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 bg-gray-50"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPass(!showPass)}
                        className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500 hover:text-gray-700"
                      >
                        {showPass ? <FaRegEyeSlash className="h-5 w-5" /> : <FaRegEye className="h-5 w-5" />}
                      </button>
                    </div>
                    {formik.touched.password && formik.errors.password && (
                      <p className="mt-1 text-sm text-red-500">{formik.errors.password}</p>
                    )}
                  </div>
                  
                  {/* Remember me */}
                  <div className="flex items-center">
                    <input
                      id="remember-me"
                      name="remember-me"
                      type="checkbox"
                      className="h-4 w-4 text-orange-500 border-gray-300 rounded focus:ring-orange-500"
                    />
                    <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
                      Keep me signed in
                    </label>
                  </div>
                  
                  {/* Alerts */}
                  {error && <ErrorAlert error={error} />}
                  {Err && <ErrorAlert error={Err} />}
                  {message && <SuccessAlert message={message} />}
                  
                  {/* Login button */}
                  <div>
                    <button
                      type="submit"
                      disabled={loading || load}
                      className="w-full flex items-center justify-center py-3 px-6 border border-transparent rounded-lg shadow-sm text-white bg-orange-500 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 font-medium transition-colors"
                    >
                      {loading || load ? <Spinner /> : "Sign In"}
                    </button>
                  </div>
                </form>
                
                {/* Register link */}
                <div className="mt-8 text-center">
                  <p className="text-gray-600">
                    Don't have an account yet?{" "}
                    <Link to="/registration" className="font-medium text-orange-500 hover:text-orange-600">
                      Create an account
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </>
  )
}