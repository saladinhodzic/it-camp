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
  const [squares, setSquares] = useState(Array(9).fill(null));

  function handleClick() {
    const newSquares = squares.slice();
    newSquares[0] = "X";
    setSquares(newSquares);
  }
  return (
    <div className="board">
      <div className="row">
        <Square value={squares[0]} onSquareClicked={handleClick} />
        <Square value={squares[1]} onSquareClicked={handleClick} />
        <Square value={squares[2]} onSquareClicked={handleClick} />
      </div>
      <div className="row">
        <Square value={squares[3]} onSquareClicked={handleClick} />
        <Square value={squares[4]} onSquareClicked={handleClick} />
        <Square value={squares[5]} onSquareClicked={handleClick} />
      </div>
      <div className="row">
        <Square value={squares[6]} onSquareClicked={handleClick} />
        <Square value={squares[7]} onSquareClicked={handleClick} />
        <Square value={squares[8]} onSquareClicked={handleClick} />
      </div>
    </div>
  );
}
