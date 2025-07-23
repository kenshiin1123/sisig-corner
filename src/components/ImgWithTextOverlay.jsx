export default function ImgWithTextOverlay({ src, text, alt = "", children }) {
  return (
    <div className="relative flex justify-center items-center h-65">
      <div className="absolute z-10 text-white flex flex-col  h-full ">
        <span className="text-6xl font-noto-serif mt-20 mb-5 max-[360px]:text-4xl">
          {text}
        </span>
        <div className="text-center mb-5">{children}</div>
      </div>
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover  object-right"
      />
      <div className="absolute inset-0 bg-black/60"></div>
    </div>
  );
}
