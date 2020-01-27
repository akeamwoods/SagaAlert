import { put, delay, take, race } from "@redux-saga/core/effects";
import { actions } from "./actions";
function* cancellationSaga(id) {
  while (true) {
    const { payload } = yield take(actions.alertCancelButtonClicked);
    if (id === payload) return;
  }
}

export function* addAlertSaga({ payload }) {
  try {
    yield put(actions.alertDisplayed(payload));
    yield race({
      delay: delay(payload.duration),
      click: cancellationSaga(payload.id)
    });
    yield put(actions.alertCleared(payload.id));
  } catch (error) {
    console.log(error);
  }
}
