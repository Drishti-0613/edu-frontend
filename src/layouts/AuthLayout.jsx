import React from "react";
import { Outlet } from "react-router-dom";
import { THEME } from "../config/themeConfig";

export default function AuthLayout() {
  return (
    <div
      className={`min-h-screen flex items-center justify-center ${THEME.light.background} ${THEME.light.textPrimary} font-sans`}
    >
      {/* Centered card wrapper */}
      <div
        className={`${THEME.light.card} p-8 rounded-xl shadow-lg w-full max-w-md`}
      >
        {/* 👇 This is where Login, Signup, ForgotPassword, etc. will render */}
        <Outlet />
      </div>
    </div>
  );
}