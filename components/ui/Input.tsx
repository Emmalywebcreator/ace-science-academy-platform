import {
  forwardRef,
  type InputHTMLAttributes,
} from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  error?: string;
};

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      name,
      required = false,
      className = "",
      error,
      ...props
    },
    ref
  ) => {
    return (
      <div className="space-y-2">
        <label
          htmlFor={name}
          className="block text-sm font-semibold text-slate-700"
        >
          {label}
          {required && (
            <span className="ml-1 text-red-600">*</span>
          )}
        </label>

        <input
          ref={ref}
          {...props}
          id={name}
          name={name}
          className={`w-full rounded-xl border px-4 py-3 outline-none transition focus:ring-2 ${
            error
              ? "border-red-500 focus:border-red-500 focus:ring-red-200"
              : "border-slate-300 focus:border-blue-700 focus:ring-blue-200"
          } ${className}`}
        />

        {error && (
          <p className="text-sm text-red-600">
            {error}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;