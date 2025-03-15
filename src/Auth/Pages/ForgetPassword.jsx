import { useState } from "react";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const handleReset = (e) => {
    e.preventDefault();
    console.log("Password reset link sent...");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6">Forgot Password</h2>
        <form onSubmit={handleReset}>
          <input 
            type="email" 
            placeholder="Enter your email" 
            className="w-full p-3 mb-3 bg-gray-700 rounded" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)}
          />
          <button className="w-full p-3 bg-blue-500 rounded hover:bg-blue-600">Send Reset Link</button>
        </form>
        <p className="text-center mt-4">
          <a href="/auth/login" className="text-blue-400 hover:underline">Back to Login</a>
        </p>
      </div>
    </div>
  );
};

export default ForgotPassword;
