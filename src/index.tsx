import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { store } from "./store";
import { NotificationContainer } from "./components/NotificationContainer";
import { Box, Typography } from "@material-ui/core";
import NotificationImportantIcon from "@material-ui/icons/NotificationImportant";
import { AlertForm } from "./components/Form";
import "./style.css";

function App() {
  return (
    <div className="App">
      <Box
        display="flex"
        alignItems="center"
        minHeight="100vh"
        flexDirection="column"
      >
        <NotificationContainer />
        <Box margin="20px">
          <Typography variant="h3" align="center" component="h1" gutterBottom>
            <NotificationImportantIcon fontSize="large" color="primary" />
            SagaAlert
          </Typography>
          <Typography paragraph gutterBottom>
            This project highlights a notification system implemented using
            Redux Saga.
          </Typography>
        </Box>
        <AlertForm />
      </Box>
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
