// import { useState, useEffect } from "react";
import { useParams, useLoaderData } from "react-router-dom";
// import Loading from "../components/Loading";
const EditJob = () => {
  // const [job, setJob] = useState(null);
  // const [loading, setLoading] = useState(true);
  // const { id } = useParams();
  // useEffect(() => {
  //   const fetchJob = async () => {
  //     try {
  //       const res = await fetch(`/api/jobs/${id}`);
  //       const data = await res.json();
  //       setJob(data);
  //     } catch (error) {
  //       console.log("Error fetching data, " + error);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };
  //   setTimeout(() => {
  //     fetchJob();
  //   }, 2000);
  // }, []);
  const job = useLoaderData();
  return <h1>{job.title}</h1>;
};

const jobLoader = async ({ params }) => {
  const res = await fetch(`/api/jobs/${params.id}`);
  const data = res.json();
  return data;
};

export { EditJob as default, jobLoader };
