import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { store } from "./store";

function App() {
  return <div className="App"></div>;
}

const rootElement = document.getElementById("root");
render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
