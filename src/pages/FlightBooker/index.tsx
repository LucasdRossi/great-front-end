import { withHeader } from "../../components/Header";
import FlightBooker from "./components/FlightBooker";

function FlightBookerPage() {
  return (
    <main>
      <FlightBooker />
    </main>
  );
}

export default withHeader(FlightBookerPage);
