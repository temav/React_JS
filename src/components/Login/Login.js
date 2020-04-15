import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loginRequest } from '../../actions/auth';
import { getIsUserAuthorized } from 'ducks/auth';
// import { getUserIsLoading } from '../../ducks/user';
import { Redirect } from 'react-router-dom';


class Login extends Component {
    state = {
        token: '',
    }
    handleOnChange = (event) => {
        this.setState({[event.target.name]: event.target.value})
    };
    handleLogin = () => {
        this.props.loginRequest(this.state.token);
        // console.log('Handle Login ', this.props.loginRequest(this.state.token));
    };
    render() {
        const { isAuthorized } = this.props;
    if(isAuthorized) return (<Redirect to='user/me'/>);
    return <div><h2>Login</h2>
        <input onChange={this.handleOnChange} name='token' placeholder='Access token'/>
        {/* <input onChange={this.handleOnChange} name='password' placeholder='password'/> */}
        <button onClick={this.handleLogin}>LOGIN</button>
    </div>
    }
}

const mapPropsToState = (state) => ({
    isAuthorized: getIsUserAuthorized(state)
})
// export default Login;
export default connect(mapPropsToState, {loginRequest})(Login);