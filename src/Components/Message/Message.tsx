import * as React from 'react';
import {
  SuccessMessage,
  FailureMessage,
  InfoMessage,
} from './StyledComponents';

type IState = {
  message: string;
  status: string;
};

export class Message extends React.Component<IState> {
  render() {
    const { message, status } = this.props;
    switch (status) {
      case 'success': {
        return <SuccessMessage>{message}</SuccessMessage>;
      }
      case 'failure': {
        return <FailureMessage>{message}</FailureMessage>;
      }
      case 'info': {
        return <InfoMessage>{message}</InfoMessage>;
      }
      default: {
        return null;
      }
    }
  }
}
