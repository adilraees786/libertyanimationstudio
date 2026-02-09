import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

const Input = ({
  lableText,
  name,
  type = "text",
  placeholder,
  register,
  errors,
  extraClass = "",
  lableExtraClass = "",
  disabled = false,
  ...otherProps
}) => {
  const [showPassword, setShowPassword] = useState(false);

  // Determine the actual input type
  const inputType =
    type === "password" ? (showPassword ? "text" : "password") : type;

  return (
    <div className="flex flex-col w-full gap-1.5">
      {lableText && (
        <label
          htmlFor={name}
          className={`text-sm font-semibold text-white uppercase tracking-wider ${lableExtraClass}`}
        >
          {lableText}
        </label>
      )}

      <div className="relative w-full group">
        <input
          id={name}
          disabled={disabled}
          type={inputType}
          placeholder={placeholder}
          className={`
            w-full px-4 py-3 
            bg-white text-black 
            rounded-[10px] outline-none 
            border-2 border-transparent
            transition-all duration-300
            placeholder:text-gray-400
            focus:border-[var(--primary-text-color)]
            disabled:opacity-50 disabled:cursor-not-allowed
            ${extraClass}
          `}
          // Spread register if it exists, otherwise provide a fallback
          {...(register ? register(name) : { name })}
          {...otherProps}
        />

        {/* Password Toggle Icon */}
        {type === "password" && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-black transition-colors"
          >
            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        )}
      </div>

      {/* Error Message */}
      {errors?.[name] && (
        <p className="text-red-500 text-xs font-bold mt-1 animate-pulse">
          {errors[name]?.message || "This field is required"}
        </p>
      )}
    </div>
  );
};

export default Input;
