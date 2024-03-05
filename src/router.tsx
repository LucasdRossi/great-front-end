import { RouteObject, createBrowserRouter } from "react-router-dom";

import Main from "./pages/Main";
import Tabs from "./pages/Tabs";
import Accordion from "./pages/Accordion";
import FlightBooker from "./pages/FlightBooker";
import GenerateTable from "./pages/GenerateTable";
import ProgressBar from "./pages/ProgressBar";

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
