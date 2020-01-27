# SagaAlert

Demo: https://akeamwoods.github.io/SagaAlert/

This project makes use of Redux Saga to easily implement a notification system. 

The two sagas below are pretty much 80% of the logic behind this:

```javascript
function* cancellationSaga(id) {
  while (true) {
    const { payload } = yield take(actions.alertCancelButtonClicked);
    if (id === payload) return;
  }
}

export function* addAlertSaga({ payload }) {
  try {
    yield put(actions.alertDisplayed(payload));
    if (payload.duration) {
      yield race({
        delay: delay(payload.duration),
        click: cancellationSaga(payload.id)
      });
    } else {
      yield race({
        click: cancellationSaga(payload.id)
      });
    }
    yield put(actions.alertCleared(payload.id));
  } catch (error) {
    console.log(error);
  }
}

```
If the user provides a duration in the payload, we simply race the duration vs the cancellationSaga. The cancellation saga only completes if an 'alertCancelButtonClicked' action is dispatched with the payload matching the alerts id (which only occurs if the users clicks the close button on the alert itself). If no duration is set, we simply wait for the cancel button action. 


The addAlertSaga is initalised in the Root Saga with the following code:

```javascript
export function* rootSaga() {
  yield all([takeEvery(getType(actions.alertCreated), addAlertSaga)]);
}
```

This creates a generator function which always listens for the alertCreated action to be dispatched. Then we simply need code in the reducer itself to add our alert to state/remove it. 

