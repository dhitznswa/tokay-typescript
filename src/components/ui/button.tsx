"use client";
import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "info";
  className?: string;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, className, variant = "primary", ...props }, ref) => {
    const config = {
      variant: {
        primary: "bg-main-gradient text-white",
        secondary: "bg-blue-600/20 text-blue-600",
        info: "bg-blue-600 text-white",
      },
    };

    return (
      <>
        <button
          className={`px-4 py-2 rounded-lg font-semibold tracking-wide ${config.variant[variant]} ${className}`}
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
