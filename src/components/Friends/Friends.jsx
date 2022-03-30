import React, { useEffect, useState } from 'react';
import Friend from '../Friend/Friend';

const Friends = () => {
  const [friends, setFriends] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users/')
      .then(res => res.json())
      .then(data => setFriends(data));
  }, []);
  return (
    <div>
      <h1>Hello Friends.</h1>
      {friends.map(friends => (
        <Friend key={friends.id}></Friend>
      ))}
    </div>
  );
};

export default Friends;
