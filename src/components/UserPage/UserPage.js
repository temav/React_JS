import React, {Component} from 'react';
import { connect } from 'react-redux';

import { fetchUserRequest } from '../../actions/user';
import { logout } from '../../actions/auth';
import { getUserData, getUserIsLoading } from '../../ducks/user';

import Followers from '../Followers/Followers';
import './UserPage.css';


class UserPage extends Component {
    componentDidMount() {
        this.props.fetchUserRequest( this.props.match);
    }
    componentDidUpdate = (prevProps) => {
        if (this.props.match !== prevProps.match) {
            this.props.fetchUserRequest( this.props.match);
          }
    };

    render() {
        const { isLoading, user_data, logout } = this.props;
        const { login } = this.props.match.params;
        const { path } = this.props.match;
        if(isLoading) return <p>Loading...</p>
        const { name, avatar_url } = user_data;
        
        return <div>UserPage
            {path==='/user/me' && <button onClick={logout}>Log out</button>}
            <h2>Login: {user_data.login}</h2>
            <h3>Name: {name}</h3>
            <img src={avatar_url}/>
            {console.log('login to followers: ', user_data.login)}
            {!isLoading && user_data.login && <Followers login={ user_data.login }/> } 
            {console.log('User data',user_data)}
        </div>;
    }
}

const mapPropsToState = (state) => ({
    user_data: getUserData(state),
    isLoading: getUserIsLoading(state)    
})
// const mapDispatchToState = ({});

export default connect(mapPropsToState, {fetchUserRequest, logout})(UserPage);