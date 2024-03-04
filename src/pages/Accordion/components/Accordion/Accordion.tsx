import { useState } from "react";
import "./accordion.css";

export interface AccordionItem {
  key: string;
  title: string;
  details: React.ReactNode;
}

export interface Props {
  items: AccordionItem[];
}

export default function Accordion(props: Props) {
  const { items } = props;

  const [openedItems, setOpenedItems] = useState(
    new Set<AccordionItem["key"]>()
  );

  const handleToggleItem = (item: AccordionItem) => {
    const newOpenedItems = new Set(openedItems);

    if (newOpenedItems.has(item.key)) {
      newOpenedItems.delete(item.key);
    } else {
      newOpenedItems.add(item.key);
    }

    setOpenedItems(newOpenedItems);
  };

  return (
    <div className="accordion">
      {items.map((item) => {
        const hidden = !openedItems.has(item.key);

        return (
          <div key={item.key} className="accordion__item">
            <div
              className="accordion__title-container"
              role="button"
              onClick={() => handleToggleItem(item)}
              aria-expanded={!hidden}
            >
              <h2 className="accordion__title">{item.title}</h2>
              <span
                className={`accordion__expand-icon ${
                  !hidden && "accordion__expand-icon_rotaded"
                }`}
              />
            </div>
            <div
              className="accordion__details"
              hidden={hidden}
              aria-hidden={hidden}
            >
              {item.details}
            </div>
          </div>
        );
      })}
    </div>
  );
}
