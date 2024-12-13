import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import HomeLayout from "../layouts/HomeLayout";

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children: [
        {
          path: "/",
          element: <HomeLayout></HomeLayout>,
        }
      ]
    },
  ]);

export default router;