import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import {getIsUserAuthorized} from '../../ducks/login';

class PrivateRouter extends Component {
    render () {
        const { isAuthorized } = this.props; 
        return (isAuthorized ? <div>PrivatePage</div> : <Redirect to='/login'/>);
    }
}

const mapPropsToState = state => ({
    isAuthorized: getIsUserAuthorized(state),
})

export default connect(mapPropsToState, )(PrivateRouter);