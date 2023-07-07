import { createBrowserRouter ,Navigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
import Signin from "../pages/signin"
import Signup from "../pages/signup"
import AccountLayout from "../layouts/account"
import ProtectedRoute from "./ProtectedRoute"
import Projects from "../pages/projects"
import Members from "../pages/members"
import Logout from "../pages/logout";
import ProjectContainer from "../pages/projects/ProjectContainer";
import ProjectDetails from "../pages/project_details";

const router = createBrowserRouter([
    { path: "/", element: <Navigate to="/account/projects" replace /> },
  {
    path: "/signin", 
    element: <Signin />
  },
  
  {
    path: "/signin", 
    element: <Signin />
  },
  {
    path: "/signup", 
    element: <Signup />
  },
  {
    path: "account",
    element: (
        <ProtectedRoute>
          <AccountLayout />
        </ProtectedRoute>
      ),
      children: [
        { index: true, element: <Navigate to="/account/projects" replace /> },
        {
          path: "projects",
          element: <ProjectContainer />,
          children: [
            { index: true, element: <Projects /> },
            {
              path: ":projectID",
              element: <ProjectDetails />,
              children: [
                { index: true, element: <></> },
                {
                  path: "tasks",
                  children: [
                    { index: true, element: <Navigate to="../" replace /> },
                    { path: "new", element: <>Show Modal window to create a task</> },
                    {
                      path: ":taskID",
                      children: [{ index: true, element: <>Show Task Details</> }],
                    },
                  ],
                },
              ],
            }
          ]
        },
      
        {
          path: "members",
          element: (<Members />)
        },
      ],
  },{ 
    path: "/logout", 
    element: <Logout /> 
  }
]);
export default router;