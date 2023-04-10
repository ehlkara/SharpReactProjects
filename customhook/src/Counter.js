import React from "react";
import useCounter from "./useCounter";

export default function Counter() {
  const [num, increment, decrement, reset] = useCounter();

  return (
    <div>
      <h2>Number = {num}</h2>
      <button onClick={increment}>Increase</button>
      <button onClick={decrement}>Decrease</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}
