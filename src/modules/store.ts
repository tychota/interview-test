import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();
// mount it on the Store
export const store = createStore(() => {}, applyMiddleware(sagaMiddleware));

// then run the saga
sagaMiddleware.run(function*() {});
