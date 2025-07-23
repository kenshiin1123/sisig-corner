import Star from "../components/Star.jsx";
import Button from "./Button.jsx";
import Header from "./Header.jsx";
export default function ContentCard({
  color = "bg-primary",
  header,
  paragraph,
  buttonText,
  variant = 1,
  className,
}) {
  let variantClass = "";

  if (variant === 2) {
    variantClass = `items-center ${color} text-center`;
  }

  return (
    <div className={`px-3 py-7 flex flex-col ${variantClass} ${className}`}>
      <span className="text-3xl">
        <Star color={color === "bg-secondary" && "white"} />
      </span>
      <Header>{header}</Header>
      <p className="text-sm font-pt-serif sm:max-w-[80%] md:max-w-[60%]">
        {paragraph}
      </p>
      {buttonText && (
        <Button variant={color === "bg-secondary" ? 1 : 2} className={"mt-5"}>
          {buttonText}
        </Button>
      )}
    </div>
  );
}
