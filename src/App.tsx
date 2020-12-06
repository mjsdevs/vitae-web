import React from "react";
import { ThemeProvider } from "styled-components";

import GlobalStyle from "./assets/styles/global";
import theme from "./assets/styles";
import { Login } from "./views";

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Login />
      </ThemeProvider>
    </div>
  );
}

export default App;
