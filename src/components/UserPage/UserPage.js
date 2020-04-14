import React, {Component} from 'react';
import { connect } from 'react-redux';

import { fetchUserRequest } from '../../actions/user';
import { logout } from '../../actions/auth';
import { getUserData } from '../../ducks/user';

import Followers from '../Followers/Followers';
import './UserPage.css';


class UserPage extends Component {
    componentDidMount() {
        this.props.fetchUserRequest( this.props.match);
    }
    render() {
        const { user_data, logout } = this.props;
        const { login } = this.props.match.params;
        const { path } = this.props.match;
        if(!user_data) return <p>Loading...</p>
        const { name, avatar_url } = user_data;
        console.log(login);
        return <div>UserPage
            {path==='/user/me' && <button onClick={logout}>Log out</button>}
            <h2>Login: {user_data.login}</h2>
            <h3>Name: {name}</h3>
            <img src={avatar_url}/>
        <Followers login={ user_data.login }/> 
            {console.log(user_data)}
        </div>;
    }
}

const mapPropsToState = (state) => ({
    user_data: getUserData(state)    
})
// const mapDispatchToState = ({});

export default connect(mapPropsToState, {fetchUserRequest, logout})(UserPage);