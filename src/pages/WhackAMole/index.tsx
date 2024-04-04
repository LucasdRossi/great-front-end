import { useCallback, useEffect, useState } from "react";
import { withHeader } from "../../components/Header";

import "./wack-a-mole.css";

type GameState = "idle" | "live" | "finished";

const holes = 9;
const dissapearTimeout = 1500;
const totalGameTime = 15; // in seconds

function getRandomInt(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function Hole() {
  return (
    <img
      src="https://www.greatfrontend.com/img/questions/whack-a-mole/mole-hill.png"
      className="hole"
    />
  );
}

function Mole({ onClick }: { onClick: () => void }) {
  return <div className="mole" onClick={onClick} />;
}

function WhackAMolePage() {
  const [points, setPoints] = useState(0);
  const [time, setTime] = useState(totalGameTime);
  const [gameState, setGameState] = useState<GameState>("idle");
  const [gameTimeInterval, setGameTimeInterval] = useState<NodeJS.Timeout>();
  const [moleTimeInterval, setMoleTimeInterval] = useState<NodeJS.Timeout>();
  const [moleHoleIndex, setMoleHoleIndex] = useState<number>();

  const handleGameStart = () => {
    clearInterval(gameTimeInterval);
    setGameState("live");
    setPoints(0);
    setTime(totalGameTime);

    const gameInterval = setInterval(() => {
      setTime((current) => current - 1);
    }, 1000);

    const moleInterval = setInterval(() => {
      setMoleHoleIndex(getRandomInt(0, holes));
    }, dissapearTimeout);

    setGameTimeInterval(gameInterval);
    setMoleTimeInterval(moleInterval);
  };

  const handleMoleClick = () => {
    setPoints((current) => current + 1);
    setMoleHoleIndex(undefined);
  };

  const handleGameEnds = useCallback(() => {
    clearInterval(gameTimeInterval);
    clearInterval(moleTimeInterval);

    setGameState("finished");
    setMoleHoleIndex(undefined);
  }, [gameTimeInterval, moleTimeInterval]);

  useEffect(() => {
    if (time === 0 && gameState === "live") {
      handleGameEnds();
    }
  }, [time, gameState, handleGameEnds]);

  useEffect(() => {
    return () => {
      clearInterval(gameTimeInterval);
      clearInterval(moleTimeInterval);
    };
  }, []);

  return (
    <main>
      <div>
        {gameState === "live" && (
          <>
            <p>Points: {points}</p>
            <p>Time Left: {time}</p>
          </>
        )}
        {gameState === "idle" && (
          <button onClick={handleGameStart}>Start</button>
        )}
        {gameState === "finished" && (
          <>
            <p>Total Points: {points}</p>
            <button onClick={handleGameStart}>Restart</button>
          </>
        )}
      </div>
      <div className="hole-pit">
        {Array.from({ length: holes }).map((_, index) => (
          <div className="hole-container" key={index}>
            {moleHoleIndex === index && <Mole onClick={handleMoleClick} />}
            <Hole />
          </div>
        ))}
      </div>
    </main>
  );
}

export default withHeader(WhackAMolePage);
