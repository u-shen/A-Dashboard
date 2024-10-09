import { UserContextProvider } from "./UserContext/UserContext";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Layout from "./Components/Layout/Layout";
import Dashboard from "./Components/Dashboard/Dashboard";
import Settings from "./Components/Settings/Settings";
import Profile from "./Components/Profile/Profile";
import Projects from "./Components/Projects/Projects";
import Courses from "./Components/Courses/Courses";
import Friends from "./Components/Friends/Friends";
import Files from "./Components/Files/Files";
import Plans from "./Components/Plans/Plans";
import { useContext } from "react";

const client = new QueryClient();
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "settings",
        element: <Settings />,
      },
      {
        path: "Profile",
        element: <Profile />,
      },
      {
        path: "Projects",
        element: <Projects />,
      },
      {
        path: "Courses",
        element: <Courses />,
      },
      {
        path: "Plans",
        element: <Plans />,
      },
      {
        path: "Friends",
        element: <Friends />,
      },
      {
        path: "Files",
        element: <Files />,
      },
      {
        path: "Plans",
        element: <Plans />,
      },
    ],
  },
]);

function App() {
  return (
    <UserContextProvider>
      <QueryClientProvider client={client}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </UserContextProvider>
  );
}

export default App;
