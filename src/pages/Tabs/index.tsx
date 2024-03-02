import { withHeader } from "../../components/Header";
import Tabs from "./components/Tabs";

import "./tabs-page.css";

function TabsPage() {
  return (
    <main>
      <h1>Tabs</h1>
      <Tabs
        tabs={[
          {
            render: (props) => (
              <div {...props}>
                <h2>Tab 1</h2>
              </div>
            ),
            key: "tab-1",
            title: "Tab 1",
          },
          {
            render: (props) => (
              <div {...props}>
                <h2>Tab 2</h2>
              </div>
            ),
            key: "tab-2",
            title: "Tab 2",
          },
          {
            render: (props) => (
              <div {...props}>
                <h2>Tab 3</h2>
              </div>
            ),
            key: "tab-3",
            title: "Tab 3",
          },
        ]}
      />
    </main>
  );
}

export default withHeader(TabsPage);
