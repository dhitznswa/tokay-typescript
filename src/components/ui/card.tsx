import React from "react";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export default function Card({ children, className, ...props }: CardProps) {
  return (
    <div
      className={`p-2 rounded-lg bg-white border border-slate-300 ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
