import Button from "../components/Button";
import { FaExclamationTriangle } from "react-icons/fa";
import Section from "../components/Section";
export default function NotFound() {
  return (
    <>
      <Section custom="flex flex-col justify-center items-center">
        <FaExclamationTriangle className="text-yellow-400 text-8xl mb-4 " />
        <h1 className="text-4xl sm:text-6xl font-bold">404 NOT FOUND</h1>
        <p className="text-xl sm:text-2xl font-medium italic">
          This page does not exist
        </p>
        <Button
          link="/"
          text="Go back to the homepage"
          custom="hover:bg-indigo-800"
          bgColor="bg-indigo-600"
        />
      </Section>
    </>
  );
}
