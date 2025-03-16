import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../Auth/Pages/Login/Login";
import Register from "../Auth/Pages/Register/Register";
import ForgotPassword from "../Auth/Pages/ForgetPassword/ForgetPassword";
import ResetPassword from "../Auth/Pages/ResetPassword/ResetPassword";
import VerifyEmail from "../Auth/Pages/VerifyEmail/VerifyEmail";



const Router = () => {
  return (
    <Routes>
      <Route path="/auth/login" element={<Login />} />
      <Route path="/auth/register" element={<Register />} />
      <Route path="/auth/forgot-password" element={<ForgotPassword/>} />
      <Route path="/auth/reset-password" element={<ResetPassword />} />
      <Route path="/auth/verify-email" element={<VerifyEmail/>} />
    </Routes>
  );
};

export default Router;
