import React from "react";
import { ThemeProvider } from "styled-components";

import GlobalStyle from "./assets/styles/global";
import theme from "./assets/styles";
import { LoginForm } from "./components";

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <LoginForm
          handle={(e) => {
            e.preventDefault();
            console.log("oi");
          }}
        />
      </ThemeProvider>
    </div>
  );
}

export default App;
