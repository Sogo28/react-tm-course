import { Link } from "react-router-dom";

export default function Button({
  link = "#",
  bgColor = "bg-black",
  textColor = "text-white",
  width = "w-fit",
  custom = "",
  text = "Click Me",
}) {
  return (
    <>
      <Link
        className={`px-4 py-2 sm:px-4 sm:py-2 font-bold rounded-lg ${bgColor} ${textColor} ${width} ${custom}`}
        to={link}
      >
        {text}
      </Link>
    </>
  );
}
