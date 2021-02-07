import React from "react";
import { v4 as uuid } from "uuid";
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
} from "@material-ui/core";
import { Controller, useForm } from "react-hook-form";
import { Color } from "@material-ui/lab";
import { AlertPosition, AlertType } from "../../store/types";
import { useDispatch } from "react-redux";
import { actions } from "../../store/actions";
import { FormWrapper } from "./style";

type Inputs = {
  title: string;
  message: string;
  dismissible: boolean;
  durationAllowed: boolean;
  duration: number;
  position: number;
  alertType: number;
};

const alertTypeConverter = (index: number): Color => {
  switch (index) {
    case 0:
      return "success";
    case 1:
      return "info";
    case 2:
      return "warning";
    case 3:
      return "error";
    case 4:
    default:
      return "success";
  }
};
export const AlertForm = () => {
  const dispatch = useDispatch();
  const positions = Object.keys(AlertPosition).filter(
    (value) => !isNaN(Number(value))
  );
  const alertTypes = Object.keys(AlertType).filter(
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
      alertType: 0,
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
          type: alertTypeConverter(data.alertType),
        })
      );
    }
  };

  return (
    <FormWrapper
      onSubmit={handleSubmit(onSubmit)}
      style={{ background: "#fff" }}
    >
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
        <FormHelperText>Expires or Dismissible must be allowed</FormHelperText>
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
        <FormLabel style={{ marginBottom: "4px", fontSize: "14px" }}>
          Alert Type
        </FormLabel>
        <Controller
          name="alertType"
          control={control}
          render={({ onChange, value }) => (
            <Select
              variant="outlined"
              value={alertTypes[value]}
              onChange={onChange}
            >
              {alertTypes.map((key, index) => (
                <MenuItem key={key} value={index}>
                  {AlertType[key as any]}
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
    </FormWrapper>
  );
};
