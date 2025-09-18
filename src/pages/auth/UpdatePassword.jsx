// src/pages/auth/UpdatePassword.jsx
import { useState } from "react";
import InputField from "../../components/InputField";
import Button from "../../components/Button";

export default function UpdatePassword() {
  const [current, setCurrent] = useState("");
  const [newPass, setNewPass] = useState("");
  const [confirm, setConfirm] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (newPass !== confirm) {
      setMessage("New passwords do not match!");
      return;
    }

    if (newPass.length < 8) {
      setMessage("Password must be at least 8 characters.");
      return;
    }

    setMessage("Password updated successfully!");
    setCurrent("");
    setNewPass("");
    setConfirm("");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="w-full max-w-md bg-white shadow-md rounded-xl p-6">
        <h1 className="text-2xl font-bold text-center mb-6">Update Password</h1>
        {message && <p className="mb-4 text-center text-green-600">{message}</p>}

        <form onSubmit={handleSubmit}>
          <InputField type="password" placeholder="Current Password" value={current} onChange={(e) => setCurrent(e.target.value)} required />
          <InputField type="password" placeholder="New Password" value={newPass} onChange={(e) => setNewPass(e.target.value)} required />
          <InputField type="password" placeholder="Confirm New Password" value={confirm} onChange={(e) => setConfirm(e.target.value)} required />
          <Button type="submit">Save Changes</Button>
        </form>
      </div>
    </div>
  );
}
