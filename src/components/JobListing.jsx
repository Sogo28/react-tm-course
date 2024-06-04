import JobCard from "./JobCard";
import jobs from "../jobs.json";
import Section from "./Section";
export default function JobListing({ isHome = false }) {
  let recentJobs = isHome ? jobs.slice(0, 3) : jobs;
  return (
    <Section bgColor={"bg-slate-100"} title="Browse Job">
      <div className="flex flex-col gap-12 xl:grid xl:grid-cols-3 ">
        {recentJobs.map((job) => (
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
    </Section>
  );
}
