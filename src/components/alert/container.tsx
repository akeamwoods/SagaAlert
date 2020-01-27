import React from "react";
import { useDispatch } from "react-redux";
import { useTypedSelector } from "../../store";
import { Notification } from ".";
import { actions } from "../../store/actions";
import { useTransition } from "react-spring";
import { AlertBoxLeft, AlertBoxRight } from "./style";

export const NotificationContainer = () => {
  const dispatch = useDispatch();
  const alerts = useTypedSelector(state => state.alerts);
  const transition = useTransition(alerts, item => item.id, {
    unique: true,
    trail: 400 / alerts.length,
    from: { opacity: 0, transform: "scale(0.7)" },
    enter: { opacity: 1, transform: "scale(1)" },
    leave: { opacity: 0, transform: "scale(0.7)" }
  });

  return (
    <>
      <AlertBoxLeft>
        {transition
          .filter(e => e.item.position === 1)
          .map(({ item, props, key }) => (
            <Notification
              style={props}
              key={key}
              title={item.title}
              message={item.message}
              clickable
              onClick={() =>
                dispatch(actions.alertCancelButtonClicked(item.id))
              }
            />
          ))}
      </AlertBoxLeft>
      <AlertBoxRight>
        {transition
          .filter(e => e.item.position === 0)
          .map(({ item, props, key }) => (
            <Notification
              style={props}
              key={key}
              title={item.title}
              message={item.message}
              clickable
              onClick={() =>
                dispatch(actions.alertCancelButtonClicked(item.id))
              }
            />
          ))}
      </AlertBoxRight>
    </>
  );
};
