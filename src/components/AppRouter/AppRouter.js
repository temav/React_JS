import React, {Component} from 'react';
import Search from '../Search';
// import {connect} from 'react-redux';
import {Route, Switch, withRouter} from 'react-router-dom';
import ShowPage from '../ShowPage';

class AppRouter extends Component {
    render() {
        return (
        <div className='App'>
            {/* <Search/> */}
            {/* <Route exact path="/" component={Search} /> */}
            <Switch>
            <Route exact path="/" component={Search} />
            <Route path='/show/:id' component={ShowPage} />
            </Switch>
        </div>);
    }
}

export default withRouter(AppRouter);