import { withHeader } from "../../components/Header";
import TrafficLight from "./components/TrafficLight";

function TrafficLightPage() {
  return (
    <main style={{ marginTop: 20 }}>
      <TrafficLight />
    </main>
  );
}

export default withHeader(TrafficLightPage);
