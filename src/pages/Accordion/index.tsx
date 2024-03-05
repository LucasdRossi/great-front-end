import { withHeader } from "../../components/Header";
import Accordion from "./components/Accordion";

import "./accordion-page.css";
import { useMemo } from "react";

function AccordionPage() {
  const accordionItems = useMemo(
    () => [
      {
        title: "Accordion 1",
        details: "Accordion 1 details",
        key: "acc1",
      },
      {
        title: "Accordion 2",
        details: "Accordion 2 details",
        key: "acc2",
      },
      {
        title: "Accordion 3",
        details: "Accordion 3 details",
        key: "acc3",
      },
    ],
    []
  );

  return (
    <main>
      <div className="accordion-page__accordion-container">
        <Accordion items={accordionItems} />
      </div>
    </main>
  );
}

export default withHeader(AccordionPage);
