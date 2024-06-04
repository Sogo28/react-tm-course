import Layout from "./Section";
import Button from "./Button";
import { Link } from "react-router-dom";
export default function ViewAllJobs() {
  return (
    <Layout custom={"flex justify-center items-center"}>
      <Button
        bgColor="bg-black"
        custom="w-1/2 text-center hover:bg-gray-800"
        text="View all jobs"
        link="/jobs"
      />
    </Layout>
  );
}
