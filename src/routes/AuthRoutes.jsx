// src/routes/AuthRoutes.jsx
import { Routes, Route, Navigate } from "react-router-dom";
import AuthLayout from "@/layouts/AuthLayout";
import Login from "@/pages/auth/Login";
import Signup from "@/pages/auth/Signup";
import ForgotPassword from "@/pages/auth/ForgotPassword";
import ResetPassword from "@/pages/auth/ResetPassword";
import UpdatePassword from "@/pages/auth/UpdatePassword";
import Logout from "@/pages/auth/Logout";

export default function AuthRoutes() {
  return (
    <Routes>
      <Route element={<AuthLayout />}>
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path="forgot-password" element={<ForgotPassword />} />
        <Route path="reset-password" element={<ResetPassword />} />
        <Route path="update-password" element={<UpdatePassword />} />
        <Route path="logout" element={<Logout />} />
      </Route>

      {/* Catch-all inside /auth → redirect to login */}
      <Route path="*" element={<Navigate to="login" replace />} />
    </Routes>
  );
}
