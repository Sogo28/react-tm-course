import { useLoaderData } from "react-router-dom";
const EditJob = () => {
  const job = useLoaderData();
  return <h1>{job.title}</h1>;
};
export default EditJob;
