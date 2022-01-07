import React from "react";
import { BrowserRouter } from "react-router-dom";
import Router from "./router";

const App = (props) => {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
};

export default App;
