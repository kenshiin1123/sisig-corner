import React from "react";

export default function Header({ children, className }) {
  return (
    <h1
      className={`text-6xl md:text-7xl lg:text-8xl font-roboto font-semibold ${className}`}
    >
      {children}
    </h1>
  );
}
