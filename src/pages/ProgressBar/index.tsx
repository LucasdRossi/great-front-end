import { useState } from "react";
import { withHeader } from "../../components/Header";

import ProgressBar from "./components/ProgressBar";

function ProgressBarPage() {
  const [progress, setProgress] = useState(0);

  return (
    <main>
      <h1>Progress Bar</h1>
      <input
        value={progress}
        onChange={(e) => setProgress(Number(e.target.value))}
        min={0}
        max={100}
        type="range"
      />
      <div style={{ marginTop: 10 }}>
        <ProgressBar progress={progress} />
      </div>
    </main>
  );
}

export default withHeader(ProgressBarPage);