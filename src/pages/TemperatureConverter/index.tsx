import { withHeader } from "../../components/Header";
import TemperatureConverter from "./components/TemperatureConverter";

function TemperatureConverterPage() {
  return (
    <main style={{ marginTop: 20 }}>
      <TemperatureConverter />
    </main>
  );
}

export default withHeader(TemperatureConverterPage);
