import { memo } from "react";
import "./progress-bar.css";

interface Props {
  progress: number;
}

const MIN = 0;
const MAX = 100;

export default memo(function ProgressBar(props: Props) {
  const { progress } = props;

  if (progress < MIN || progress > MAX) return;

  return (
    <div
      className="progress-bar"
      role="progressbar"
      aria-valuenow={progress}
      aria-valuemax={MAX}
      aria-valuemin={MIN}
    >
      <span
        className={`progress-bar__filled-bar ${
          progress === MAX && "progress-bar__filled-bar_full"
        }`}
        style={{
          width: `${progress}%`,
        }}
      >
        <p>{progress} %</p>
      </span>
    </div>
  );
});
