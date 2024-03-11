"use client";
import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, className, variant = "primary", ...props }, ref) => {
    const classVariant =
      variant == "primary"
        ? "bg-main-gradient text-white"
        : "bg-blue-600/20 text-blue-600";

    return (
      <>
        <button
          className={`px-4 py-2 rounded-lg font-semibold tracking-wide ${classVariant} ${className}`}
          {...props}
          ref={ref}
        >
          {children}
        </button>
      </>
    );
  }
);

Button.displayName = "Button";

export default Button;
