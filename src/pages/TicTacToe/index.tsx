import { withHeader } from "../../components/Header";
import TicTacToe from "./components/TicTacToe";

function TicTacToePage() {
  return (
    <main style={{ marginTop: 10 }}>
      <TicTacToe />
    </main>
  );
}

export default withHeader(TicTacToePage);
