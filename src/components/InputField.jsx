export default function InputField({ label, type = "text", placeholder, value, onChange, required }) {
  return (
    <div className="mb-3">
      {label && <label className="block text-sm mb-1">{label}</label>}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        className="w-full border p-2 rounded"
      />
    </div>
  );
}
