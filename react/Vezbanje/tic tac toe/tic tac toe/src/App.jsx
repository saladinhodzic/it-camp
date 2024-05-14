import { useState } from "react";
import "./App.css";

function Square({ value, onSquareClicked }) {
  return (
    <button className="square" onClick={onSquareClicked}>
      {value}
    </button>
  );
}

export default function Board() {
  const [xIsNext, setXIsNext] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(null));

  function handleClick(i) {
    if (squares[i] || declareWinner(squares)) {
      return;
    }
    const newSquares = squares.slice();
    if (xIsNext) {
      newSquares[i] = "X";
    } else {
      newSquares[i] = "O";
    }
    setSquares(newSquares);
    setXIsNext(!xIsNext);
  }

  const winner = declareWinner(squares);
  let status;
  if (winner) {
    status = "The winner is " + winner;
  } else {
    status = "Next player is" + xIsNext ? "X" : "O";
  }

  return (
    <>
      <div className="status">{status}</div>
      <div className="board">
        <div className="row">
          <Square value={squares[0]} onSquareClicked={() => handleClick(0)} />
          <Square value={squares[1]} onSquareClicked={() => handleClick(1)} />
          <Square value={squares[2]} onSquareClicked={() => handleClick(2)} />
        </div>
        <div className="row">
          <Square value={squares[3]} onSquareClicked={() => handleClick(3)} />
          <Square value={squares[4]} onSquareClicked={() => handleClick(4)} />
          <Square value={squares[5]} onSquareClicked={() => handleClick(5)} />
        </div>
        <div className="row">
          <Square value={squares[6]} onSquareClicked={() => handleClick(6)} />
          <Square value={squares[7]} onSquareClicked={() => handleClick(7)} />
          <Square value={squares[8]} onSquareClicked={() => handleClick(8)} />
        </div>
      </div>
    </>
  );
}

function declareWinner(newSquares) {
  const lines = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
    [2, 5, 8],
    [1, 4, 7],
  ];

  for (i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (
      newSquares[a] &&
      newSquares[a] === newSquares[b] &&
      newSquares[b] === newSquares[c]
    ) {
      return newSquares[a];
    }
  }
  return null;
}
