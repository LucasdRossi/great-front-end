import { withHeader } from "../../components/Header";
import FlightBooker from "./components/FlightBooker";

function FlightBookerPage() {
  return (
    <main>
      <h1>Flight Booker</h1>
      <FlightBooker />
    </main>
  );
}

export default withHeader(FlightBookerPage);
