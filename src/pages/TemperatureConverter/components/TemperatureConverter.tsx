import { memo, useState } from "react";

import "./temperature-converter.css";

const celciusToFahrenheit = (celcius: number) =>
  Number((celcius * 1.8 + 32).toFixed(4));

const fahrenheitToCelcius = (fahrenheit: number) =>
  Number(((fahrenheit - 32) / 1.8).toFixed(4));

export default memo(function TemperatureConverter() {
  const [fahrenheitTemperature, setFahrenheitTemperature] = useState(
    celciusToFahrenheit(0)
  );
  const [celciusTemperature, setCelciusTemperature] = useState(0);

  const handleCelciusChange: React.ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    const temperature = Number(event.target.value);

    setCelciusTemperature(temperature);
    setFahrenheitTemperature(celciusToFahrenheit(temperature));
  };

  const handleFahrenheitChange: React.ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    const temperature = Number(event.target.value);

    setFahrenheitTemperature(temperature);
    setCelciusTemperature(fahrenheitToCelcius(temperature));
  };

  return (
    <div className="temperature-converter">
      <div className="temperature-converter__input">
        <input
          type="number"
          name="celcius-input"
          id="celcius-input"
          value={celciusTemperature}
          onChange={handleCelciusChange}
        />
        <label htmlFor="celcius-input">Celcius</label>
      </div>
      <span className="temperature-converter__separetor">=</span>
      <div className="temperature-converter__input">
        <input
          type="number"
          name="fahrenheit-input"
          id="fahrenheit-input"
          value={fahrenheitTemperature}
          onChange={handleFahrenheitChange}
        />
        <label htmlFor="fahrenheit-input">Fahrenheit</label>
      </div>
    </div>
  );
});
