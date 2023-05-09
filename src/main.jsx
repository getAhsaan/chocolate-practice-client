import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NewChocolates from "./components/NewChocolates.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
  },
  {
    path: "/newChocolates",
    element: <NewChocolates></NewChocolates>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
