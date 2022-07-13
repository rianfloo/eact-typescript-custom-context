import { StrictMode } from "react";
import * as ReactDOMClient from "react-dom/client";

import App from "./App";

import { CounterProvider } from "../src/components/counter/CounterContext";

const rootElement = document.getElementById("root");
const root = ReactDOMClient.createRoot(rootElement);

root.render(
  <StrictMode>
    <CounterProvider>
      <App />
    </CounterProvider>
  </StrictMode>
);
