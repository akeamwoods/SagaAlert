import React from "react";
import "./style.css";
import { render } from "react-dom";
import { Provider, useDispatch } from "react-redux";
import { store, useTypedSelector } from "./store";
import { AlertPosition } from "./store/index";
import { actions } from "./store/actions";
import { NotificationContainer } from "./components/alert/container";
import uuid from "uuid";
import { Form, FormWrapper } from "./style";

function App() {
  const dispatch = useDispatch();
  const alertInfo = useTypedSelector(state => {
    return {
      id: uuid.v4(),
      title: state.title,
      message: state.message,
      duration: state.duration,
      dismissible: state.dismissible,
      position: state.position
    };
  });
  return (
    <div className="App">
      <NotificationContainer />
      <FormWrapper>
        <Form>
          <label>Title</label>
          <input></input>
          <label>Message</label>
          <input></input>
          <label>Duration?</label>
          <input type="checkbox"></input>
          <label>Duration Length</label>
          <input type="number"></input>
          <label>Dismissible?</label>
          <input type="checkbox"></input>
          <label>Position</label>
          <select>
            {Object.keys(AlertPosition)
              .filter(value => !isNaN(Number(value)))
              .map(key => (
                <option value={key}>{AlertPosition[key as any]}</option>
              ))}
          </select>
          <label></label>
        </Form>
        <button onClick={() => dispatch(actions.alertCreated(alertInfo))}>
          Create
        </button>
      </FormWrapper>
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
