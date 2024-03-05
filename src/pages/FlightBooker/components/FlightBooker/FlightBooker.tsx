import { memo, useState } from "react";
import "./flight-booker.css";

type FlightTypes = keyof typeof flightTypes;

const flightTypes = {
  "ONE-WAY": "ONE-WAY",
  RETURN: "RETURN",
};
const now = new Date();

const formatDate = (d: Date) => {
  const day = d.getDate().toString().padStart(2, "0");
  const month = (d.getMonth() + 1).toString().padStart(2, "0");
  const year = d.getFullYear();

  return `${year}-${month}-${day}`;
};

export default memo(function FlightBooker() {
  const [flightType, setFlightType] = useState<FlightTypes>();
  const [departureDate, setDepartureDate] = useState(formatDate(now));
  const [returnDate, setReturnDate] = useState<string>();

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();

    if (flightType === flightTypes["ONE-WAY"]) {
      return alert(`You have booked a one-way flight on ${departureDate}`);
    }

    if (flightType === flightTypes.RETURN && returnDate) {
      return alert(
        `You have booked a return flight, departing on ${departureDate} and returning on ${returnDate}`
      );
    }
  };

  const handleChangeFlightTypeSelect: React.ChangeEventHandler<
    HTMLSelectElement
  > = (event) => {
    const type = event.target.value as FlightTypes;

    setFlightType(type);
  };

  return (
    <form onSubmit={handleSubmit} className="fligth-booker">
      <select
        value={flightType}
        name="flight-type"
        onChange={handleChangeFlightTypeSelect}
        className="fligth-booker__select"
      >
        <option value={flightTypes["ONE-WAY"]}>One-way flight</option>
        <option value={flightTypes.RETURN}>Return flight</option>
      </select>

      <div className="fligth-booker__date-input">
        <label htmlFor="departure-date">Departure date</label>
        <input
          type="date"
          name="departure-date"
          id="departure-date"
          value={departureDate}
          min={formatDate(now)}
          max={returnDate}
          onChange={(e) => setDepartureDate(e.target.value)}
          required
        ></input>
      </div>

      {flightType === flightTypes.RETURN && (
        <div className="fligth-booker__date-input">
          <label htmlFor="return-date">Return date</label>
          <input
            type="date"
            name="return-date"
            id="return-date"
            min={departureDate}
            value={returnDate}
            onChange={(e) => setReturnDate(e.target.value)}
            required
          ></input>
        </div>
      )}

      <button type="submit" className="fligth-booker__button">
        Submit
      </button>
    </form>
  );
});
