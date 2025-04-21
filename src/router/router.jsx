import React from "react";
import { Route, Routes } from "react-router-dom";

import ForgotPassword from "../Pages/ForgetPassword/ForgetPassword";
import ResetPassword from "../Pages/ResetPassword/ResetPassword";
import VerifyEmail from "../Pages/VerifyEmail/VerifyEmail";
import { Login, Register } from "../Auth";
import AuthContextProvider from "../Auth/context/AuthContextProvider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

const Router = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route index
          element={
            <AuthContextProvider>
              <Login />
            </AuthContextProvider>
          }
        />
        <Route
          path="/register"
          element={
            <AuthContextProvider>
              <Register />
            </AuthContextProvider>
          }
        />
        <Route path="/auth/forgot-password" element={<ForgotPassword />} />
        <Route path="/auth/reset-password" element={<ResetPassword />} />
        <Route path="/auth/verify-email" element={<VerifyEmail />} />
      </Routes>
    </QueryClientProvider>
  );
};

export default Router;
