import Button from "./Button";
import { useState } from "react";
import { FaMapMarker } from "react-icons/fa";
export default function JobCard({
  title = "provided title",
  description = "provided desc",
  link = "provided link",
  mode = "Remote",
  salary = "$70-$80k / year",
  location = "Bostom, MA",
}) {
  const [showMore, setShowMore] = useState(false);
  return (
    <div className="flex flex-col gap-4 py-8 px-4 mb-4 rounded-lg shadow-lg bg-white">
      <h3 className="text-lg font-thin italic">{mode}</h3>
      <h1 className="text-xl sm:text-2xl font-bold">{title}</h1>
      <div className="flex flex-col gap-1">
        <p className="text-left">
          {showMore ? description : description.substring(0, 90) + "..."}
        </p>
        <button
          className="text-indigo-600 self-start"
          onClick={() => {
            setShowMore(!showMore);
          }}
        >
          {showMore ? "Less" : "More"}
        </button>
      </div>
      <p className="text-left text-indigo-600 font-bold border-b-2 border-b-slate-200">
        {salary}
      </p>
      <div className="flex flex-row justify-between items-center">
        <div className="flex text-left text-lg gap-2 items-baseline text-red-600 border-b-slate-200">
          <FaMapMarker />
          <p className="">{location}</p>
        </div>
        <Button
          link={link}
          bgColor="bg-indigo-600"
          custom="text-center hover:bg-indigo-700"
          text="Read more"
        />
      </div>
    </div>
  );
}
