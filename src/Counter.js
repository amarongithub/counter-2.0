import React from "react";
import {
  ChevronUp,
  ChevronsUp,
  ChevronDown,
  ChevronsDown,
  RotateCcw,
  Hash
} from "react-feather";

function Counter() {
  const [count, setCount] = React.useState(0);

  function handleIncreaseSlightly() {
    setCount((prevCount) => prevCount + 1);
  }

  function handleIncreaseALot() {
    setCount((prevCount) => prevCount + 10);
  }

  function handleReset() {
    setCount(0);
  }

  function handleRandomValue() {
    const min = 1;
    const max = 100;
    const randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
    setCount(randomNumber);
  }

  function handleDecreaseALot() {
    setCount((prevCount) => prevCount - 10);
  }

  function handleDecreaseSlightly() {
    setCount((prevCount) => prevCount - 1);
  }

  return (
    <div className="wrapper">
      <p>
        <span>Current value:</span>
        <span className="count">{count}</span>
      </p>
      <div className="button-row">
        <button onClick={handleIncreaseSlightly}>
          <ChevronUp />
          <span className="visually-hidden">Increase slightly</span>
        </button>
        <button onClick={handleIncreaseALot}>
          <ChevronsUp />
          <span className="visually-hidden">Increase a lot</span>
        </button>
        <button onClick={handleReset}>
          <RotateCcw />
          <span className="visually-hidden">Reset</span>
        </button>
        <button onClick={handleRandomValue}>
          <Hash />
          <span className="visually-hidden">Set to random value</span>
        </button>
        <button onClick={handleDecreaseALot}>
          <ChevronsDown />
          <span className="visually-hidden">Decrease a lot</span>
        </button>
        <button onClick={handleDecreaseSlightly}>
          <ChevronDown />
          <span className="visually-hidden">Decrease slightly</span>
        </button>
      </div>
    </div>
  );
}

export default Counter;
