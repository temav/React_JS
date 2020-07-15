import * as React from "react";
import { Fragment } from "react";
import { connect } from "react-redux";
import { SubmissionError } from "redux-form";
import { Message } from "../Message/Message";
import EmailValidation from "../EmailValidation/EmailValidation";
import {
  FormHeader,
  LoadAnimation,
  Title,
} from "../StyledComponents/StyledComponents";

import { Actions } from "../../actions/emailValidation";
import { requestAction } from "../../actions/emailValidation";
import {
  getIsFetching,
  getResponseFromServer,
  getIsError,
} from "../../reducers/emailValidation";

const SUCCESS = "success";
const FAILURE = "failure";
const CONNECTION_ERROR = "connection";

export interface IStateProps {
  isFetching: string;
  sendRequestToServer: (email: string) => requestAction;
  serverResponse: string;
  isError: string;
}
type EmailValues = {
  email: string;
};

const emailRegExp = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/i;

export class EmailWrapper extends React.Component<IStateProps> {
  status = {
    info: "none",
    success: "Check your email to reset password",
    failure: {
      connection: "Sorry, please, try latter",
      email: "No email found, please, try again",
    },
  };
  handleSubmit = (values: EmailValues) =>
    new Promise((resolve) => {
      const { email } = values;
      if (!emailRegExp.test(email)) {
        throw new SubmissionError({
          email: "Incorrect email, please check your adress: somebody@mail.com",
        });
      }
      resolve();
    }).then(() => {
      const { email } = values;
      const { sendRequestToServer } = this.props;
      sendRequestToServer(email);
    });
  render() {
    const {
      props: { serverResponse, isFetching, isError },
      handleSubmit,
    } = this;
    let message;
    if (serverResponse === FAILURE) {
      message = this.status[serverResponse][isError];
    } else {
      message = this.status[serverResponse];
    }
    if (isFetching) {
      return <LoadAnimation />;
    } else {
      return (
        <Fragment>
          <FormHeader>Bellerage</FormHeader>
          <Title>Reset Password</Title>
          <Message status={serverResponse} message={message} />
          {serverResponse !== SUCCESS && isError !== CONNECTION_ERROR && (
            <EmailValidation onSubmit={handleSubmit} />
          )}
        </Fragment>
      );
    }
  }
}

const mapStateToProps = (state) => {
  return {
    serverResponse: getResponseFromServer(state),
    isFetching: getIsFetching(state),
    isError: getIsError(state),
  };
};

export default connect(mapStateToProps, Actions)(EmailWrapper);
