import "./main.css";
import { Link } from "react-router-dom";

import { routes } from "../../router";

export default function Main() {
  return (
    <main>
      <h1>Components</h1>
      <nav>
        <ul>
          <li>
            <Link to={routes.tabs.config.path}>{routes.tabs.title}</Link>
          </li>
          <li>
            <Link to={routes.accordion.config.path}>
              {routes.accordion.title}
            </Link>
          </li>
        </ul>
      </nav>
    </main>
  );
}
