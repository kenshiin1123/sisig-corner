import { IoIosMenu } from "react-icons/io";
import { motion, AnimatePresence, stagger } from "motion/react";
import { Link, useLocation } from "react-router-dom";
import Modal from "./Modal";
import { IoClose } from "react-icons/io5";

import { useState } from "react";

const tabs = [
  { title: "Homepage", to: "/" },
  { title: "About", to: "/about" },
  { title: "Menu", to: "/menu" },
];

export default function Navigation() {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <header className="flex items-center w-full gap-4 text-white fixed top-0 bg-black/20 backdrop-blur-xs z-40 h-12 px-5">
      <NavButton onClick={openModal} />
      <Link to={"/"} className="text-2xl italic">
        Sisig Corner
      </Link>
      <ul className="flex ml-auto gap-4 max-sm:hidden">
        {tabs.map((tab) => (
          <Tab key={tab.title} {...tab} />
        ))}
      </ul>
      <AnimatePresence mode="wait">
        {showModal && (
          <Modal>
            <motion.button
              variants={{
                hidden: { rotate: 0 },
                visible: { rotate: 90 },
              }}
              whileTap={{
                scale: 0.8,
              }}
              onClick={closeModal}
              className="text-white ml-auto mr-5 mt-5"
            >
              <IoClose className="text-5xl" />
            </motion.button>
            <motion.ul
              className="flex flex-col mx-auto mt-40 ml-auto gap-4 text-white text-5xl rounded-2xl text-center"
              variants={{
                visible: { transition: { delayChildren: stagger(0.3) } },
              }}
            >
              {tabs.map((tab) => (
                <motion.button
                  variants={{
                    hidden: { opacity: 0, scale: 0.5 },
                    visible: {
                      opacity: 1,
                      scale: 1,
                    },
                  }}
                  whileTap={{
                    scale: 0.8,
                  }}
                  key={tab.title}
                  onClick={closeModal}
                >
                  <Link to={tab.to}>{tab.title}</Link>
                </motion.button>
              ))}
            </motion.ul>
          </Modal>
        )}
      </AnimatePresence>
    </header>
  );
}

const NavButton = ({ onClick }) => {
  return (
    <motion.button
      onClick={onClick}
      className="text-6xl sm:hidden"
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

const Tab = ({ title, to }) => {
  const location = useLocation();
  const enabled = location.pathname === to;
  return (
    <li>
      <Link to={to}>{title}</Link>
      {enabled && (
        <motion.div layoutId="tab-indicator" className="h-0.5 bg-white" />
      )}
    </li>
  );
};
