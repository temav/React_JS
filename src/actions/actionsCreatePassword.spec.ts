import { ActionsToken, ActionsPassword } from "./createPassword";
describe("Test ActionTypes", () => {
  it("ActionsToken should have actions for req, successRes and failureRes ", () => {
    const sendReq = ActionsToken.sendRequestToServer("token");
    expect(sendReq).toEqual({
      type: "SEND_TOKEN_REQUEST_TO_SERVER",
      payload: "token",
    });
    const successRes = ActionsToken.sendResponseSuccess("response");
    expect(successRes).toEqual({
      type: "SEND_TOKEN_RESPONSE_SUCCESS",
      payload: "response",
    });
    const failureRes = ActionsToken.sendResponseFailure("response");
    expect(failureRes).toEqual({
      type: "SEND_TOKEN_RESPONSE_FAILURE",
      payload: "response",
    });
  });
  it("ActionsPassword should have actions for req, successRes and failureRes ", () => {
    const sendReq = ActionsPassword.sendRequestToServer("password");
    expect(sendReq).toEqual({
      type: "SEND_PASSWORD_REQUEST_TO_SERVER",
      payload: "password",
    });
    const successRes = ActionsPassword.sendResponseSuccess("response");
    expect(successRes).toEqual({
      type: "SEND_PASSWORD_RESPONSE_SUCCESS",
      payload: "response",
    });
    const failureRes = ActionsPassword.sendResponseFailure("response");
    expect(failureRes).toEqual({
      type: "SEND_PASSWORD_RESPONSE_FAILURE",
      payload: "response",
    });
  });
});
