import { withHeader } from "../../components/Header";
import GenerateTable from "./components/GenerateTable";

function GenerateTablePage() {
  return (
    <main>
      <h1>Generate Table</h1>
      <GenerateTable />
    </main>
  );
}

export default withHeader(GenerateTablePage);
