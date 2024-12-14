import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import HomeLayout from "../layouts/HomeLayout";
import ErrorPage from "../pages/ErrorPage";
import RegisterPage from "../pages/RegisterPage";
import LoginPage from "../pages/LoginPage";
import JobsLayout from "../layouts/JobsLayout";
import JobDetails from "../components/JobDetails";

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
          path: "/",
          element: <HomeLayout></HomeLayout>,
        },
        {
          path: "/register",
          element: <RegisterPage></RegisterPage>,
        },
        {
          path: "/login",
          element: <LoginPage></LoginPage>,
        },
        {
          path: "/jobs",
          element: <JobsLayout></JobsLayout>,
        },
        {
          path: "/jobs/:id",
          element: <JobDetails></JobDetails>,
          loader: ({ params }) => fetch(`https://job-portal-server-murex.vercel.app/jobs/${params.id}`),
        },
      ]
    },
  ]);

export default router;