import React from "react";

export default function Paragraph({ paragraph }) {
  return typeof paragraph === "string" ? (
    <p className="font-roboto text-sm sm:text-md sm:max-w-[80%] md:max-w-[60%] lg:max-w-[55%]">
      {paragraph}
    </p>
  ) : (
    paragraph.map((p, i) => (
      <p
        className="font-roboto text-sm sm:text-md sm:max-w-[80%] md:max-w-[60%] lg:max-w-[55%] mt-5"
        key={i}
      >
        {p}
      </p>
    ))
  );
}
