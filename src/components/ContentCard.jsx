import Star from "../components/Star.jsx";
import Button from "./Button.jsx";
import Header from "./Header.jsx";
import { motion } from "motion/react";
export default function ContentCard({
  color = "bg-primary",
  header,
  paragraph,
  buttonText,
  variant = 1,
  onClick,
  className = "",
}) {
  let variantClass = "";

  if (variant === 2) {
    variantClass = `items-center ${color} text-white text-center`;
  }

  return (
    <div
      className={`px-3 py-10 flex flex-col justify-center ${
        variant === 1 ? "py-15 sm:ml-5" : ""
      } ${variantClass} ${className}`}
    >
      <motion.span
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ type: "spring" }}
        className=" text-3xl"
      >
        <Star
          animate={true}
          color={variant === 1 ? "black" : "rgb(255, 255, 255)"}
          className="mb-5"
        />
      </motion.span>
      <Header className={"mb-5"}>{header}</Header>
      <p className="font-roboto text-sm sm:text-md sm:max-w-[80%] md:max-w-[60%] lg:max-w-[55%]">
        {paragraph}
      </p>
      {buttonText && (
        <Button onClick={onClick} variant={variant} className={"mt-5"}>
          {buttonText}
        </Button>
      )}
    </div>
  );
}
