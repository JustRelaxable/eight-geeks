import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ErrorPage from "./error-page";
import Root from "./routes/root/root";
import Home from "./routes/home/home";
import { loader as homeLoader } from "./routes/home/home";
import GameDetails from "./routes/games/game-details/game-details";
import { loader as gameDetailsLoader } from "./routes/games/game-details/game-details";
import VideoDetails, {
  loader as videoDetailsLoader,
} from "./routes/videos/video-details/video-details";
import ArtworkDetails from "./routes/artworks/artwork-details/artwork-details";
import { loader as artworkDetailsLoader } from "./routes/artworks/artwork-details/artwork-details";

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
      {
        path: "games/:gameIdentifier",
        element: <GameDetails />,
        loader: gameDetailsLoader,
      },
      {
        path: "videos/:videoIdentifier",
        element: <VideoDetails />,
        loader: videoDetailsLoader,
      },
      {
        path: "artworks/:artworkIdentifier",
        element: <ArtworkDetails />,
        loader: artworkDetailsLoader,
      },
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
