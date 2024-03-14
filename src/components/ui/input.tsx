"use client";
import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }, ref) => {
    return (
      <input
        {...props}
        className={`px-3 py-2 border border-slate-500 w-full rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600 ${className}`}
        ref={ref}
      />
    );
  }
);

Input.displayName = "Input";

export default Input;
