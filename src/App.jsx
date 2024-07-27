import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home";
import AddJob from "./pages/AddJob";
import Jobs from "./pages/Jobs";
import Job from "./pages/Job";
import MainLayout from "./layouts/MainLayout";
import NotFound from "./pages/NotFound";
import EditJob from "./pages/EditJob";
import { useStore } from "./store/JobStore";
import { useEffect } from "react";


export default function App() {

  const getJobs = useStore((state) => state.getJobs)
  useEffect(() => {
    getJobs();
  }, []);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/add-job" element={<AddJob />} />
        <Route
          path="/jobs/:id"
          element={<Job />}
        />
        <Route
          path="/jobs/edit/:id"
          element={<EditJob />}
        />
        <Route path="*" element={<NotFound />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}
