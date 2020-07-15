import * as React from "react";
import { Fragment } from "react";
import { connect } from "react-redux";
import { SubmissionError } from "redux-form";

import CreatePassword from "../CreatePassword/CreatePassword";
import { Message } from "../Message/Message";
import { getErrorList } from "./getErrorList";
import {
  FormHeader,
  Title,
  LoadAnimation,
} from "../StyledComponents/StyledComponents";
import { PortalLink } from "./StyledComponents";
import {
  ActionsToken,
  ActionsPassword,
  requestTokenAction,
  requestPasswordAction,
} from "../../actions/createPassword";

import {
  getTokenIsFetching,
  getTokenResponseFromServer,
  getPasswordIsFetching,
  getPasswordResponseFromServer,
} from "../../reducers/createPassword";

const crypto = require("crypto");

export interface IStateProps {
  isTokenFetching: string;
  isPasswordFetching: string;
  sendTokenRequestToServer: (token: string) => requestTokenAction;
  sendPasswordRequestToServer: (token: string) => requestPasswordAction;
  serverTokenResponse: string;
  serverPasswordResponse: string;
}

type passwordValues = {
  password: string;
};

export class PasswordWrapper extends React.Component<IStateProps> {
  componentDidMount = () => {
    const { sendTokenRequestToServer } = this.props;
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get("token");
    sendTokenRequestToServer(token);
  };
  status = {
    info: "none",
    success: "Your password is changed",
    failure: "Token is not valid, try again",
  };
  handleSubmit = (values: passwordValues) =>
    new Promise((resolve) => {
      const { serverTokenResponse } = this.props;
      const { password } = values;

      const errorList = getErrorList(password, serverTokenResponse, 3);
      if (errorList.length) {
        throw new SubmissionError({ password: JSON.stringify(errorList) });
      }

      resolve();
    }).then(() => {
      const { password } = values;
      const urlParams = new URLSearchParams(window.location.search);
      const token = urlParams.get("token");
      const { sendPasswordRequestToServer } = this.props;
      // const salt = bcrypt.genSaltSync(10);
      // const hash = bcrypt.hashSync(password, salt);
      const hash = crypto.createHash("sha256").update(password).digest("hex");
      sendPasswordRequestToServer(
        JSON.stringify({ password: hash, token: token })
      );
      // console.log("hsk check", bcrypt.compareSync(password, hash));
    });
  render() {
    const {
      props: {
        serverTokenResponse,
        serverPasswordResponse,
        isTokenFetching,
        isPasswordFetching,
      },
      handleSubmit,
    } = this;
    const message = this.status[serverPasswordResponse];
    if (isTokenFetching || isPasswordFetching || serverTokenResponse === null) {
      return <LoadAnimation />;
    } else {
      return (
        <Fragment>
          <FormHeader>Bellerage</FormHeader>
          {serverPasswordResponse === null && (
            <Title>
              Create new password <div>{serverTokenResponse}</div>
            </Title>
          )}
          <Message status={serverPasswordResponse} message={message} />
          {/* {serverPasswordResponse === "success" && (
            <PortalLink href="https://online.bellerage.com/BellerageOnlineReact/">
              Sign in Bellerage
            </PortalLink>
          )} */}
          {serverPasswordResponse === null && (
            <CreatePassword onSubmit={handleSubmit} />
          )}
        </Fragment>
      );
    }
  }
}

const mapStateToProps = (state) => {
  return {
    isTokenFetching: getTokenIsFetching(state),
    isPasswordFetching: getPasswordIsFetching(state),
    serverTokenResponse: getTokenResponseFromServer(state),
    serverPasswordResponse: getPasswordResponseFromServer(state),
  };
};

const mapDispatchToProps = {
  sendTokenRequestToServer: ActionsToken.sendRequestToServer,
  sendPasswordRequestToServer: ActionsPassword.sendRequestToServer,
};

export default connect(mapStateToProps, mapDispatchToProps)(PasswordWrapper);
