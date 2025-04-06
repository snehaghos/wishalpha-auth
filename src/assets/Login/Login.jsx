import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Login = () => {
  return (
    <div
      className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-6"
  
    >
    
      <motion.div
        className="bg-gray-800 bg-opacity-90 p-8 rounded-xl shadow-lg w-full max-w-md"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold text-center mb-6 text-purple-400">
          Welcome Back!
        </h1>

 
        <div className="mb-6">
          <label htmlFor="email" className="block text-gray-300 mb-2">
            Email or Username
          </label>
          <input
            type="text"
            id="email"
            placeholder="Enter your email or username"
            className="w-full px-4 py-3 bg-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-600"
          />
        </div>

       
        <div className="mb-6">
          <label htmlFor="password" className="block text-gray-300 mb-2">
            Password
          </label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            className="w-full px-4 py-3 bg-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-600"
          />
        </div>

    
        <button
          className="w-full bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
        >
          Sign In
        </button>

        <div className="mt-4 text-center">
          <Link
            to="/auth/forgot-password"
            className="text-purple-400 hover:text-purple-300 transition-colors"
          >
            Forgot Password?
          </Link>
        </div>

     
        <div className="mt-6 text-center">
          <p className="text-gray-300">
            Don't have an account?{" "}
            <Link
              to="/auth/register"
              className="text-purple-400 hover:text-purple-300 transition-colors"
            >
              Sign Up
            </Link>
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Login;