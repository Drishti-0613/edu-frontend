// src/components/Button.jsx
export default function Button({ children, type = "button", onClick, disabled }) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`w-full py-2 rounded-lg transition 
        ${disabled ? "bg-gray-500 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"} 
        text-white`}
    >
      {children}
    </button>
  );
}
