import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";

import "regenerator-runtime/runtime.js";
import { configureStoreEmail } from "./reducers/store";
import EmailWrapper from "./Components/EmailWrapper/EmailWrapper";
const store = configureStoreEmail();

ReactDOM.render(
  <Provider store={store}>
    <EmailWrapper />
  </Provider>,
  document.getElementById("root")
);
