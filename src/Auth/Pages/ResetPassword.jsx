import { useState } from "react";

const ResetPassword = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleReset = (e) => {
    e.preventDefault();
    console.log("Password reset successful...");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6">Reset Password</h2>
        <form onSubmit={handleReset}>
          <input 
            type="password" 
            placeholder="New Password" 
            className="w-full p-3 mb-3 bg-gray-700 rounded" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)}
          />
          <input 
            type="password" 
            placeholder="Confirm New Password" 
            className="w-full p-3 mb-3 bg-gray-700 rounded" 
            value={confirmPassword} 
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <button className="w-full p-3 bg-blue-500 rounded hover:bg-blue-600">Reset Password</button>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
