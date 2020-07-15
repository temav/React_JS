import { createStore, compose, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { rootReducerEmail } from ".";
import { rootReducerPassword } from ".";

import { emailRootSaga, passwordRootSaga } from "../sagas";
const sagaMiddleware = createSagaMiddleware();

const composeEnhancer =
  (process.env.NODE_ENV !== "production" &&
    window["__REDUX_DEVTOOLS_EXTENSION_COMPOSE__"]) ||
  compose;
export function configureStoreEmail() {
  const store = createStore(
    rootReducerEmail,
    {},
    composeEnhancer(applyMiddleware(sagaMiddleware))
  );
  sagaMiddleware.run(emailRootSaga);
  return store;
}
export function configureStorePassword() {
  const store = createStore(
    rootReducerPassword,
    {},
    composeEnhancer(applyMiddleware(sagaMiddleware))
  );
  sagaMiddleware.run(passwordRootSaga);
  return store;
}
