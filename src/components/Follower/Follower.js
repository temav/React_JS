import React from 'react';
import './Follower.css';

const Follower = props => {
  const { login, avatar_url } = props;
  return (
    <div className="follower">
      <h4>{login}</h4>
      <img src={avatar_url} alt={'avatar'} />
    </div>
  );
};

export default Follower;
