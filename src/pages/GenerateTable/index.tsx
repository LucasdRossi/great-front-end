import { withHeader } from "../../components/Header";
import GenerateTable from "./components/GenerateTable";

function GenerateTablePage() {
  return (
    <main>
      <GenerateTable />
    </main>
  );
}

export default withHeader(GenerateTablePage);
