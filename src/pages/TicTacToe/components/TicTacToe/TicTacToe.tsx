import { useReducer } from "react";
import "./tic-tac-toe.css";

type GameActions =
  | { type: "RESET" }
  | { type: "MOVE"; payload: { row: number; cell: number } };

interface GameState {
  playsCount: number;
  isWin: boolean;
  isTie: boolean;
  turn: "X" | "O";
  board: Array<Array<string | null>>;
}

const getInitialState = (): GameState => ({
  playsCount: 0,
  isTie: false,
  isWin: false,
  turn: "X",
  board: Array.from({ length: 3 }, () => null).map(() =>
    Array.from({ length: 3 }, () => null)
  ),
});

const checkWin = (board: GameState["board"], turn: GameState["turn"]) => {
  let isWin = false;

  // If the row is full with the same letter
  isWin = board.some((row) => row.every((cell) => cell === turn));

  if (!isWin) {
    // If a column is full with the same letter
    for (let column = 0; column < board.length; column++) {
      let win = true;
      for (let row = 0; row < board.length; row++) {
        if (board[row][column] !== turn) {
          win = false;
          break;
        }
      }
      if (win) {
        isWin = true;
        break;
      }
    }
  }

  if (!isWin) {
    // If DP or DS is full with the same letter
    let win = true;
    for (let i = 0; i < board.length; i++) {
      if (board[i][i] !== turn) {
        win = false;
        break;
      }
    }

    if (!win) {
      win = true;
      for (let i = board.length - 1; i >= 0; i--) {
        if (board[board.length - 1 - i][i] !== turn) {
          win = false;
          break;
        }
      }
    }

    isWin = win;
  }

  return isWin;
};

function gameReducer(state: GameState, action: GameActions): GameState {
  if (action.type === "RESET") {
    return getInitialState();
  }
  if (action.type === "MOVE") {
    const { cell, row } = action.payload;

    if (state.board[row][cell] !== null) return state;

    const newBoard = state.board.map((rowArray, rowIndex) => {
      if (rowIndex !== row) return rowArray;
      return rowArray.map((cellValue, cellIndex) => {
        if (cellIndex !== cell) return cellValue;
        return state.turn;
      });
    });

    const playsCount = state.playsCount + 1;
    const newTurn = state.turn === "X" ? "O" : "X";

    const isTie = playsCount === Math.pow(state.board.length, 2);

    if (isTie) {
      return {
        ...state,
        board: newBoard,
        isTie: true,
        isWin: false,
        turn: newTurn,
        playsCount: playsCount,
      };
    }

    let isWin = false;
    if (playsCount >= 5) {
      isWin = checkWin(newBoard, state.turn);
    }

    return {
      ...state,
      board: newBoard,
      turn: isWin ? state.turn : newTurn,
      isWin,
      playsCount: playsCount,
    };
  }

  return state;
}

export default function TicTacToe() {
  const [game, dispatch] = useReducer(gameReducer, getInitialState());

  const resetGame = () => {
    dispatch({ type: "RESET" });
  };

  const handleCellClick = (row: number, cell: number) => {
    if (!game.isWin) {
      dispatch({
        type: "MOVE",
        payload: {
          cell,
          row,
        },
      });
    }
  };

  return (
    <>
      <h1>
        {game.isTie && "Tie"}
        {game.isWin && `${game.turn} WINS`}
        {!game.isWin && !game.isTie && `${game.turn} turn`}
      </h1>
      <table className="tic-tac-toe__board">
        <tbody>
          {game.board.map((row, rowIndex) => (
            <tr className="tic-tac-toe__row" key={`row_${rowIndex}`}>
              {row.map((cell, cellIndex) => (
                <Cell
                  key={`cell_${rowIndex}_${cellIndex}`}
                  handleClick={() => handleCellClick(rowIndex, cellIndex)}
                >
                  {cell}
                </Cell>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={resetGame}>Reset</button>
    </>
  );
}

interface CellProps {
  children: React.ReactNode;
  handleClick: () => void;
}

function Cell(props: CellProps) {
  return (
    <td className="tic-tac-toe__cell" role="button" onClick={props.handleClick}>
      {props.children}
    </td>
  );
}
