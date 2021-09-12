import createSagaMiddleware from "@redux-saga/core";
import { applyMiddleware, combineReducers, createStore } from "redux";
import { flightWatcher } from "../saga/flightSaga";
import { flightReducer } from "./flightReducer";

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({ flightReducer });

export const store = createStore(
  flightReducer,
  applyMiddleware(sagaMiddleware),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

sagaMiddleware.run(flightWatcher);
