import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signupUser } from "../../api/authApi";
import InputField from "../../components/InputField";
import SelectField from "../../components/SelectField";
import Button from "../../components/Button";

export default function Signup() {
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [role, setRole] = useState("student");
  const [terms, setTerms] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const roleOptions = [
    { label: "Student", value: "student" },
    { label: "Instructor", value: "instructor" },
    { label: "Admin", value: "admin" },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (password !== confirmPassword) {
      setError("Passwords do not match!");
      return;
    }

    if (!terms) {
      setError("You must accept the terms and conditions.");
      return;
    }

    const payload = {
      first_name: firstName,
      last_name: lastName,
      email,
      username,
      password,
      role,
    };

    console.log("📤 Signup payload being sent:", payload);

    try {
      setLoading(true);

      const response = await signupUser(payload);
      console.log("✅ Signup successful. Backend response:", response);

      setSuccess("Signup successful! Please login.");

      setTimeout(() => {
        navigate("/auth/login"); // ✅ redirect to login page
      }, 1500);

    } catch (err) {
      console.error("❌ Signup error:", err);
      console.log("🔎 Backend full error response:", err.response?.data);
      setError(
        err.response?.data?.message ||
        err.response?.data?.error ||
        "Signup failed. Try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 p-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-6">
        {/* Logo + Title */}
        <div className="text-center mb-6">
          <div className="flex justify-center items-center mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-blue-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 6v6l4 2"
              />
            </svg>
          </div>
          <h1 className="text-3xl font-bold">Create an Account</h1>
          <p className="text-gray-600 text-sm mt-1">
            Join EduSaaS today to start learning
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          <InputField
            label="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
          <InputField
            label="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
          <InputField
            type="email"
            label="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <InputField
            label="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <InputField
            type="password"
            label="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <InputField
            type="password"
            label="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
          <SelectField
            label="Role"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            options={roleOptions}
            required
          />

          {/* Terms */}
          <div className="flex items-center gap-2 mb-3">
            <input
              type="checkbox"
              checked={terms}
              onChange={(e) => setTerms(e.target.checked)}
            />
            <span className="text-sm">
              I agree to{" "}
              <a href="#" className="text-blue-600">
                Terms & Conditions
              </a>{" "}
              and{" "}
              <a href="#" className="text-blue-600">
                Privacy Policy
              </a>
            </span>
          </div>

          {error && <p className="text-red-600 text-center mb-2">{error}</p>}
          {success && <p className="text-green-600 text-center mb-2">{success}</p>}

          <Button type="submit" disabled={loading}>
            {loading ? "Signing up..." : "Sign Up"}
          </Button>
        </form>

        {/* Divider + Social */}
        <div className="my-6 flex items-center">
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="mx-2 text-sm text-gray-500">or</span>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>

        <div className="flex gap-3">
          <button
            type="button"
            className="w-1/2 flex items-center justify-center gap-2 border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 py-2 rounded-lg"
          >
            <img
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              alt="Google"
              className="w-5 h-5"
            />
            Google
          </button>
          <button
            type="button"
            className="w-1/2 flex items-center justify-center gap-2 border border-gray-300 bg-gray-900 text-white hover:bg-gray-800 py-2 rounded-lg"
          >
            <img
              src="https://www.svgrepo.com/show/512317/github-142.svg"
              alt="GitHub"
              className="w-5 h-5 invert"
            />
            GitHub
          </button>
        </div>

        <p className="mt-4 text-sm text-center">
          Already have an account?{" "}
          <Link to="/auth/login" className="text-blue-600">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
