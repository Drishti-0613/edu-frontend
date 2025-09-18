import api from "./apiClient"; // your axios instance

// ✅ LOGIN
export const loginUser = async (email, password) => {
  const res = await api.post("/auth/login", { email, password });

  // Store token if backend sends one
  if (res.data?.access_token) {
    localStorage.setItem("token", res.data.access_token);
  }

  return res.data;
};

// ✅ SIGNUP
export const signupUser = async (payload) => {
  // payload = { email, password, name/username, etc. }
  const res = await api.post("/auth/signup", payload);
  return res.data;
};

// ✅ FORGOT PASSWORD
export const forgotPassword = async (email) => {
  const res = await api.post("/auth/forgot-password", { email });
  return res.data;
};

// ✅ RESET PASSWORD (Usually needs token from email)
export const resetPassword = async (token, newPassword) => {
  const res = await api.post(`/auth/reset-password/${token}`, {
    password: newPassword,
  });
  return res.data;
};

// ✅ UPDATE PASSWORD (Logged-in user changing password)
export const updatePassword = async (oldPassword, newPassword) => {
  const res = await api.put("/auth/update-password", {
    old_password: oldPassword,
    new_password: newPassword,
  });
  return res.data;
};

// ✅ LOGOUT
export const logoutUser = () => {
  localStorage.removeItem("token");
  return true;
};

// ✅ (Optional) GET CURRENT USER
export const getCurrentUser = async () => {
  const res = await api.get("/auth/me");
  return res.data;
};
