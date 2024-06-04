import SectionTitle from "./SectionTitle";
export default function Section({
  children,
  bgColor = "bg-white",
  custom = "",
  title = "",
}) {
  return (
    <>
      <section className={`py-8 px-4 md:py-16 md:px-12 ${bgColor} ${custom}`}>
        <SectionTitle title={title} />
        {children}
      </section>
    </>
  );
}
