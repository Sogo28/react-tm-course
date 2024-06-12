import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home";
import AddJob from "./pages/AddJob";
import Jobs from "./pages/Jobs";
import Job, { jobLoader } from "./pages/Job";
import MainLayout from "./layouts/MainLayout";
import NotFound from "./pages/NotFound";
import EditJob from "./pages/EditJob";

export default function App() {
  const addJob = async (newJob) => {
    const res = await fetch("/api/jobs", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(newJob),
    });
    return;
  };

  const editJob = async (updatedJob) => {
    const res = await fetch(`/api/jobs/${updatedJob.id}`, {
      method: "PUT",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(updatedJob),
    });
    return;
  };

  const deleteJob = async (id) => {
    const res = await fetch(`/api/jobs/${id}`, {
      method: "DELETE",
    });
    return;
  };

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/add-job" element={<AddJob addJobSubmit={addJob} />} />
        <Route
          path="/jobs/:id"
          element={<Job deleteJob={deleteJob} />}
          loader={jobLoader}
        />
        <Route
          path="/jobs/edit/:id"
          element={<EditJob editJobSubmit={editJob} />}
          loader={jobLoader}
        />
        <Route path="*" element={<NotFound />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}
