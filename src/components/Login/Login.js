import React, { Component } from 'react';
import { AuthHOC } from 'components/AuthorizeProvider';
import { Redirect } from 'react-router-dom';

class Login extends Component {
  state = {
    email: '',
    password: '',
    error: false
  };
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  // handleLog = () => {
  //   const {authorizeUser} = this.props;
  //   authorizeUser(...this.state);
  // };

  render() {
    const { isAuthorized,  authorizeUser} = this.props;
    const data = this.state;
    return isAuthorized ? <Redirect to="/" /> : 
    <div>
      <input name="email" onChange={this.handleChange}/>
      <input name="password" onChange={this.handleChange}/>
      <button onClick={()=>{ console.log(authorizeUser(data.email, data.password));
        this.setState({error: !authorizeUser(data.email, data.password)});
      }
      }>Log in</button>
      { this.state.error === false ? undefined : <p>error</p>}
    </div>;
  }
}

export default AuthHOC(Login);
