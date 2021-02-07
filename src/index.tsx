import React from "react";
import "./style.css";
import { render } from "react-dom";
import { Provider, useDispatch } from "react-redux";
import { store } from "./store";
import { AlertPosition } from "./store/index";
import { actions } from "./store/actions";
import { v4 as uuid } from "uuid";
import { Form } from "./style";
import { NotificationContainer } from "./components/NotificationContainer";
import {
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormLabel,
  MenuItem,
  Select,
  TextField,
  FormHelperText,
  Box,
  Typography,
} from "@material-ui/core";
import { Controller, useForm } from "react-hook-form";
import NotificationImportantIcon from "@material-ui/icons/NotificationImportant";

type Inputs = {
  title: string;
  message: string;
  dismissible: boolean;
  durationAllowed: boolean;
  duration: number;
  position: number;
};

function App() {
  const dispatch = useDispatch();
  const positions = Object.keys(AlertPosition).filter(
    (value) => !isNaN(Number(value))
  );
  const { control, handleSubmit, watch } = useForm<Inputs>({
    defaultValues: {
      title: "Welcome!",
      message: "Thanks for checking out my project.",
      dismissible: true,
      durationAllowed: false,
      duration: 5000,
      position: 0,
    },
  });
  const onSubmit = (data: Inputs) => {
    if (data.durationAllowed || data.dismissible) {
      dispatch(
        actions.alertCreated({
          id: uuid(),
          title: data.title,
          message: data.message,
          duration: data.durationAllowed ? data.duration : undefined,
          dismissible: data.dismissible,
          position: data.position,
        })
      );
    }
  };

  return (
    <div className="App">
      <Box
        display="flex"
        // justifyContent="center"
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
            This project highlights how easy it is to create a notification
            system using Redux Saga.
          </Typography>
        </Box>
        <Form onSubmit={handleSubmit(onSubmit)} style={{ background: "#fff" }}>
          <FormControl margin="normal">
            <FormLabel style={{ marginBottom: "4px", fontSize: "14px" }}>
              Title
            </FormLabel>
            <Controller
              name="title"
              control={control}
              defaultValue=""
              render={({ onChange, value }) => (
                <TextField
                  placeholder="Placeholder"
                  fullWidth
                  onChange={onChange}
                  value={value}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              )}
            />
          </FormControl>
          <FormControl margin="normal">
            <FormLabel style={{ marginBottom: "4px", fontSize: "14px" }}>
              Message
            </FormLabel>
            <Controller
              name="message"
              control={control}
              defaultValue=""
              render={({ onChange, value }) => (
                <TextField
                  placeholder="Placeholder"
                  fullWidth
                  onChange={onChange}
                  value={value}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              )}
            />
          </FormControl>
          <FormControl
            margin="normal"
            style={{
              display: "flex",
              justifyContent: "space-between",
              flexDirection: "row",
            }}
          >
            <FormControlLabel
              control={
                <Controller
                  name="durationAllowed"
                  control={control}
                  render={(props) => (
                    <Checkbox
                      {...props}
                      color="primary"
                      checked={props.value}
                      onChange={(e) => props.onChange(e.target.checked)}
                    />
                  )}
                />
              }
              label="Duration?"
            />
            <FormControlLabel
              control={
                <Controller
                  name="dismissible"
                  control={control}
                  render={(props) => (
                    <Checkbox
                      {...props}
                      color="secondary"
                      checked={props.value}
                      onChange={(e) => props.onChange(e.target.checked)}
                    />
                  )}
                />
              }
              label="Dismissible?"
            />
          </FormControl>
          {!watch("durationAllowed") && !watch("dismissible") && (
            <FormHelperText>
              Expires or Dismissible must be allowed
            </FormHelperText>
          )}
          <FormControl margin="normal">
            <FormLabel style={{ marginBottom: "4px", fontSize: "14px" }}>
              Duration
            </FormLabel>
            <Controller
              name="duration"
              control={control}
              defaultValue=""
              render={({ onChange, value }) => (
                <TextField
                  placeholder="Placeholder"
                  fullWidth
                  type="number"
                  onChange={onChange}
                  disabled={!watch("duration")}
                  value={value}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              )}
            />
          </FormControl>
          <FormControl margin="normal">
            <FormLabel style={{ marginBottom: "4px", fontSize: "14px" }}>
              Position
            </FormLabel>
            <Controller
              name="position"
              control={control}
              render={({ onChange, value }) => (
                <Select
                  variant="outlined"
                  value={positions[value]}
                  onChange={onChange}
                >
                  {positions.map((key, index) => (
                    <MenuItem key={key} value={index}>
                      {AlertPosition[key as any]}
                    </MenuItem>
                  ))}
                </Select>
              )}
            />
          </FormControl>
          <FormControl margin="normal">
            <Button
              fullWidth
              color="primary"
              variant="contained"
              type="submit"
              disabled={!watch("duration") && !watch("dismissible")}
            >
              Create
            </Button>
          </FormControl>
        </Form>
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
