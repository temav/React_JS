import * as React from "react";
import { mount, render } from "enzyme";
import * as Enzyme from "enzyme";
import ReactSixteenAdapter from "enzyme-adapter-react-16";
import { Provider } from "react-redux";
import { Route } from "react-router-dom";
Enzyme.configure({ adapter: new ReactSixteenAdapter() });

import PasswordWrapper from "./PasswordWrapper";
import configureStore from "redux-mock-store";
import { ActionsPassword } from "../../actions/createPassword";
import CreatePassword from "../CreatePassword/CreatePassword";

describe("Test App", () => {
  describe("Test view of modal window", () => {
    it("When fetching is true, we see fetching", () => {
      const mockStore = configureStore();
      const initialState = {
        checkTokenReducer: {
          responseFromServer: null,
          isFetching: true,
          isFetched: false,
        },
        createPasswordReducer: {
          responseFromServer: null,
          isFetching: true,
          isFetched: false,
        },
      };
      const match = {
        isExact: null,
        path: null,
        url: null,
        params: { token: null },
      };
      let store = mockStore(initialState);
      const wrapper = mount(
        <Provider store={store}>
          <PasswordWrapper history={null} location={null} match={match} />
          {/*//Либо<BrowserRouter>
        <Route component={PasswordWrapper}/>*/}
        </Provider>
      );
      // expect(wrapper.find("div.fetching")).toHaveLength(1);
      expect(wrapper.find("input")).toHaveLength(0);
    });
    //   it("When fetching is false, we see ResetForm", () => {
    //     const mockStore = configureStore();
    //     const initialState = {
    //       emailValidationReducer: {
    //         responseFromServer: "none",
    //         isFetching: false,
    //         sendRequestToServer: ActionsPassword.sendRequestToServer,
    //       },
    //     };
    //     let store = mockStore(initialState);
    //     const wrapper = mount(
    //       <Provider store={store}>
    //         <PasswordWrapper />
    //       </Provider>
    //     );
    //     expect(wrapper.find("div.fetching")).toHaveLength(0);
    //     expect(wrapper.find("input")).toHaveLength(1);
    //   });
    //   it("When request is success, we see Link-Message", () => {
    //     const mockStore = configureStore();
    //     const initialState = {
    //       emailValidationReducer: {
    //         responseFromServer: "success",
    //         isFetching: false,
    //         isFetched: true,
    //         sendRequestToServer: ActionsPassword.sendRequestToServer,
    //       },
    //     };
    //     let store = mockStore(initialState);
    //     const wrapper = mount(
    //       <Provider store={store}>
    //         <PasswordWrapper />
    //       </Provider>
    //     );
    //     expect(wrapper.find("div.attention-note").text()).toContain("Link"); //.toHaveLength(1);
    //     expect(wrapper.find("input")).toHaveLength(0);
    //   });
    //   it("When request is failure, we see No email found and input", () => {
    //     const mockStore = configureStore();
    //     const initialState = {
    //       createPasswordReducer: {
    //         responseFromServer: "failure",
    //         isFetching: false,
    //         isFetched: true,
    //       },
    //     };
    //     let store = mockStore(initialState);
    //     const wrapper = mount(
    //       <Provider store={store}>
    //         <PasswordWrapper />
    //       </Provider>
    //     );
    //     expect(wrapper.find("div.attention-note").text()).toContain(
    //       "No email found"
    //     );
    //     expect(wrapper.find("input")).toHaveLength(1);
    //   });
    //   it("When email is invalid, we dont submit", () => {
    //     const mockStore = configureStore();
    //     const initialState = {
    //       emailValidationReducer: {
    //         responseFromServer: "none",
    //         isFetching: false,
    //         isFetched: false
    //         sendRequestToServer: Actions.sendRequestToServer,
    //       },
    //     };
    //     let store = mockStore(initialState);

    //     const wrapper = mount(
    //       <Provider store={store}>
    //         <PasswordWrapper />
    //       </Provider>
    //     );
    //     // const wrapper = mount(<App/>);
    //     // console.log("instance", wrapper.instance());
    //     // const Mock = jest.fn<App<IStateProps>>(() => ({
    //     //   send: jest.fn(),
    //     // }));
    //     // const mock = new Mock();
    //     // const app = new App();
    //     // expect()).toBeDefined();
    //   });
  });
});
