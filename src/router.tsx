import { RouteObject, createBrowserRouter } from "react-router-dom";

import Main from "./pages/Main";
import Tabs from "./pages/Tabs";
import Accordion from "./pages/Accordion";

interface Route {
  title?: string;
  config: RouteObject & { path: string };
}

interface Routes {
  [key: string]: Route;
}

export const routes: Routes = {
  main: {
    config: {
      path: "/",
      element: <Main />,
    },
  },
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
};

const router = createBrowserRouter(
  Object.entries(routes).map(([, route]) => route.config)
);

export default router;
