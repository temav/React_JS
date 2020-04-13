import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import {getIsUserAuthorized} from '../../ducks/auth';

class PrivateRouter extends Component {
    render () {
        const { isAuthorized, path, component } = this.props; 
        console.log(this.props);
        return (isAuthorized ? component : <Redirect from={path} to='/login'/>);
    }
}

const mapPropsToState = state => ({
    isAuthorized: getIsUserAuthorized(state),
})

export default connect(mapPropsToState, )(PrivateRouter);