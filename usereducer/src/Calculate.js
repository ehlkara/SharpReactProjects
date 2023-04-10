import { useContext } from "react";
import { NumberContext } from "./App";

function Calculate() {
  const numberContext = useContext(NumberContext);

  return (
    <>
      <div>Number = {numberContext.count}</div>
      <button onClick={() => numberContext.dispatch("increment")}>increase</button>
      <button onClick={() => numberContext.dispatch("decrement")}>descrease</button>
      <button onClick={() => numberContext.dispatch("reset")}>Reset</button>
    </>
  );
}

export default Calculate;
