import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';

import { getFollowersData, getFollowersIsLoading } from '../../ducks/followers';
import { fetchFollowersRequest } from '../../actions/followers';

import Follower from '../Follower';

class Followers extends Component {
    
    componentDidMount = () => {
        const { fetchFollowersRequest, login } = this.props;
        console.log('FOLLOWERS for (login):', login);
        fetchFollowersRequest(login);
    };
    componentDidUpdate = (prevProps) => {
        const { fetchFollowersRequest, login } = this.props;
        if (login !== prevProps.login) {
            fetchFollowersRequest(login);
          }
    };

    render () {
    const { followers_data, isLoading } = this.props;
    console.log('followers_data: ', followers_data);
    if (isLoading && followers_data) return <p>Loading followers...</p>;
    return (<div className='followers'>
        <h3>Followers</h3>
            {followers_data.map((item,index)=><Link to={`/user/${item.login}`} replace={true} key={index}><Follower {...item}/></Link>)}
        </div>)
    }
}

const mapPropsToState = (state) => ({
    followers_data: getFollowersData(state),
    isLoading: getFollowersIsLoading(state),
});

export default connect(mapPropsToState, { fetchFollowersRequest })(Followers)