// src/pages/auth/ForgotPassword.jsx
import { useState } from "react";
import InputField from "../../components/InputField";
import Button from "../../components/Button";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Password reset link sent!");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="w-full max-w-md bg-white shadow-md rounded-xl p-6">
        <h1 className="text-2xl font-bold text-center mb-6">Forgot Password</h1>
        <form onSubmit={handleSubmit}>
          <InputField
            label="Registered Email"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Button type="submit">Send Reset Link</Button>
        </form>
        <p className="mt-4 text-center text-sm text-gray-500">
          If your email is registered, you will receive a password reset link.
        </p>
      </div>
    </div>
  );
}
