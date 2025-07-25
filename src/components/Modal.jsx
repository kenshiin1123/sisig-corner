import { createPortal } from "react-dom";
import { motion } from "framer-motion";
export default function Modal({ children }) {
  return createPortal(
    <motion.div
      variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
      initial="hidden"
      animate="visible"
      exit="hidden"
      className="fixed top-0 bg-secondary w-[100%] h-full z-50"
    >
      <motion.div className="flex flex-col  mx-auto my-auto">
        {children}
      </motion.div>
    </motion.div>,
    document.getElementById("modal")
  );
}
