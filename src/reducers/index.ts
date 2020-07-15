import emailValidationReducer from "./emailValidation";
import { checkTokenReducer, createPasswordReducer } from "./createPassword";
import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

export const rootReducerEmail = combineReducers({
  emailValidationReducer,
  form: formReducer,
});

export const rootReducerPassword = combineReducers({
  checkTokenReducer,
  createPasswordReducer,
  form: formReducer,
});
