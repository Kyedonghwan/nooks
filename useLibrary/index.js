import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import useInput from "./useInput";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

function App() {
    const maxLen = (value) => {
      return value.length < 10;
    };
    const name = useInput("Mr", maxLen);
  
    return (
      <div className="App">
        <input placeholder="Name" onChange={name.onChange} />
        <h1>{name.value}</h1>
      </div>
    );
}

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
