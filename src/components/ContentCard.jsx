import StarSvg from "../components/Star.jsx";
import Button from "./Button.jsx";
import Header from "./Header.jsx";
import Paragraph from "./Paragraph.jsx";
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
  let starColor = "black";

  if (variant === 2) {
    variantClass = `items-center ${color} text-white text-center`;
    starColor = "rgb(255, 255, 255)";
  }

  if (variant === 3) {
    variantClass = `items-center ${color} text-black text-center`;
  }

  return (
    <Container
      className={className}
      variant={variant}
      variantClass={variantClass}
    >
      <Star starColor={starColor} />
      <Header className={"mb-5"}>{header}</Header>
      <Paragraph paragraph={paragraph} />
      <ConditionedButton
        buttonText={buttonText}
        onClick={onClick}
        variant={variant}
      />
    </Container>
  );
}

const Container = ({ variant, variantClass, className, children }) => {
  let variantConditionStyle = variant === 1 ? "py-15 sm:ml-5" : "";

  return (
    <motion.div
      className={`px-3 py-10 flex flex-col justify-center ${variantConditionStyle} ${variantClass} ${className}`}
    >
      {children}
    </motion.div>
  );
};

const Star = ({ starColor }) => {
  return (
    <motion.span
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ type: "spring" }}
      className="text-3xl"
    >
      <StarSvg animate={true} color={starColor} className="mb-5" />
    </motion.span>
  );
};

const ConditionedButton = ({ buttonText, onClick, variant }) => {
  return (
    buttonText && (
      <Button onClick={onClick} variant={variant} className={"mt-5"}>
        {buttonText}
      </Button>
    )
  );
};
