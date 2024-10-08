"use client"
import Login from "@/components/login/Login";
import SignUp from "@/components/login/Signup";
import { useState } from "react";

export default function Home() {
  const [activeTab, setActiveTab] = useState('login');
  return (
      <div className="flex justify-center  p-5">


         <div className="w-full max-w-md bg-white rounded-lg shadow-md overflow-hidden">
           <div className="flex">
             <button
               className="flex-1 py-2 px-4 text-center bg-gray-200 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
               onClick={() => setActiveTab('login')}
             >
               Login
             </button>
             <button
               className="flex-1 py-2 px-4 text-center bg-gray-200 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
               onClick={() => setActiveTab('signup')}
             >
               Sign Up
             </button>
           </div>
           <div className="p-6">
             {activeTab === 'login' ? <Login /> : <SignUp />}
           </div>
         </div>
         
      </div>
  );
}
