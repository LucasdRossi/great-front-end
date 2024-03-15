import { useState } from "react";
import { withHeader } from "../../components/Header";

import "./list-transfer.css";

function ListTransferPage() {
  const [selectedItems, setSelectedItems] = useState<Set<string>>(new Set());
  const [leftList, setLeftList] = useState(
    new Set(["HTML", "JavaScript", "CSS", "TypeScript"])
  );
  const [rightList, setRightList] = useState(
    new Set(["React", "Angular", "Vue", "Svelte"])
  );

  const handleToggleSelectItem = (item: string) => {
    const newSelectedItems = new Set(selectedItems);

    if (newSelectedItems.has(item)) {
      newSelectedItems.delete(item);
    } else {
      newSelectedItems.add(item);
    }

    setSelectedItems(newSelectedItems);
  };

  const handleChangeList = (
    destination: "left" | "right",
    items: Set<string>
  ) => {
    if (destination === "left") {
      const newLeftList = new Set([...leftList, ...items]);
      const newRightList = new Set(rightList);

      items.forEach((value) => newRightList.delete(value));

      setLeftList(newLeftList);
      setRightList(newRightList);
    } else if (destination === "right") {
      const newRightList = new Set([...rightList, ...items]);
      const newLeftList = new Set(leftList);

      items.forEach((value) => newLeftList.delete(value));

      setRightList(newRightList);
      setLeftList(newLeftList);
    }
  };

  return (
    <main className="transfer">
      <List
        items={Array.from(leftList)}
        selectedItems={selectedItems}
        handleToggleSelect={handleToggleSelectItem}
      />
      <div className="transfer__control">
        <button
          onClick={() => handleChangeList("left", rightList)}
          aria-label="Transfer all items left"
        >
          <span aria-hidden>{`<<`}</span>
        </button>
        <button
          onClick={() => handleChangeList("left", selectedItems)}
          disabled={
            !Array.from(rightList).some((item) => selectedItems.has(item))
          }
          aria-label="Transfer all selected items left"
        >
          <span aria-hidden>{`<`}</span>
        </button>
        <button
          onClick={() => handleChangeList("right", selectedItems)}
          aria-label="Transfer all selected items right"
          disabled={
            !Array.from(leftList).some((item) => selectedItems.has(item))
          }
        >
          <span aria-hidden>{`>`}</span>
        </button>
        <button
          aria-label="Transfer all items right"
          onClick={() => handleChangeList("right", leftList)}
        >
          <span aria-hidden>{`>>`}</span>
        </button>
      </div>
      <List
        items={Array.from(rightList)}
        selectedItems={selectedItems}
        handleToggleSelect={handleToggleSelectItem}
      />
    </main>
  );
}

interface ListProps {
  items: string[];
  selectedItems: Set<string>;

  handleToggleSelect: (item: string) => void;
}

function List(props: ListProps) {
  return (
    <ul className="transfer__list">
      {props.items.map((item) => (
        <li className="transfer__list-item" key={item}>
          <input
            type="checkbox"
            checked={props.selectedItems.has(item)}
            onChange={() => props.handleToggleSelect(item)}
          />
          <p>{item}</p>
        </li>
      ))}
    </ul>
  );
}

export default withHeader(ListTransferPage);
