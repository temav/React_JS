import React, { Component } from 'react';
import { Link, Switch, Route } from 'react-router-dom'; 
import Login from '../Login';
import PrivateRoute from '../PrivateRoute' 
import UserPage from '../UserPage'

class AppRouter extends Component {
    render () {
        return (
        <div>AppRouter
            <Link to='/user/me'><h3>Me</h3></Link>
            <Link to='/login'><h3>Log In</h3></Link>
            <Switch>
                <Route path='/login' component={Login}/>
                <PrivateRoute path='/user/me' component={<UserPage/>}/>
            </Switch>
        </div>);
    }
}

export default AppRouter;