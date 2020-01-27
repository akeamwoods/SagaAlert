import React, { useState, useEffect } from "react";
import "./style.css";
import { render } from "react-dom";
import { Provider, useDispatch } from "react-redux";
import { store } from "./store";
import { AlertPosition } from "./store/index";
import { actions } from "./store/actions";
import { NotificationContainer } from "./components/alert/container";
import uuid from "uuid";
import { Form, FormWrapper } from "./style";

function App() {
  const dispatch = useDispatch();
  const positions = Object.keys(AlertPosition).filter(
    value => !isNaN(Number(value))
  );

  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  const [durationAllowed, setDurationAllowed] = useState(true);
  const [duration, setDuration] = useState(0);
  const [dismissible, setDismissible] = useState(true);
  const [position, setIndex] = useState(0);

  useEffect(() => {
    setTitle("Title");
    setMessage("Message");
    setDurationAllowed(true);
    setDuration(5000);
    setDismissible(true);
    setIndex(0);
  }, []);

  const onSubmit = () => {
    if (durationAllowed || dismissible) {
      dispatch(
        actions.alertCreated({
          id: uuid.v4(),
          title,
          message,
          duration: durationAllowed ? duration : undefined,
          dismissible,
          position
        })
      );
    } else {
      // validation here (need either a set duration or dissmissible);
    }
  };

  return (
    <div className="App">
      <NotificationContainer />
      <FormWrapper>
        <Form>
          <span className="first">
            <label>Title</label>
            <input
              value={title}
              onChange={e => setTitle(e.target.value)}
            ></input>
          </span>
          <span className="second">
            <label>Message</label>
            <input
              value={message}
              onChange={e => setMessage(e.target.value)}
            ></input>
          </span>
          <span className="third">
            <span>
              <label>Expires?</label>
              <input
                checked={durationAllowed}
                onChange={() => setDurationAllowed(!durationAllowed)}
                type="checkbox"
              ></input>
            </span>
            <span>
              <label>Dismissible?</label>
              <input
                checked={dismissible}
                onChange={() => setDismissible(!dismissible)}
                type="checkbox"
              ></input>
            </span>
          </span>
          <span className="fourth">
            <label>Duration</label>
            <input
              disabled={!durationAllowed}
              value={duration}
              onChange={e => setDuration(Number(e.target.value))}
              type="number"
            ></input>
          </span>
          <span className="fifth">
            <label>Alert Type</label>
            {/* <select
              value={alertTypes[typeIndex]}
              onChange={e => setAlertIndex(e.target.selectedIndex)}
            >
              {positions.map(key => (
                <option value={key}>{AlertPosition[key as any]}</option>
              ))}
            </select> */}
          </span>
          <span className="sixth">
            <label>Position</label>
            <select
              value={positions[position]}
              onChange={e => setIndex(e.target.selectedIndex)}
            >
              {positions.map(key => (
                <option value={key}>{AlertPosition[key as any]}</option>
              ))}
            </select>
          </span>
          <label></label>
          <button
            type="button"
            onClick={onSubmit}
            disabled={!durationAllowed && !dismissible}
          >
            Create
          </button>
        </Form>
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
