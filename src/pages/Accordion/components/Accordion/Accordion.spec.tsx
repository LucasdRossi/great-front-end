import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Accordion from ".";
import type { Props as AccordionProps } from "./Accordion";

describe("Accordion specs", () => {
  const accordionItems: AccordionProps["items"] = [
    {
      title: "Accordion 1",
      details: <p data-testid="acc1-details">Accordion 1 details</p>,
      key: "acc1",
    },
    {
      title: "Accordion 2",
      details: <p data-testid="acc2-details">Accordion 2 details</p>,
      key: "acc2",
    },
    {
      title: "Accordion 3",
      details: <p data-testid="acc3-details">Accordion 3 details</p>,
      key: "acc3",
    },
  ];

  it("should render all title elements", () => {
    render(<Accordion items={accordionItems} />);

    accordionItems.forEach((item) => {
      expect(screen.queryByDisplayValue(item.title)).toBeDefined();
    });
  });

  it("should start with all details hidden", () => {
    render(<Accordion items={accordionItems} />);

    accordionItems.forEach((item) => {
      const detailsElement = screen.getByTestId(`${item.key}-details`);

      expect(detailsElement.parentElement).toHaveProperty("hidden", true);
    });
  });

  it("should open details if the title is clicked", async () => {
    const user = userEvent.setup();
    const clickedItem = accordionItems[1];

    render(<Accordion items={accordionItems} />);

    await user.click(screen.getByText(clickedItem.title));

    expect(
      screen.getByTestId(`${clickedItem.key}-details`).parentElement
    ).toHaveProperty("hidden", false);
  });

  it("should close detais when title is clicked and detais is open", async () => {
    const user = userEvent.setup();
    const clickedItem = accordionItems[1];

    render(<Accordion items={accordionItems} />);

    await user.click(screen.getByText(clickedItem.title));
    await user.click(screen.getByText(clickedItem.title));

    expect(
      screen.getByTestId(`${clickedItem.key}-details`).parentElement
    ).toHaveProperty("hidden", true);
  });

  it("should individualy open details if the respective title is clicked", async () => {
    const user = userEvent.setup();
    let clickedItem = accordionItems[1];

    render(<Accordion items={accordionItems} />);

    await user.click(screen.getByText(clickedItem.title));

    expect(
      screen.getByTestId(`${clickedItem.key}-details`).parentElement
    ).toHaveProperty("hidden", false);

    clickedItem = accordionItems[0];

    await user.click(screen.getByText(clickedItem.title));

    expect(
      screen.getByTestId(`${clickedItem.key}-details`).parentElement
    ).toHaveProperty("hidden", false);
  });
});
