import React, { Component } from 'react';
import { Link, Switch, Route } from 'react-router-dom'; 
import Login from '../Login';

class AppRouter extends Component {
    render () {
        return (
        <div>AppRouter
            <Link to='/user/me'><h3>Me</h3></Link>
            <Link to='/login'><h3>Log In</h3></Link>
            <Switch>
                <Route path='/user/me'/>
                <Route path='/login' component={Login}/>
            </Switch>
        </div>);
    }
}

export default AppRouter;