import { useMemo, useRef, useState } from "react";
import { SpinnerIcon } from "./Icons";

import "./autocomplete.css";

interface Props<T> {
  onChange?: (value: string) => void;
  onSelect?: (option: T) => void;
  data: T[];
  value?: string;
  renderItem: (option: T) => string;
  loading?: boolean;
}

export default function Autocomplete<T>(props: Props<T>) {
  const { data, onChange, onSelect, renderItem, value, loading } = props;

  const inputRef = useRef<HTMLInputElement>(null);
  const [open, setOpen] = useState(false);

  const isPopupOpen = useMemo(() => data?.length > 0 && open, [data, open]);

  const handleInputChange: React.ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    const { value } = event.target;

    onChange?.(value);
    setOpen(true);
  };

  const handleSelectOption = (item: T) => {
    if (onSelect) {
      onSelect(item);
    } else {
      if (inputRef.current) inputRef.current.value = renderItem(item);
    }

    setOpen(false);
    inputRef.current?.blur();
  };

  const handleAutocompleteFocus: React.FocusEventHandler = () => {
    setOpen(true);
  };

  const handleAutocompleteBlur: React.FocusEventHandler = ({
    currentTarget,
    relatedTarget,
  }) => {
    if (currentTarget.contains(relatedTarget)) return;

    setOpen(false);
  };

  const handleOptionKeyDown = (event: React.KeyboardEvent, item: T) => {
    switch (event.code) {
      case "Enter":
        handleSelectOption(item);
        break;
      case "ArrowDown":
        (event.currentTarget.nextSibling as HTMLLIElement | null)?.focus();
        break;
      case "ArrowUp":
        (event.currentTarget.previousSibling as HTMLLIElement | null)?.focus();
        break;
    }
  };

  const handleResultsKeyDown: React.KeyboardEventHandler = (event) => {
    switch (event.code) {
      case "Escape":
        setOpen(false);
        break;
    }
  };

  return (
    <div
      className="autocomplete"
      onBlur={handleAutocompleteBlur}
      onFocus={handleAutocompleteFocus}
      tabIndex={0}
      onKeyDown={handleResultsKeyDown}
    >
      <div className="autocomplete__input">
        <input
          name="search"
          autoFocus
          ref={inputRef}
          value={value}
          onChange={handleInputChange}
          // accessibility options
          aria-haspopup
          role="combobox"
          aria-expanded={isPopupOpen}
          aria-autocomplete="list"
          // mobile friendliness attributes
          autoCapitalize="off"
          autoComplete="off"
          autoCorrect="off"
          spellCheck="false"
        />
        {loading && <SpinnerIcon />}
      </div>

      <ul
        aria-live="polite"
        className="autocomplete__results"
        style={{ visibility: isPopupOpen ? "visible" : "hidden" }}
        aria-hidden={!isPopupOpen}
      >
        {data.map((item, index) => (
          <li
            key={index}
            onClick={() => handleSelectOption(item)}
            role="option"
            tabIndex={0}
            className="autocomplete__option"
            onKeyDown={(event) => handleOptionKeyDown(event, item)}
          >
            {renderItem(item)}
          </li>
        ))}
      </ul>
    </div>
  );
}
