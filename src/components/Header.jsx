import React from "react";

export default function Header({ children }) {
  return (
    <h1 className="text-6xl font-roboto font-semibold mt-10 mb-5">
      {children}
    </h1>
  );
}
