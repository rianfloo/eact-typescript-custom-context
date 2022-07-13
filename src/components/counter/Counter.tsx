import { useContext } from "react";
import { CounterContext } from "./CounterContext";

const Counter = () => {
  const { state, dispatch } = useContext(CounterContext);
  return (
    <>
      <p>{state.count}</p>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>+</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>-</button>
    </>
  );
};

export default Counter;
