// import {
//   sendRequestToServer,
//   sendResponseSuccess,
//   sendResponseFailure,
// } from '../actions/emailValidation';
import { Actions } from "../actions/emailValidation";

import emailReducer from "./emailValidation";

describe("Test reducers", () => {
  let store;
  beforeEach(() => {
    store = emailReducer(undefined, {
      type: "TEST_ACTION",
      payload: "test",
      meta: "test",
    });
  });
  describe("Test initial state", () => {
    it("Initial store.isFetching is false", () => {
      expect(store).toEqual({ ...store, isFetching: false });
    });
    it("Initial store.isFetched is false", () => {
      expect(store).toEqual({ ...store, isFetched: false });
    });
    it("Initial store.responseFromServer is none", () => {
      expect(store).toEqual({ ...store, responseFromServer: "none" });
    });
  });
  describe("Test state depends on actions", () => {
    it("Action sendRequestToServer: isFetching is true", () => {
      const store2 = emailReducer(store, Actions.sendRequestToServer(""));
      expect(store2.isFetching).toEqual(true);
    });
    it("Action sendResponseSuccess: isFetched is true, responseFromServer is success", () => {
      const store2 = emailReducer(
        store,
        Actions.sendResponseSuccess("success")
      );
      expect(store2).toEqual({
        ...store,
        isFetched: true,
        responseFromServer: "success",
      });
    });
    it("Action sendResponseFailure: isFetched is true, responseFromServer is failure", () => {
      const store2 = emailReducer(
        store,
        Actions.sendResponseFailure("failure", "test")
      );
      expect(store2).toEqual({
        ...store,
        isFetched: true,
        isError: "test",
        responseFromServer: "failure",
      });
    });
  });
});
