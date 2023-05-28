import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./components/RootLayout/RootLayout.jsx";
import ErrorPage from "./components/ErrorPage/Errorpage.jsx";
import India from "./components/India/India.jsx";
import US from "./components/US/US.jsx";
import Tech from "./components/Tech/Tech.jsx";
import Opinion from "./components/Opinion/Opinion.jsx";
import Login from "./components/Login/Login.jsx";
import Register from "./components/Register/Register.jsx";
import Home from "./components/Home/Home.jsx";
import Ipl from "./components/IPL/Ipl.jsx";
import World from "./components/WorldNews/WorldNews.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/india",
        element: <India />,
      },
      {
        path: "/us",
        element: <US />,
      },
      {
        path: "/tech",
        element: <Tech />,
      },
      {
        path: "/opinion",
        element: <Opinion />,
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
        path: "/ipl",
        element: <Ipl />,
      },
      {
        path: "/world",
        element: <World />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router}></RouterProvider>
);
