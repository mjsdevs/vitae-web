import React from "react";

import { LoginForm } from "./components";

function App() {
  return (
    <div className="App">
      <LoginForm handle={(e) => console.log("oi")} />
    </div>
  );
}

export default App;
