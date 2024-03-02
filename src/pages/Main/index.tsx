import "./main.css";
import { Link } from "react-router-dom";

export default function Main() {
  return (
    <main>
      <h1>Components</h1>
      <nav>
        <ul>
          <li>
            <Link to="/tabs">Tabs</Link>
          </li>
        </ul>
      </nav>
    </main>
  );
}
