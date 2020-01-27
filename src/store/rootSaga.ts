import { getType } from "typesafe-actions";
import { all, takeEvery } from "@redux-saga/core/effects";
import { actions } from "./actions";
import { addAlertSaga } from "./saga";

export function* rootSaga() {
  yield all([takeEvery(getType(actions.alertCreated), addAlertSaga)]);
}
