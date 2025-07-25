import { motion } from "motion/react";

const Star = ({ size = 30, color = "#000", className = "", animate }) => {
  const animation = {
    initial: { scale: 1 },
    whileInView: { scale: animate ? [3, 1] : 1 },
    transition: { type: "spring" },
  };

  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      width={size}
      height={size}
      className={className}
      fill={color}
      {...animation}
    >
      <path
        d="M126.6,10.4c-0.4,0.2-1.2,4.8-2.4,13.4c-3.3,25.3-5.9,39-9.8,50.5
        c-6,17.9-14.9,28.6-29.9,36c-12.1,6-28.5,9.7-60.7,13.9C10.9,126,10,126.2,10,128
        c0,1.8,0.9,2.1,10.1,3.2c48.2,6.1,66.4,11.8,79.6,25c12.9,12.9,18.6,30.6,24.5,75.9
        c1.7,12.9,1.9,13.8,3.7,13.8s2.1-0.9,3.5-12.1c6-46.8,11.7-64.6,24.8-77.6
        c13.2-13.2,31.4-18.9,79.6-25c9.2-1.2,10.1-1.5,10.1-3.2c0-1.8-0.9-2-13.8-3.7
        c-25-3.2-38.4-5.9-49.6-9.5c-18.5-6-29.3-14.8-36.7-29.7c-6.3-12.7-9.9-28.5-14.4-62.9
        c-1-7.5-1.7-11.4-2.1-11.7C128.5,9.9,127.5,9.9,126.6,10.4z"
      />
    </motion.svg>
  );
};

export default Star;
