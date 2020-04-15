import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'; 
import Login from '../Login';
import PrivateRoute from '../PrivateRoute' 
import UserPage from '../UserPage'

class AppRouter extends Component {
    render () {
        return (
        <div className='app_router'>
            <Switch>
                <Route path='/login' component={Login}/>
                <PrivateRoute exact path='/user/me' component={UserPage}/>
                <Route path='/user/:login' component={UserPage}/>
            </Switch>
        </div>);
    }
}

export default AppRouter;