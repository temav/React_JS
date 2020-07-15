import * as React from "react";
import { mount, render } from "enzyme";
import * as Enzyme from "enzyme";
import ReactSixteenAdapter from "enzyme-adapter-react-16";
import { Provider } from "react-redux";
Enzyme.configure({ adapter: new ReactSixteenAdapter() });
import EmailWrapper from "./EmailWrapper";
import configureStore from "redux-mock-store";
import { Actions } from "../../actions/emailValidation";

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
      expect(wrapper.find("div.sc-fzozJi.lmucUz")).toHaveLength(1);
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
      expect(wrapper.find("div.sc-fzozJi.lmucUz")).toHaveLength(0);
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
      expect(wrapper.text()).toContain("Check your email");
      expect(wrapper.find("input")).toHaveLength(0);
    });
    it("When email request is failure, we see No email found and input", () => {
      const mockStore = configureStore();
      const initialState = {
        emailValidationReducer: {
          responseFromServer: "failure",
          isFetching: false,
          isError: "email",
          sendRequestToServer: Actions.sendRequestToServer,
        },
      };
      let store = mockStore(initialState);
      const wrapper = mount(
        <Provider store={store}>
          <EmailWrapper />
        </Provider>
      );
      expect(wrapper.text()).toContain("No email found");
      expect(wrapper.find("input")).toHaveLength(1);
    });
    it("When connection request is failure, we see only Sorry", () => {
      const mockStore = configureStore();
      const initialState = {
        emailValidationReducer: {
          responseFromServer: "failure",
          isFetching: false,
          isError: "connection",
          sendRequestToServer: Actions.sendRequestToServer,
        },
      };
      let store = mockStore(initialState);
      const wrapper = mount(
        <Provider store={store}>
          <EmailWrapper />
        </Provider>
      );
      expect(wrapper.text()).toContain("Sorry");
      expect(wrapper.find("input")).toHaveLength(0);
    });
    // it.only('When connection request is failure, we see only Sorry', () => {
    //   const mockStore = configureStore();
    //   const initialState = {
    //     emailValidationReducer: {
    //       responseFromServer: 'none',
    //       isFetching: false,
    //       sendRequestToServer: Actions.sendRequestToServer,
    //     },
    //   };
    //   let store = mockStore(initialState);
    //   const wrapper = mount(
    //     <Provider store={store}>
    //       <EmailWrapper />
    //     </Provider>
    //   );
    //   const event = { target: { value: 'Test' } };
    //   wrapper.find('input').simulate('change', event);
    //   wrapper.find('form').simulate('submit');
    //   console.log('s', wrapper.text());
    //   const message = wrapper.find('div.sc-AxgMl.bygbgc');
    //   expect(message).toHaveLength(1);
    //   // console.log('p', message.props());
    //   // console.log('p', message.instance());
    // });
  });
});
