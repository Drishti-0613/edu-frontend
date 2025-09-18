// src/pages/auth/ResetPassword.jsx
import { useState } from "react";
import InputField from "../../components/InputField";
import Button from "../../components/Button";

export default function ResetPassword() {
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirm) {
      alert("Passwords do not match!");
      return;
    }
    alert("Password has been reset!");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="w-full max-w-md bg-white shadow-md rounded-xl p-6">
        <h1 className="text-2xl font-bold text-center mb-6">Reset Password</h1>
        <form onSubmit={handleSubmit}>
          <InputField
            type="password"
            placeholder="New Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <InputField
            type="password"
            placeholder="Confirm Password"
            value={confirm}
            onChange={(e) => setConfirm(e.target.value)}
            required
          />
          <Button type="submit">Reset Password</Button>
        </form>
      </div>
    </div>
  );
}
