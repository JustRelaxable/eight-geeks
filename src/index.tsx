import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ErrorPage from "./error-page";
import Root from "./routes/root/root";
import Home from "./routes/home/home";
import { loader as homeLoader } from "./routes/home/home";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <Home />, loader: homeLoader },
      { path: "games/", element: <p>Hello from games page!</p> },
      { path: "games/:gameIdentifier", element: <p>Hello from games page!</p> },
    ],
  },
]);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
