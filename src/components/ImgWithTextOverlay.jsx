export default function ImgWithTextOverlay({
  src,
  text,
  alt = "",
  children,
  className,
}) {
  return (
    <div className="relative flex h-[92vh] sm:h-[100vh]">
      <div className="absolute z-10 text-white flex flex-col w-full h-[49vh] sm:h-[65vh] self-end">
        <span className="max-[360px]:text-4xl text-6xl md:text-7xl lg:text-9xl font-newsreader font-bold mb-5 text-center">
          {text}
        </span>
        <div
          className={`mt-auto flex text-center items-center justify-center mb-20  gap-5 ${className}`}
        >
          {children}
        </div>
      </div>
      {/* Background Image */}
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover  object-top"
      />
      {/* Background Darker */}
      <div className="absolute inset-0 bg-black/60"></div>
    </div>
  );
}
