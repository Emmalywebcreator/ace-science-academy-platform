import type { SelectHTMLAttributes } from "react";

type SelectProps = SelectHTMLAttributes<HTMLSelectElement> & {
  label: string;
  options: string[];
  error?: string;
};

export default function Select({
  label,
  name,
  error,
  options,
  required = false,
  className = "",
  ...props
}: SelectProps) {
  return (
    <div className="space-y-2">
      <label
        htmlFor={name}
        className="block text-sm font-semibold text-slate-700"
      >
        {label}
        {required && <span className="ml-1 text-red-600">*</span>}
      </label>

      <select
        {...props}
        id={name}
        name={name}
        className={`w-full rounded-xl border bg-white px-4 py-3 outline-none transition ${
            error
              ? "border-red-500 focus:border-red-500 focus:ring-red-200"
              : "border-slate-300 focus:border-blue-700 focus:ring-2 focus:ring-blue-200"
          } ${className}`}     
          >
        <option value="">Select an option</option>

        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      {error && (
      <p className="text-sm text-red-600">
        {error}
      </p>
    )}
    </div>
  );
}