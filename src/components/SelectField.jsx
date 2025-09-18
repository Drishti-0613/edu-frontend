export default function SelectField({ label, value, onChange, options, required }) {
  return (
    <div className="mb-3">
      {label && <label className="block text-sm mb-1">{label}</label>}
      <select
        value={value}
        onChange={onChange}
        required={required}
        className="w-full border p-2 rounded"
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}
