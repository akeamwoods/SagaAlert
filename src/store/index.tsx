import { Actions, actions } from "./actions";
import { Reducer, createStore, applyMiddleware } from "redux";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";
import produce from "immer";
import { getType } from "typesafe-actions";
import { rootSaga } from "./rootSaga";

export enum AlertPosition {
  Right = 0,
  Left = 1,
}
export type Alert = {
  id: string;
  title: string;
  message: string;
  duration: number | undefined;
  dismissible: boolean;
  position: AlertPosition;
};

const initialState = () => ({
  alerts: [] as Alert[],
});

export type State = Readonly<ReturnType<typeof initialState>>;

export const rootReducer: Reducer<State, Actions> = (
  state = initialState(),
  action: Actions
) =>
  produce(state, (draft) => {
    switch (action.type) {
      case getType(actions.alertDisplayed):
        draft.alerts = [...draft.alerts, action.payload];
        break;
      case getType(actions.alertCleared):
        draft.alerts = draft.alerts.filter(
          (alert) => alert.id !== action.payload
        );
        break;
    }
  });

const sagaMiddleware = createSagaMiddleware();
export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);
sagaMiddleware.run(rootSaga);

export const useTypedSelector: TypedUseSelectorHook<State> = useSelector;
