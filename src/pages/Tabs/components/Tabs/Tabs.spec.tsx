import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Tabs from "./Tabs";
import type { Props as TabsProps } from "./Tabs";

describe("Tabs test", () => {
  const tabs: TabsProps["tabs"] = [
    {
      title: "Tab 1",
      render: (props) => (
        <div {...props} data-testid="tab1">
          Tab 1
        </div>
      ),
      key: "tab1",
    },
    {
      title: "Tab 2",
      render: (props) => (
        <div {...props} data-testid="tab2">
          Tab 2
        </div>
      ),
      key: "tab2",
    },
  ];

  it("should render all titles", () => {
    render(<Tabs tabs={tabs} />);

    tabs.forEach((tab) => {
      expect(
        screen.queryByRole("button", {
          name: tab.key,
        })
      ).toBeDefined();
    });
  });

  it("should render all content", () => {
    render(<Tabs tabs={tabs} />);

    tabs.forEach((tab) => {
      expect(screen.queryAllByTestId(tab.key)).toBeDefined();
    });
  });

  it("should hide the content of the inactive tab", async () => {
    const user = userEvent.setup();

    render(<Tabs tabs={tabs} />);

    await user.click(
      screen.getByRole("button", {
        name: tabs[1].title,
      })
    );

    expect(screen.getByTestId(tabs[0].key)).toHaveProperty("hidden");
  });

  it("should set defaultTab to 1", () => {
    render(<Tabs tabs={tabs} defaultTab={1} />);

    expect(screen.getByTestId(tabs[0].key)).toHaveProperty("hidden");
  });
});
