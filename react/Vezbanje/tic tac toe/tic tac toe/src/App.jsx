import { useState } from "react";
import "./App.css";
function Square() {
  const [value, setValue] = useState(null);
  function handleClick() {
    setValue("X");
  }
  return (
    <button onClick={handleClick} className="square">
      {value}
    </button>
  );
}
export default function Board() {
  return (
    <div className="board">
      <div className="row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="row">
        <Square />
        <Square />
        <Square />
      </div>
    </div>
  );
}
