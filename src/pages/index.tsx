import { createBrowserRouter } from "react-router-dom";

import AppShell from "@/components/rippling-chrome/app-shell";


// Launchpad
import Home from "./Home";

import ExperimentOne from "./experiment-one";

export const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  {
    element: <AppShell />,
    children: [
      {
        path: "/experiment-one",
        element: <ExperimentOne />,
        },
    //   Example routes with nested children  
    //   {
    //     path: "/x/permissions-v2",
    //     element: <PermissionsLayout />,
    //     children: [
    //       { index: true, element: <Navigate to="permissions" replace /> },
    //       { path: "permissions", element: <PermissionsList /> },
    //       { path: "permissions/new/:id", element: <PermissionDetail /> },
    //       { path: "permissions/:id", element: <PermissionDetail /> },
    //     ],
    //   },
    //  Example route with no children
    //   { path: "/x/v2/editor/:id", element: <EditorV2 /> },
    ],
  },
]);
