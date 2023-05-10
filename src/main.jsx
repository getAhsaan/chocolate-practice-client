import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NewChocolates from "./components/NewChocolates.jsx";
import UpdateChocolates from "./components/UpdateChocolates.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    loader: () => fetch("http://localhost:4000/chocolates"),
  },
  {
    path: "/newChocolates",
    element: <NewChocolates></NewChocolates>,
  },
  {
    path: "/updateChocolates/:id",
    element: <UpdateChocolates></UpdateChocolates>,
    loader: ({ params }) =>
      fetch(`http://localhost:4000/chocolates/${params.id}`),
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
