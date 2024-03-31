import { Link } from "react-router-dom";

import { routes } from "../../router";

export default function Main() {
  return (
    <main>
      <h1>Components</h1>
      <nav>
        <ul>
          {Object.entries(routes)
            .sort((a, b) => a[1].title?.localeCompare(b[1].title ?? "") ?? 0)
            .map(([key, route]) => (
              <li key={key}>
                <Link to={route.config.path}>{route.title}</Link>
              </li>
            ))}
        </ul>
      </nav>
    </main>
  );
}
