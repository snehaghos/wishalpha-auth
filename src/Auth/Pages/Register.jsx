import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Register = () => {
  const [role, setRole] = useState("");

  return (
    <div
      className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-6"
      style={{
        backgroundImage: `url(/images/gamebg.jpg)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <motion.div
        className="bg-gray-800 bg-opacity-90 p-8 rounded-xl shadow-lg w-full max-w-md"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold text-center mb-6 text-purple-400">
          Create an Account
        </h1>

        {/* Name */}
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-300 mb-1">
            Name
          </label>
          <input
            type="text"
            id="name"
            placeholder="Your name"
            className="w-full px-4 py-2 bg-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-600"
          />
        </div>

        {/* Email */}
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-300 mb-1">
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="Your email"
            className="w-full px-4 py-2 bg-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-600"
          />
        </div>

        {/* Contact No & Role - Side by Side */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label htmlFor="contactNo" className="block text-gray-300 mb-1">
              Contact No
            </label>
            <input
              type="text"
              id="contactNo"
              placeholder="Your contact number"
              className="w-full px-4 py-2 bg-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-600"
            />
          </div>

          <div>
            <label htmlFor="role" className="block text-gray-300 mb-1">
              Role
            </label>
            <select
              id="role"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="w-full px-4 py-2 bg-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-600"
            >
              <option value="">Select Role</option>
              <option value="admin">Admin</option>
              <option value="developer">Developer</option>
              <option value="user">User</option>
            </select>
          </div>
        </div>

        {/* Extra Fields for Developers */}
        {role === "developer" && (
          <>
            <div className="mb-4">
              <label htmlFor="skills" className="block text-gray-300 mb-1">
                Skills
              </label>
              <input
                type="text"
                id="skills"
                placeholder="e.g. React, Node.js, Python"
                className="w-full px-4 py-2 bg-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-600"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="portfolio" className="block text-gray-300 mb-1">
                Portfolio/GitHub Link
              </label>
              <input
                type="url"
                id="portfolio"
                placeholder="https://github.com/yourprofile"
                className="w-full px-4 py-2 bg-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-600"
              />
            </div>
          </>
        )}

        {/* Extra Fields for Users */}
        {role === "user" && (
          <div className="mb-4">
            <label htmlFor="username" className="block text-gray-300 mb-1">
              Username
            </label>
            <input
              type="text"
              id="username"
              placeholder="Choose a username"
              className="w-full px-4 py-2 bg-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-600"
            />
          </div>
        )}

        {/* Password */}
        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-300 mb-1">
            Password
          </label>
          <input
            type="password"
            id="password"
            placeholder="Create password"
            className="w-full px-4 py-2 bg-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-600"
          />
        </div>

        {/* Confirm Password */}
        <div className="mb-6">
          <label htmlFor="confirmPassword" className="block text-gray-300 mb-1">
            Confirm Password
          </label>
          <input
            type="password"
            id="confirmPassword"
            placeholder="Confirm password"
            className="w-full px-4 py-2 bg-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-600"
          />
        </div>

        {/* Sign Up Button */}
        <button className="w-full bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors">
          Sign Up
        </button>

        {/* Already have an account? */}
        <div className="mt-4 text-center">
          <p className="text-gray-300">
            Already have an account?{" "}
            <Link
              to="/auth/login"
              className="text-purple-400 hover:text-purple-300 transition-colors"
            >
              Sign In
            </Link>
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Register;
