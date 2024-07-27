import { create } from "zustand";
import axios from "axios";

// Create the store
export const useStore = create((set) => ({
  jobs: [],
  loading: true,

  // Get jobs :
  getJobs: async () => {
    const res = await axios.get("/api/jobs");
    set((state) => ({ jobs: res.data, loading: false }));
  },

  // delete a job
  deleteJob: async (id) => {
    try {
      await axios.delete(`/api/jobs/${id}`);
      set((state) => ({ jobs: state.jobs.filter((job) => job.id !== id) }));
    } catch (error) {
      console.log(error);
    }
  },

  // edit a job
  editJob: async (job) => {
    const config = {
      headers: {
        "Content-Type": "application/json"
      }
    }
    try {
      await axios.put(`/api/jobs/${job.id}`, job, config);
      set((state) => {
        const jobs = state.jobs;
        const index = jobs.findIndex((current) => current.id === job.id);
        jobs[index] = job;
        return ({ jobs: jobs })
      })
    } catch (error) {
      console.log(error)
    }
  },

  // add a job 
  addJob: async (job) => {
    const config = {
      headers: {
        "Content-Type": "application/json"
      }
    }
    try {
      const res = await axios.post(`/api/jobs`, job, config);
      set((state) => {
        const jobs = state.jobs;
        jobs.push(res.data);
        return ({ jobs: jobs })
      });
    } catch (error) {
      console.log(error)
    }
  }
}))
