import Button from "../components/Button";
import { FaMapMarker } from "react-icons/fa";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { useStore } from "../store/JobStore";
import { useEffect, useState } from "react";
import Loading from "../components/Loading";

const Job = () => {

  const navigate = useNavigate();

  const { jobs, loading, deleteJob } = useStore((state) => ({
    jobs: state.jobs,
    loading: state.loading,
    deleteJob: state.deleteJob
  }));

  const { id } = useParams();
  const job = jobs.find((job) => job.id === id);

  const onDeleteJobClick = (id) => {
    const confirm = window.confirm(
      "Are you sure you want to delete this listing?"
    );
    if (!confirm) return;
    deleteJob(id);
    toast.success("Job deleted successfully");
    navigate("/jobs");
  };

  return (
    <>
      <div className="container bg-white p-8">
        <a href="/jobs" className="text-indigo-600">
          Back to Job Listing
        </a>
      </div>
      {loading ? (
        <Loading loading={loading} />
      ) :
        (<section className="bg-slate-100 p-4">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex flex-col 2xl:w-3/4 gap-6">
              <div className="bg-white rounded-lg flex flex-col gap-4 pl-4 py-4 shadow-lg">
                <h3 className="text-lg font-thin italic text-slate-500">
                  {job.type}
                </h3>
                <h1 className="text-2xl sm:text-3xl font-bold">{job.title}</h1>
                <div className="flex text-left text-lg gap-2 items-baseline text-red-600 border-b-slate-200">
                  <FaMapMarker />
                  <p className="">{job.location}</p>
                </div>
              </div>
              <div className="flex flex-col bg-white rounded-lg gap-3 pl-4 py-4 shadow-lg">
                <p className="text-left text-indigo-600 font-bold border-b-slate-200">
                  Job Description
                </p>
                <p>{job.description}</p>
                <p className="text-left text-indigo-600 font-bold border-b-slate-200">
                  Salary
                </p>
                <p>{job.salary} / Year</p>
              </div>
            </div>
            <div className="flex flex-col 2xl:w-1/4 gap-6">
              <div className="bg-white p-8 flex flex-col gap-4 shadow-lg">
                <p className="font-bold text-xl">Company Info</p>
                <p className="text-2xl font-medium">{job.company.name} </p>
                <p className="border-b-slate-200 border-b-2 pb-2">
                  {job.company.description}
                </p>
                <div className="flex flex-col">
                  <p className="text-2xl font-medium">Contact Email :</p>
                  <div className="p-2 md:text-[16px] bg-indigo-100 font-bold">
                    {job.company.contactEmail}
                  </div>
                </div>
                <div className="flex flex-col">
                  <p className="text-2xl font-medium">Contact Phone :</p>
                  <div className="p-2 md:text-[16px] bg-indigo-100 font-bold">
                    {job.company.contactPhone}
                  </div>
                </div>
              </div>
              <div className="bg-white p-8 flex flex-col gap-4 shadow-lg">
                <p className="font-bold text-xl">Manage Job</p>
                <Button
                  text="Edit Job"
                  bgColor="bg-indigo-500"
                  width="w-full"
                  custom="text-center"
                  link={`/jobs/edit/${job.id}`}
                />
                <button
                  className="px-4 py-2 sm:px-4 sm:py-2 font-bold rounded-lg bg-red-500 text-white"
                  onClick={() => {
                    onDeleteJobClick(job.id);
                  }}
                >
                  Delete Job
                </button>
              </div>
            </div>
          </div>
        </section>)}
    </>
  );
};


export default Job;
