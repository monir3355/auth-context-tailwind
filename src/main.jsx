import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Home from "./assets/components/Home";
import Login from "./assets/components/Login";
import Register from "./assets/components/Register";
import AuthProvider from "./assets/AuthProvider/AuthProvider";
import Orders from "./assets/components/Orders";
import PrivateOders from "./PrivateRouter/PrivateOders";
import Profile from "./assets/components/Profile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/orders",
        element: (
          <PrivateOders>
            <Orders></Orders>
          </PrivateOders>
        ),
      },
      {
        path: "/profile",
        element: (
          <PrivateOders>
            <Profile></Profile>
          </PrivateOders>
        ),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
