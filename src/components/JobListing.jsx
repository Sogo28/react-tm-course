import JobCard from "./JobCard";
import Section from "./Section";
import { useState, useEffect } from "react";
import Loading from "./Loading";
export default function JobListing({ isHome = false }) {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await fetch("http://localhost:8000/jobs");
        const data = await res.json();
        isHome ? setJobs(data.slice(0, 3)) : setJobs(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    setTimeout(() => {
      fetchJobs();
    }, 2000);
  }, []);
  return (
    <Section
      bgColor={"bg-slate-100"}
      title="Browse Job"
      custom="flex flex-col justify-center items-center"
    >
      {loading ? (
        <Loading loading={loading} />
      ) : (
        <div className="flex flex-col gap-12 xl:grid xl:grid-cols-3 ">
          {jobs.map((job) => (
            <JobCard
              key={job.id}
              title={job.title}
              description={job.description}
              mode={job.type}
              location={job.location}
              link={`/jobs/${job.id}`}
              salary={job.salary}
            ></JobCard>
          ))}
        </div>
      )}
    </Section>
  );
}
