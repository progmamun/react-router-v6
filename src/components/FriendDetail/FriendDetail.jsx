import React from 'react';
import { useParams } from 'react-router-dom';

const FriendDetail = () => {
  // const params = useParams();
  const { detail } = useParams();
  return (
    <div>
      <h2>FriendDetail: {detail}</h2>
    </div>
  );
};

export default FriendDetail;
