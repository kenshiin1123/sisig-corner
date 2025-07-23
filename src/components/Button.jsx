import React from "react";

export default function Button({
  children,
  variant = 1,
  fontVar = 3,
  className,
}) {
  let variantClass = "hover:bg-white hover:text-black ";
  let fontVarClass = "font-noto-serif";

  if (variant === 2) {
    variantClass = "hover:bg-black hover:text-white";
  }

  if (fontVar === 2) {
    fontVarClass = "font-pt-serif";
  }
  if (fontVar === 3) {
    fontVarClass = "font-roboto";
  }
  return (
    <button
      className={`w-fit text-md rounded-full border-1 px-7 py-2 uppercase font-semibold transition duration-500 hover:transition ${variantClass} ${fontVarClass} ${className}`}
    >
      {children}
    </button>
  );
}
