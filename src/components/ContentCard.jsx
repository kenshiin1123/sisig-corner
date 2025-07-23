import Star from "../components/Star.jsx";
import Button from "./Button.jsx";
import Header from "./Header.jsx";
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
      className={`px-3 py-10 flex flex-col justify-center ${variantClass} ${className}`}
    >
      <span className="text-3xl">
        <Star color={variant === 1 ? "black" : "white"} className="mb-5" />
      </span>
      <Header className={"mb-5"}>{header}</Header>
      <p className="text-sm font-pt-serif sm:max-w-[80%] md:max-w-[60%]">
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
