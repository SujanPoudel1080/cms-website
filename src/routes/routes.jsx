import { createBrowserRouter } from "react-router-dom";
import {
  HomeLayout,
  Landing,
  Register,
  Login,
  DashboardLayout,
  Error,
  AddJob,
  AllJobs,
  Profile,
  Admin,
  Stats,
} from "../pages";
const routes = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/dashboard",
        element: <DashboardLayout />,
      },
    ],
  },
  {
    path: "dashboard",
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        path: 'profile',
        element: <Profile />,
      },
      { path: "stats", element: <Stats /> },
      {
        path: "all-jobs",
        element: <AllJobs />,
      },

      {
        path: "add-job",
        element: <AddJob />,
      },
      {
        path: "admin",
        element: <Admin />,
      },
    ],
  },

  {
    path: "/error",
    element: <Error />,
  },
  {
    path: "/landing",
    element: <Landing />,
  },
]);

export default routes;
