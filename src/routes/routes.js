import MainLayout from "../MainLayout";
import PersistLogin from "../state/context/hooks/PersistLogin";
import RequireAuth from "../state/context/hooks/RequireAuth";
// pages
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Chat from "../pages/Chat";
//
import NotFound from "../pages/404";
import Unauthorized from "../pages/Unauthorized";

const ROLES = {
  admin: "admin",
  user: "user",
  student: "student",
  parent: "parent",
};

export const routes = [
  {
    element: <MainLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/register", element: <Register /> },
      { path: "/login", element: <Login /> },
      { path: "/chat", element: <Chat /> },
      {
        element: <PersistLogin />,
        children: [
          {
            element: (
              <RequireAuth
                allowedRoles={[
                  ROLES.admin,
                  ROLES.user,
                  ROLES.student,
                  ROLES.parent,
                ]}
              />
            ),
            children: [
              // {
              //   path: "/chat",
              //   element: <Chat />,
              // },
            ],
          },
        ],
      },
      { path: "*", element: <NotFound /> },
      { path: "/unauthorized", element: <Unauthorized /> },
    ],
  },
];
