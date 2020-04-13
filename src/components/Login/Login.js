import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loginRequest } from '../../actions/auth';


class Login extends Component {
    state = {
        user: '',
        password: '',
    }
    handleOnChange = (event) => {
        this.setState({[event.target.name]: event.target.value})
    };
    handleLogin = () => {
        this.props.loginRequest(this.state);
        // console.log('Handle Login ', this.props.loginRequest(this.state));
    };
    render() {
    return (<div><h2>Login</h2>
        <input onChange={this.handleOnChange} name='user' placeholder='email'/>
        <input onChange={this.handleOnChange} name='password' placeholder='password'/>
        <button onClick={this.handleLogin}>LOGIN</button>
    </div>)
    }
}

// const mapPropsToState = ()
// export default Login;
export default connect(null, {loginRequest})(Login);