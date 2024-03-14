"use client";

import React from "react";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <>
        <div
          className={`p-2 rounded-lg bg-white border border-slate-300 ${className}`}
          {...props}
          ref={ref}
        >
          {children}
        </div>
      </>
    );
  }
);

Card.displayName = "Card";

export default Card;
