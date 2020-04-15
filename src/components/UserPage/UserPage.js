import React, {Component} from 'react';
import { connect } from 'react-redux';

import { fetchUserRequest } from '../../actions/user';
import { logout } from '../../actions/auth';
import { getUserData, getUserIsLoading, getUserError } from '../../ducks/user';

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
        const { isLoading, error, user_data, logout } = this.props;
        const { login } = user_data;
        const { path } = this.props.match;
        if(isLoading) return <p>Loading...</p>
        const { name, avatar_url } = user_data;
        if(error) return <div><h2>Ошибка</h2>{JSON.stringify(error.response.data)}</div>;
        return <div className='user_page'>
            <div className="user_owner">
            {path==='/user/me' && <button onClick={logout}>Log out</button>}
            <h2>Login: {login}</h2>
            <h3>Name: {name}</h3>
            <img src={avatar_url} alt={'avatar'}/>
            {console.log('login to followers: ', login)}
            </div>
            {!isLoading && user_data.login && <Followers login={ login }/> } 
            {console.log('User data', user_data)}
        </div>;
    }
}

const mapPropsToState = (state) => ({
    user_data: getUserData(state),
    isLoading: getUserIsLoading(state),
    error: getUserError(state),    
})

export default connect(mapPropsToState, {fetchUserRequest, logout})(UserPage);