"use client";

import { useState } from "react";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface InputProps {
  name: string;
  label?: string;
  type?: string;
  placeholder?: string;
  value: string | number | undefined;
  readonly?: boolean;
  error?: string | null;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  min?: number;
  max?: number;
  autoComplete?: string;
  disabled?: boolean;
  description?: string;
  className?: string;
}

const InputField: React.FC<InputProps> = ({
  placeholder,
  disabled,
  name,
  readonly,
  label,
  type = "text",
  value,
  onChange,
  onBlur,
  error,
  min,
  max,
  description,
  className = "",
}) => {
  const [view, setView] = useState(false);

  const handleView = () => {
    setView((prev) => !prev);
  };

  return (
    <div className="space-y-2">
      <Label htmlFor={name} className="text-sm font-medium">
        {label}
      </Label>

      {description && (
        <p className="text-sm text-muted-foreground">{description}</p>
      )}

      <div className="relative">
        <Input
          id={name}
          name={name}
          type={type === "password" && view ? "text" : type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          disabled={disabled}
          readOnly={readonly}
          min={min}
          max={max}
          className={`shadow-none focus outline-none border-[#BDBDBD] focus:border-primary-500/80 rounded-lg font-medium placeholder:font-normal placeholder:text-[#BDBDBD] focus:outline-0 focus:ring-0 caret-primary-500 h-12 text-base sm:text-base py-3 bg-white dark:border-[#2A2A2A] dark:bg-transparent dark:placeholder:text-[#4F4F4F] dark:text-white
            ${className}
            ${error ? "border-red-500 text-red-500" : ""}
            ${
              readonly
                ? "bg-neutral-600 text-black font-semibold cursor-not-allowed"
                : ""
            }
          `}
        />

        {type === "password" && (
          <button
            type="button"
            onClick={handleView}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-[#BDBDBD] hover:text-gray-700 dark:hover:text-gray-300 text-2xl transition-colors dark:text-[#333333]"
            tabIndex={-1}
          >
            {view ? <IoEyeOffOutline /> : <IoEyeOutline />}
          </button>
        )}
      </div>

      {/* {error && <p className="text-xs text-red-600">{error}</p>} */}
    </div>
  );
};

export default InputField;
