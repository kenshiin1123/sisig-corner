import React from "react";
import { motion } from "motion/react";

export default function Button({
  children,
  variant = 1,
  fontVar = 3,
  onClick = () => {
    console.log("Button Clicked");
  },
  className,
}) {
  let varAnim = {
    initial: {
      backgroundColor: "rgba(0, 0, 0, 0)",
    },
    whileHover: {
      backgroundColor: "rgba(0, 0, 0, 1)",
      color: "rgba(255, 255, 255, 1)",
      scale: 0.9,
      y: -2,
    },
    whileTap: {
      scale: 0.8,
    },
    transition: {
      duration: 0.2,
      type: "tween",
    },
  };

  let fontVarClass = "font-noto-serif";

  if (variant === 2) {
    varAnim = {
      ...varAnim,
      initial: {
        backgroundColor: "rgba(0, 0, 0, 0)",
      },
      whileHover: {
        backgroundColor: "rgba(255, 255, 255, 1)",
        color: "rgba(0, 0, 0, 1)",
        scale: 0.9,
        y: -2,
      },
    };
  }

  if (fontVar === 2) {
    fontVarClass = "font-pt-serif";
  }
  if (fontVar === 3) {
    fontVarClass = "font-roboto";
  }
  return (
    <motion.button
      {...varAnim}
      onClick={onClick}
      className={`w-fit text-md rounded-full border-1 px-7 py-2 uppercase font-semibold ${fontVarClass} ${className}`}
    >
      {children}
    </motion.button>
  );
}
