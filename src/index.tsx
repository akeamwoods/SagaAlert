import React from "react";
import { render } from "react-dom";
import { Provider, useDispatch } from "react-redux";
import { store } from "./store";
import { actions } from "./store/actions";
import { NotificationContainer } from "./components/alert/container";

function App() {
  const dispatch = useDispatch();
  return (
    <div className="App">
      <NotificationContainer />
      <button
        onClick={() =>
          dispatch(
            actions.alertCreated({
              id: "1",
              title: "title",
              message: "message",
              duration: 5000
            })
          )
        }
      >
        Create
      </button>
    </div>
  );
}

const rootElement = document.getElementById("root");
render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
