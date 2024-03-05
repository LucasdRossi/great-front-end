import { useMemo } from "react";
import { withHeader } from "../../components/Header";
import Tabs from "./components/Tabs";
import type { Props as TabProps } from "./components/Tabs/Tabs";

function TabsPage() {
  const tabItems: TabProps["tabs"] = useMemo(
    () => [
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
    ],
    []
  );

  return (
    <main>
      <Tabs tabs={tabItems} />
    </main>
  );
}

export default withHeader(TabsPage);
