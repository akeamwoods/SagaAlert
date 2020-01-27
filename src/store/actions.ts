import { ActionType, createAction } from "typesafe-actions";

const actionOne = createAction("action description")<void>();

export const actions = {
  actionOne
};

export type Actions = ActionType<typeof actions>;
