import { fork } from "redux-saga/effects";
import emaiLValidationSaga from "./emailValidation";
import {
  sendTokenRequestListener,
  sendPasswordRequestListener,
} from "./createPassword";

export function* emailRootSaga() {
  yield fork(emaiLValidationSaga);
}
export function* passwordRootSaga() {
  yield fork(sendTokenRequestListener);
  yield fork(sendPasswordRequestListener);
}
