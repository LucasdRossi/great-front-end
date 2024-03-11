import { memo, useEffect, useState } from "react";
import "./traffic-light.css";

type Light = "red" | "green" | "yellow";

const redLightDuration = 4000;
const yellowLightDuration = 500;
const greenLightDuration = 3000;

export default memo(function TrafficLight() {
  const [activeLight, setActiveLight] = useState<Light>("red");

  useEffect(() => {
    if (activeLight === "red") {
      setTimeout(() => {
        setActiveLight("yellow");

        setTimeout(() => {
          setActiveLight("green");
        }, yellowLightDuration);
      }, redLightDuration);
    }

    if (activeLight === "green") {
      setTimeout(() => {
        setActiveLight("yellow");

        setTimeout(() => {
          setActiveLight("red");
        }, yellowLightDuration);
      }, greenLightDuration);
    }
  }, [activeLight]);

  return (
    <div aria-label={`Current light: ${activeLight}`} className="traffic-light">
      <Light color="red" active={activeLight === "red"} />
      <Light color="yellow" active={activeLight === "yellow"} />
      <Light color="green" active={activeLight === "green"} />
    </div>
  );
});

interface LightProps {
  color: Light;
  active: boolean;
}

function Light(props: LightProps) {
  return (
    <div
      className={`traffic-light__light ${
        props.active && `traffic-light__light_${props.color}`
      }`}
    />
  );
}
