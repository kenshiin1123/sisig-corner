import React from "react";

export default function Image({
  height = "h-80",
  width = "w-full",
  objectPosition = "object-bottom-left",
  src,
  alt,
  className,
}) {
  return (
    <div className={`${width} ${height} ${className}`}>
      <img
        src={src}
        alt={alt}
        className={`object-cover w-full h-full ${objectPosition}`}
      />
    </div>
  );
}
