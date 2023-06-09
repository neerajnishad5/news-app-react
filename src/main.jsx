import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { ChakraProvider } from "@chakra-ui/react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./components/RootLayout/RootLayout.jsx";
import ErrorPage from "./components/ErrorPage/Errorpage.jsx";
import India from "./components/India/India.jsx";
import Tech from "./components/Tech/Tech.jsx";
import Opinion from "./components/Opinion/Opinion.jsx";
import Login from "./components/Login/Login.jsx";
import Register from "./components/Register/Register.jsx";
import Home from "./components/Home/Home.jsx";
import Sports from "./components/Sports/Sports.jsx";
import World from "./components/WorldNews/WorldNews.jsx";
import Politics from "./components/Politics/Politics.jsx";
import CountryNews from "./components/CountryNews/CountryNews";
import App from "./App";
import ExpandNews from "./components/ExpandNews/ExpandNews";
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/india",
        element: <India />,
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
        path: "sports",
        element: <Sports />,
      },
      {
        path: "world",
        element: <World />,
      },
      {
        path: "/world/:countryname",
        element: <CountryNews />,
      },
      {
        path: "/politics",
        element: <Politics />,
      },
      {
        path: "business",
        element: <Politics />,
      },
      {
        path: ":title",
        element: <ExpandNews />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <ChakraProvider>
        <App />
      </ChakraProvider>
    </RouterProvider>
  </React.StrictMode>
);
