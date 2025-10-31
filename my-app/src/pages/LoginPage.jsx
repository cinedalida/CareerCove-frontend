// import { useState } from "react";
// import { Link } from "react-router-dom";
// import { Button } from "../components/ui/button";
// import { Input } from "../components/ui/input";
// import { Checkbox } from "../components/ui/checkbox";
// import L1 from "../assets/L1.png";

// export default function LoginPage() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [rememberMe, setRememberMe] = useState(false);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle login logic here
//     console.log("Login attempt:", { email, password, rememberMe });
//   };

//   return (
//     <div className="min-h-screen bg-white flex items-center justify-center px-4 py-12">
//       <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//         {/* Left side - Login Form */}
//         <div className="flex justify-center lg:justify-end">
//           <div className="w-full max-w-md bg-white rounded-3xl shadow-lg p-8 border border-gray-200">
//             <div className="mb-8">
//               <h1 className="text-3xl font-bold text-gray-900 mb-2">
//                 Welcome back!
//               </h1>
//               <p className="text-gray-600">Please sign in to your account</p>
//             </div>

//             <form onSubmit={handleSubmit} className="space-y-6">
//               {/* Email Field */}
//               <div>
//                 <label className="block text-sm font-medium text-gray-900 mb-2">
//                   Email Address
//                 </label>
//                 <Input
//                   type="email"
//                   placeholder="Enter your email"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   className="w-full bg-gray-100 border-0 text-gray-900 placeholder-gray-500"
//                 />
//               </div>

//               {/* Password Field */}
//               <div>
//                 <label className="block text-sm font-medium text-gray-900 mb-2">
//                   Password
//                 </label>
//                 <Input
//                   type="password"
//                   placeholder="Enter your password"
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                   className="w-full bg-gray-100 border-0 text-gray-900 placeholder-gray-500"
//                 />
//               </div>

//               {/* Remember Me & Forgot Password */}
//               <div className="flex items-center justify-between">
//                 <div className="flex items-center gap-2">
//                   <Checkbox
//                     id="remember"
//                     checked={rememberMe}
//                     onCheckedChange={(checked) => setRememberMe(checked)}
//                   />
//                   <label
//                     htmlFor="remember"
//                     className="text-sm text-gray-700 cursor-pointer"
//                   >
//                     Remember me
//                   </label>
//                 </div>
//                 <Link
//                   href="#"
//                   className="text-sm text-gray-700 hover:text-gray-900"
//                 >
//                   Forgot Password?
//                 </Link>
//               </div>

//               {/* Login Button */}
//               <Button
//                 type="submit"
//                 className="w-full bg-black hover:bg-gray-900 text-white font-semibold py-3 rounded-lg"
//               >
//                 Login
//               </Button>
//             </form>

//             {/* Sign Up Link */}
//             <div className="mt-6 text-center">
//               <p className="text-gray-700">
//                 Don't have an account?{" "}
//                 <Link
//                   href="/signup"
//                   className="font-semibold text-gray-900 hover:underline"
//                 >
//                   Sign up
//                 </Link>
//               </p>
//             </div>
//           </div>
//         </div>

//         <div className="hidden lg:flex justify-center">
//           <img
//             src={L1}
//             alt="Login Illustration"
//             className="w-full max-w-lg object-contain"
//           />
//         </div>
//       </div>
//     </div>
//   );
// }
