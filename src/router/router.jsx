import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../Auth/Pages/Login";
import Register from "../Auth/Pages/Register";
import ForgotPassword from "../Auth/Pages/ForgetPassword";
import ResetPassword from "../Auth/Pages/ResetPassword";
import VerifyEmail from "../Auth/Pages/VerifyEmail";


const Router = () => {
  return (
    <Routes>
      <Route path="/auth/login" element={<Login />} />
      <Route path="/auth/register" element={<Register />} />
      <Route path="/auth/forgot-password" element={<ForgotPassword />} />
      <Route path="/auth/reset-password" element={<ResetPassword />} />
      <Route path="/auth/verify-email" element={<VerifyEmail />} />
    </Routes>
  );
};

export default Router;
