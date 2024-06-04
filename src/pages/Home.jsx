import Hero from "../components/Hero";
import HomeCards from "../components/HomeCards";
import JobListing from "../components/JobListing";
import ViewAllJobs from "../components/ViewAllJobs";
export default function Home() {
  return (
    <>
      <Hero />
      <HomeCards />
      <JobListing isHome={true} />
      <ViewAllJobs />
    </>
  );
}
