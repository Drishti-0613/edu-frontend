import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../../api/authApi";
import InputField from "../../components/InputField";
import Button from "../../components/Button";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const data = await loginUser(email, password);

      // Optionally store token / user data
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));

      navigate("/dashboard");
    } catch (errMsg) {
      setError(errMsg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 p-4">
      <div className="w-full max-w-md bg-white p-6 rounded-2xl shadow-xl">
        {/* Logo */}
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold text-blue-600">EduSaaS</h1>
        </div>

        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>

        <form onSubmit={handleSubmit}>
          <InputField
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <InputField
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <Button type="submit" disabled={loading} className="mt-3">
            {loading ? "Logging in..." : "Login"}
          </Button>

          {error && <p className="text-red-600 text-center mt-2">{error}</p>}
        </form>

        {/* Forgot Password */}
        <p className="mt-4 text-center">
          <Link to="/auth/forgot-password" className="text-blue-600 hover:underline">
            Forgot Password?
          </Link>
        </p>

        {/* Divider */}
        <div className="my-6 flex items-center">
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="mx-2 text-sm text-gray-500">or</span>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>

        {/* Social Login */}
        <div className="flex gap-3">
          {/* Google */}
          <button
            type="button"
            className="w-1/2 flex items-center justify-center gap-2 border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 py-2 rounded-md"
          >
            <img
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              alt="Google"
              className="w-5 h-5"
            />
            <span className="text-sm font-medium">Google</span>
          </button>

          {/* GitHub */}
          <button
            type="button"
            className="w-1/2 flex items-center justify-center gap-2 border border-gray-300 bg-gray-900 text-white hover:bg-gray-800 py-2 rounded-md"
          >
            <img
              src="https://www.svgrepo.com/show/512317/github-142.svg"
              alt="GitHub"
              className="w-5 h-5 invert"
            />
            <span className="text-sm font-medium">GitHub</span>
          </button>
        </div>

        <p className="mt-4 text-sm text-center">
          Don’t have an account?{" "}
          <Link to="/auth/signup" className="text-blue-600">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}
