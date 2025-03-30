// "use client";

// import React, { useState } from 'react';
// import AuthPage from '@/components/AuthPage/AuthPage'; // Assuming you create this structure
// import Link from 'next/link';
// import toast from 'react-hot-toast';


// export default function LoginPage() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [isLoading, setIsLoading] = useState(false); // Add loading state

//   const handleLogin = (e: React.FormEvent) => {
//       e.preventDefault();
//       setIsLoading(true);
//       // Basic Validation Example
//       if (!email || !/\S+@\S+\.\S+/.test(email)) {
//         toast.error("Please enter a valid email.");
//         setIsLoading(false);
//         return;
//       }
//       if (!password || password.length < 6) {
//         toast.error("Password must be at least 6 characters.");
//         setIsLoading(false);
//         return;
//       }

//       console.log("Logging in with:", { email, password });
//       // TODO: Implement actual API call for login
//       // Replace with your login logic (e.g., API call)
//       setTimeout(() => {
//           toast.success("Login successful (simulated)");
//           // Redirect user, e.g., router.push('/dashboard');
//           setIsLoading(false);
//       }, 1500);
//   };

//   // Use the Compound Component structure
//   // This requires creating the AuthPage components first
//   return (
//       <div className="flex justify-center items-center py-12">
//           <AuthPage mode="login">
//               <AuthPage.Title />
//               <AuthPage.Form onSubmit={handleLogin}>
//                   <AuthPage.EmailInput value={email} onChange={(e) => setEmail(e.target.value)} />
//                   <AuthPage.PasswordInput value={password} onChange={(e) => setPassword(e.target.value)} />
//                   <AuthPage.SubmitButton isLoading={isLoading}/>
//               </AuthPage.Form>
//               <AuthPage.SwitchLink />
//           </AuthPage>
//       </div>
//   );
// }