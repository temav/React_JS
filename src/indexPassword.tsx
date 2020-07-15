import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "regenerator-runtime/runtime.js";
import { configureStorePassword } from "./reducers/store";
import PasswordWrapper from "./Components/PasswordWrapper/PasswordWrapper";
const store = configureStorePassword();

ReactDOM.render(
  <Provider store={store}>
    <PasswordWrapper />
  </Provider>,
  document.getElementById("root")
);
