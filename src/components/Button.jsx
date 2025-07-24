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
      backgroundColor: "transparent",
    },
    whileHover: {
      backgroundColor: "black",
      color: "white",
      transition: {
        duration: 1,
      },
    },
    whileTap: {
      scale: 0.9,
      transition: {
        type: "spring",
        stiffness: 500, // snappy compression
        damping: 20, // quick return to normal
      },
    },
  };

  let fontVarClass = "font-noto-serif";

  if (variant === 2) {
    varAnim = {
      ...varAnim,
      initial: {
        backgroundColor: "transparent",
      },
      whileHover: {
        backgroundColor: "rgb(255, 255, 255)",
        color: "black",
        transition: {
          duration: 100,
        },
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
      className={`w-fit text-md rounded-full border-1 px-7 py-2 uppercase font-semibold transition-colors duration-500 ${fontVarClass} ${className}`}
    >
      {children}
    </motion.button>
  );
}
