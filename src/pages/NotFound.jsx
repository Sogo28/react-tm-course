import Button from "../components/Button";
import { FaExclamationTriangle } from "react-icons/fa";
export default function NotFound() {
  return (
    <>
      <section className="text-center flex flex-col gap-4 justify-center items-center h-screen">
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
      </section>
    </>
  );
}
