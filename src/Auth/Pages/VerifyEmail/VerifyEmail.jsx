const VerifyEmail = () => {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
        <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md text-center">
          <h2 className="text-2xl font-bold mb-6">Verify Your Email</h2>
          <p className="mb-4">We've sent a verification link to your email. Please check your inbox and click the link to verify your account.</p>
          <a href="/auth/login" className="text-blue-400 hover:underline">Back to Login</a>
        </div>
      </div>
    );
  };
  
  export default VerifyEmail;
  