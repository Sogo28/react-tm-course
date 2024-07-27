import JobCard from "./JobCard";
import Section from "./Section";
import { useState, useEffect } from "react";
import Loading from "./Loading";
import { useStore } from "../store/JobStore";
export default function JobListing({ isHome }) {

  const { jobs, loading } = useStore((state) => ({
    jobs: isHome ? state.jobs.slice(0, 3) : state.jobs,
    loading: state.loading
  }));

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
