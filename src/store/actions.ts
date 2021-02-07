import { ActionType, createAction } from "typesafe-actions";
import { Alert } from "./types";

const alertCreated = createAction("alert created")<Alert>();
const alertDisplayed = createAction("alert displayed")<Alert>();
const alertCancelButtonClicked = createAction("alert cancel button clicked")<
  string
>();
const alertCleared = createAction("alert cleared")<string>();

export const actions = {
  alertCreated,
  alertDisplayed,
  alertCancelButtonClicked,
  alertCleared
};

export type Actions = ActionType<typeof actions>;
