import Star from "./Star";

export default function Marquee({ variant = 1, item = <Star /> }) {
  let variantClass = "bg-[#FFA3AE]";

  if (variant === 2) {
    variantClass = "bg-white text-black";
  }

  const items = new Array(50).fill().map(() => item);
  return (
    <div className={`text-orange-300 overflow-hidden ${variantClass}`}>
      <ul className="flex gap-15 text-black not-hover:animate-infinite-scroll h-15 items-center hover:translate-x-5 transition duration-200 text-2xl">
        {items.map((it, i) => (
          <li key={i}>{it}</li>
        ))}
      </ul>
    </div>
  );
}
