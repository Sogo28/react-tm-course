import Button from "./Button";
export default function Card({
  title = "provided title",
  description = "provided desc",
  link = "provided link",
  cardCustom = "bg-slate-100",
  buttonBg = "bg-black",
  buttonTextColor = "text-white",
  buttonWidth = "w-fit",
  buttonText = "Click Me",
  buttonCustom,
}) {
  return (
    <>
      <div
        className={`flex flex-col gap-4 ${cardCustom} py-8 px-4 mb-4 lg:w-1/2 rounded-lg shadow-lg`}
      >
        <h1 className="text-xl sm:text-2xl font-bold">{title}</h1>
        <p className="text-left">{description}</p>
        <Button
          text={buttonText}
          bgColor={buttonBg}
          textColor={buttonTextColor}
          width={buttonWidth}
          link={link}
          custom={buttonCustom}
        />
      </div>
    </>
  );
}
