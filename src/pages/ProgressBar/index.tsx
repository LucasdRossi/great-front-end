import { useState } from "react";
import { withHeader } from "../../components/Header";

import ProgressBar from "./components/ProgressBar";

function ProgressBarPage() {
  const [progress, setProgress] = useState(0);

  return (
    <main>
      <input
        value={progress}
        onChange={(e) => setProgress(Number(e.target.value))}
        min={0}
        max={100}
        type="range"
      />
      <div style={{ marginTop: 10, maxWidth: 500 }}>
        <ProgressBar progress={progress} />
      </div>
    </main>
  );
}

export default withHeader(ProgressBarPage);
