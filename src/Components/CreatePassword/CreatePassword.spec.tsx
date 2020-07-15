import * as React from "react";

import { mount, render } from "enzyme";

import * as Enzyme from "enzyme";
import ReactSixteenAdapter from "enzyme-adapter-react-16";
import { Provider } from "react-redux";
Enzyme.configure({ adapter: new ReactSixteenAdapter() });

import EmailWrapper from "./EmailWrapper";
import configureStore from "redux-mock-store";
import emailReducer from "../../reducers/emailValidation";
import { createStore, compose, applyMiddleware } from "redux";
import { Actions } from "../../actions/emailValidation";
// import { App, IStateProps } from './App';

describe("Test App", () => {
  describe("Test view of modal window", () => {
    it("When fetching is true, we see fetching", () => {
      const mockStore = configureStore();
      const initialState = {
        emailValidationReducer: {
          responseFromServer: "none",
          isFetching: true,
          sendRequestToServer: Actions.sendRequestToServer,
        },
      };
      let store = mockStore(initialState);
      const wrapper = mount(
        <Provider store={store}>
          <EmailWrapper />
        </Provider>
      );
      expect(wrapper.find("div.fetching")).toHaveLength(1);
      expect(wrapper.find("input")).toHaveLength(0);
    });
    it("When fetching is false, we see ResetForm", () => {
      const mockStore = configureStore();
      const initialState = {
        emailValidationReducer: {
          responseFromServer: "none",
          isFetching: false,
          sendRequestToServer: Actions.sendRequestToServer,
        },
      };
      let store = mockStore(initialState);
      const wrapper = mount(
        <Provider store={store}>
          <EmailWrapper />
        </Provider>
      );
      expect(wrapper.find("div.fetching")).toHaveLength(0);
      expect(wrapper.find("input")).toHaveLength(1);
    });
    it("When request is success, we see Link-Message", () => {
      const mockStore = configureStore();
      const initialState = {
        emailValidationReducer: {
          responseFromServer: "success",
          isFetching: false,
          sendRequestToServer: Actions.sendRequestToServer,
        },
      };
      let store = mockStore(initialState);
      const wrapper = mount(
        <Provider store={store}>
          <EmailWrapper />
        </Provider>
      );
      expect(wrapper.find("div.attention-note").text()).toContain("Link"); //.toHaveLength(1);
      expect(wrapper.find("input")).toHaveLength(0);
    });
    it("When request is failure, we see No email found and input", () => {
      const mockStore = configureStore();
      const initialState = {
        emailValidationReducer: {
          responseFromServer: "failure",
          isFetching: false,
          sendRequestToServer: Actions.sendRequestToServer,
        },
      };
      let store = mockStore(initialState);
      const wrapper = mount(
        <Provider store={store}>
          <EmailWrapper />
        </Provider>
      );
      expect(wrapper.find("div.attention-note").text()).toContain(
        "No email found"
      ); //.toHaveLength(1);
      expect(wrapper.find("input")).toHaveLength(1);
    });
    it("When email is invalid, we dont submit", () => {
      // const myMock = jest.fn();

      // jest.mock(wrapper.props().onSubmit);
      const mockStore = configureStore();
      const initialState = {
        emailValidationReducer: {
          responseFromServer: "none",
          isFetching: false,
          sendRequestToServer: Actions.sendRequestToServer,
        },
      };
      // const initialState = {}//isFetching:false, sendRequestToServer:false, serverResponse:'none'};
      let store = mockStore(initialState);

      const wrapper = mount(
        <Provider store={store}>
          <EmailWrapper />
        </Provider>
      );
    });
  });
});
