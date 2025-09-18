// src/pages/auth/Logout.jsx
export default function Logout() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="w-full max-w-md bg-white shadow-md rounded-xl p-6 text-center">
        <h1 className="text-2xl font-bold mb-4">You have been logged out</h1>
        <p className="text-gray-600">
          Thank you for using EduSaaS.{" "}
          <a href="/auth/login" className="text-blue-600 hover:underline">
            Login again
          </a>
        </p>
      </div>
    </div>
  );
}
