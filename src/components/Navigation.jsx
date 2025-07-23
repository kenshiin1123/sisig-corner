import { IoIosMenu } from "react-icons/io";
import { motion } from "motion/react";

export default function Navigation() {
  return (
    <header className="flex items-center w-full gap-4 text-white fixed top-0 bg-black/20 backdrop-blur-xs z-50 ">
      <MenuButton />
      <span className="text-2xl italic">Sisig Corner</span>
    </header>
  );
}

const MenuButton = () => {
  return (
    <motion.button
      className="text-6xl"
      initial={{ rotate: 0 }}
      whileTap={{
        scale: 0.8,
      }}
      whileHover={{
        rotate: 180,
        transition: {
          default: { type: "linear" },
        },
      }}
    >
      <IoIosMenu />
    </motion.button>
  );
};
