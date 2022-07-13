import React, { createContext, useReducer } from "react";

const initialState = { count: 0 };

type Action = { type: "INCREMENT" } | { type: "DECREMENT" };

interface CounterProviderProps {
  children: React.ReactNode;
}

type CounterState = typeof initialState;

const reducer = (state: CounterState, action: Action) => {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    case "DECREMENT":
      return { count: state.count - 1 };
    default:
      return state;
  }
};

const CounterContext = createContext<{
  state: CounterState;
  dispatch: React.Dispatch<Action>;
}>({ state: initialState, dispatch: () => {} });

function CounterProvider({ children }: CounterProviderProps) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <CounterContext.Provider value={{ state, dispatch }}>
      {children}
    </CounterContext.Provider>
  );
}

export { CounterContext, CounterProvider };
