import React from "react";
import { useDispatch } from "react-redux";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import { Alert, AlertTitle } from "@material-ui/lab";
import { AlertPosition, useTypedSelector } from "../../store";
import { actions } from "../../store/actions";
import { AlertBoxLeft, AlertBoxRight, AlertWrapper } from "./style";
import { useTransition } from "react-spring";

export const NotificationContainer = () => {
  const dispatch = useDispatch();
  const alerts = useTypedSelector((state) => state.alerts);
  const transition = useTransition(alerts, (item) => item.id, {
    unique: true,
    trail: 400 / alerts.length,
    from: { opacity: 0, transform: "scale(0.7)" },
    enter: { opacity: 1, transform: "scale(1)" },
    leave: { opacity: 0, transform: "scale(0.7)" },
  });

  return (
    <>
      <AlertBoxLeft>
        {transition
          .filter((e) => e.item.position === AlertPosition.Left)
          .map(({ item, props, key }) => (
            <AlertWrapper style={props} key={key}>
              <Alert
                id={item.id}
                variant="filled"
                action={
                  item.dismissible ? (
                    <IconButton
                      color="inherit"
                      size="small"
                      onClick={() =>
                        dispatch(actions.alertCancelButtonClicked(item.id))
                      }
                    >
                      <CloseIcon fontSize="inherit" />
                    </IconButton>
                  ) : null
                }
              >
                <AlertTitle>{item.title}</AlertTitle>
                {item.message}
              </Alert>
            </AlertWrapper>
          ))}
      </AlertBoxLeft>
      <AlertBoxRight>
        {transition
          .filter((e) => e.item.position === AlertPosition.Right)
          .map(({ item, props, key }) => (
            <AlertWrapper style={props} key={key}>
              <Alert
                id={item.id}
                variant="filled"
                action={
                  item.dismissible ? (
                    <IconButton
                      color="inherit"
                      size="small"
                      onClick={() =>
                        dispatch(actions.alertCancelButtonClicked(item.id))
                      }
                    >
                      <CloseIcon fontSize="inherit" />
                    </IconButton>
                  ) : null
                }
              >
                <AlertTitle>{item.title}</AlertTitle>
                {item.message}
              </Alert>
            </AlertWrapper>
          ))}
      </AlertBoxRight>
    </>
  );
};
