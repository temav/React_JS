import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Follower from '../Follower';
import { getFollowersData } from '../../ducks/followers';
import { connect } from 'react-redux';
import { fetchFollowersRequest } from '../../actions/followers';

class Followers extends Component {
    
    componentDidMount = () => {
        const { fetchFollowersRequest, login } = this.props;
        console.log('FOLLOWERS:',login);
        fetchFollowersRequest(login);
    }

    render () {
    const { followers_data } = this.props;
    console.log('followers_data: ', followers_data);
    return (<div className='followers'>
        <h3>Followers</h3>
            {followers_data.map((item,index)=><Link to={`/user/${item.login}`} replace={true} key={index}><Follower {...item}/></Link>)}
        </div>)
    }
}

const mapPropsToState = (state) => ({
    followers_data: getFollowersData(state),
});

export default connect(mapPropsToState, { fetchFollowersRequest })(Followers)