import { RouteObject, createBrowserRouter } from "react-router-dom";

import Main from "./pages/Main";
import Tabs from "./pages/Tabs";
import Accordion from "./pages/Accordion";
import FlightBooker from "./pages/FlightBooker";
import GenerateTable from "./pages/GenerateTable";
import ProgressBar from "./pages/ProgressBar";
import TemperatureConverter from "./pages/TemperatureConverter";
import Tweet from "./pages/Tweet";
import LikeButton from "./pages/LikeButton";
import TrafficLight from "./pages/TrafficLight";
import TicTacToe from "./pages/TicTacToe";
import JobBoard from "./pages/JobBoard";
import ListTransfer from "./pages/ListTransfer";

interface Route {
  title?: string;
  config: RouteObject & { path: string };
}

interface Routes {
  [key: string]: Route;
}

export const routes: Routes = {
  tabs: {
    config: {
      path: "/tabs",
      element: <Tabs />,
    },
    title: "Tabs",
  },
  accordion: {
    config: {
      path: "/accordion",
      element: <Accordion />,
    },
    title: "Accordion",
  },
  flighBooker: {
    config: {
      path: "/flight-booker",
      element: <FlightBooker />,
    },
    title: "Flight Booker",
  },
  generateTable: {
    config: {
      path: "/generate-table",
      element: <GenerateTable />,
    },
    title: "Generate Table",
  },
  progressBar: {
    config: {
      path: "/progress-bar",
      element: <ProgressBar />,
    },
    title: "Progress Bar",
  },
  temperatureConverter: {
    config: {
      path: "/temperature-converter",
      element: <TemperatureConverter />,
    },
    title: "Temperature Converter",
  },
  tweet: {
    config: {
      path: "/tweet",
      element: <Tweet />,
    },
    title: "Tweet",
  },
  likeButton: {
    config: {
      path: "/like-button",
      element: <LikeButton />,
    },
    title: "Like Button",
  },
  trafficLight: {
    config: {
      path: "/traffic-light",
      element: <TrafficLight />,
    },
    title: "Traffic Light",
  },
  ticTacToe: {
    config: {
      path: "/tic-tac-toe",
      element: <TicTacToe />,
    },
    title: "Tic Tac Toe",
  },
  jobBoard: {
    config: {
      path: "/job-board",
      element: <JobBoard />,
    },
    title: "Job Board",
  },
  listTransfer: {
    config: {
      path: "/list-transfer",
      element: <ListTransfer />,
    },
    title: "List Transfer",
  },
};

const router = createBrowserRouter(
  Object.entries(routes)
    .map(([, route]) => route.config)
    .concat([
      {
        path: "/",
        element: <Main />,
      },
    ])
);

export default router;
