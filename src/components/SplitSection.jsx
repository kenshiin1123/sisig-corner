export default function SplitSection({ children, reverse = false }) {
  return (
    <section
      className={`flex flex-col-reverse ${
        reverse ? "sm:flex-row-reverse" : "sm:flex-row"
      } md:h-96 [&>div]:sm:w-[50%] [&>div]:sm:h-full`}
    >
      {children}
    </section>
  );
}
