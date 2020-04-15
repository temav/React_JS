import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { loginRequest } from '../../actions/auth';
import { getIsUserAuthorized } from 'ducks/auth';

class Login extends Component {
    state = {
        token: '',
    }
    handleOnChange = (event) => {
        this.setState({[event.target.name]: event.target.value})
    };
    handleLogin = () => {
        this.props.loginRequest(this.state.token);
    };
    render() {
        const { isAuthorized } = this.props;
    if(isAuthorized) return (<Redirect to='user/me'/>);
    return <div className='login'><h2>Login</h2>
        <input onChange={this.handleOnChange} name='token' placeholder='Access token'/>
        <button onClick={this.handleLogin}>LOGIN</button>
    </div>
    }
}

const mapPropsToState = (state) => ({
    isAuthorized: getIsUserAuthorized(state)
})

export default connect(mapPropsToState, {loginRequest})(Login);