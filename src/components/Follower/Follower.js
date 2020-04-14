import React from 'react';

const Follower = (props) => {
    const { login, avatar_url } = props;
    return (<div className='follower'>
        <h4>{login}</h4>
        <img src={avatar_url}/>
    </div>);
};

export default Follower;