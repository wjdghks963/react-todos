import React from "react";
import ReactDOM from "react-dom";
import { RecoilRoot } from "recoil";
import { ThemeProvider } from "styled-components";
import App from "./App";
import { darkTheme } from "./theme";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={darkTheme}>
      <RecoilRoot>
        <App />
      </RecoilRoot>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
