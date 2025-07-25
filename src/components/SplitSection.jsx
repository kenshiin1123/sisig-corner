export default function SplitSection({ children, reverse = false }) {
  return (
    <section
      className={`flex flex-col overflow-hidden ${
        reverse ? "sm:flex-row-reverse" : "sm:flex-row"
      } [&>div]:sm:w-[50%]`}
    >
      {children}
    </section>
  );
}
