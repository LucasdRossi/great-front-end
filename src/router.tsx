import { RouteObject, createBrowserRouter } from "react-router-dom";

import Main from "./pages/Main";
import Tabs from "./pages/Tabs";

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <Main />,
  },
  {
    path: "/tabs",
    element: <Tabs />,
  },
];

const router = createBrowserRouter(routes);

export default router;
