import { memo, useState } from "react";
import "./generate-table.css";

export default memo(function GenerateTable() {
  const [rows, setRows] = useState<number>();
  const [columns, setColumns] = useState<number>();

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();

    const inputs = event.currentTarget.elements;

    const rowsElement = inputs.namedItem("rows") as HTMLInputElement;
    const columnsElement = inputs.namedItem("columns") as HTMLInputElement;

    if (rowsElement.value && columnsElement.value) {
      setRows(Number(rowsElement.value));
      setColumns(Number(columnsElement.value));
    }
  };

  return (
    <div className="generate-table">
      <form onSubmit={handleSubmit} className="generate-table__form">
        <div className="generate-table__input">
          <label htmlFor="rows">Rows</label>
          <input type="number" id="rows" name="rows" min={1} />
        </div>
        <div className="generate-table__input">
          <label htmlFor="columns">Columns</label>
          <input type="number" id="columns" name="columns" min={1} />
        </div>
        <button type="submit" className="generate-table__button">
          Submit
        </button>
      </form>
      {rows && columns && (
        <table className="generate-table__table">
          <tbody>
            {Array.from({ length: rows }, () => 0).map((_, row) => (
              <tr key={row}>
                {Array.from({ length: columns }, () => 0).map((_, col) => (
                  <td key={col}>
                    {col % 2 === 0
                      ? rows * col + (row + 1)
                      : rows * (col + 1) - row}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
});
