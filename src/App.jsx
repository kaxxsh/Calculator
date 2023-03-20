import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [Input, setInput] = useState(null);

  const handleClear = (e) => {
    e.preventDefault();
    setInput("");
  };

  const handleAdd = (e) => {
    // e.preventDefault();
    setInput((prev) => Number(prev) + 100);
  };
  const handleSub = () => {};
  const handleMul = () => {};
  const handleDiv = () => {};

  return (
    <div className="Main-Calculator">
      <div className="Calculator-Container">
        <div className="Input-Container">
          <input
            className="Input"
            type="text"
            value={Input}
            onChange={(e) => setInput(e.target.value)}
          />
        </div>
        {/* <form className="Number-Container" action=""> */}
        <div className="Number-Container">
          <div className="Number-Box">
            <button
              className="Number"
              onClick={() => setInput((prev) => (!prev ? "7" : prev + "7"))}
            >
              7
            </button>
            <button
              className="Number"
              onClick={() => setInput((prev) => (!prev ? "8" : prev + "8"))}
            >
              8
            </button>
            <button
              className="Number"
              onClick={() => setInput((prev) => (!prev ? "9" : prev + "9"))}
            >
              9
            </button>
            <button className="operation" onClick={handleDiv}>
              /
            </button>
          </div>
          <div className="Number-Box">
            <button
              className="Number"
              onClick={() => setInput((prev) => (!prev ? "4" : prev + "4"))}
            >
              4
            </button>
            <button
              className="Number"
              onClick={() => setInput((prev) => (!prev ? "5" : prev + "5"))}
            >
              5
            </button>
            <button
              className="Number"
              onClick={() => setInput((prev) => (!prev ? "6" : prev + "6"))}
            >
              6
            </button>
            <button className="operation" onClick={handleMul}>
              *
            </button>
          </div>
          <div className="Number-Box">
            <button
              className="Number"
              onClick={() => setInput((prev) => (!prev ? "1" : prev + "1"))}
            >
              1
            </button>
            <button
              className="Number"
              onClick={() => setInput((prev) => (!prev ? "2" : prev + "2"))}
            >
              2
            </button>
            <button
              className="Number"
              onClick={() => setInput((prev) => (!prev ? "3" : prev + "3"))}
            >
              3
            </button>
            <button className="operation" onClick={handleSub}>
              -
            </button>
          </div>
          <div className="Number-Box">
            <button
              className="Number"
              onClick={() => setInput((prev) => (!prev ? "0." : prev + "."))}
            >
              .
            </button>
            <button
              className="Number"
              onClick={() => setInput((prev) => (!prev ? "0" : prev + "0"))}
            >
              0
            </button>
            <button
              className="Number"
              onClick={() => setInput((prev) => (!prev ? "7" : prev + "7"))}
            >
              =
            </button>
            <button className="operation" onClick={handleAdd}>
              +
            </button>
          </div>
        </div>
        {/* </form> */}
      </div>
      <button onClick={handleClear}>Clear</button>
    </div>
  );
}

export default App;
