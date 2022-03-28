import React from 'react';
import { useParams } from 'react-router-dom';

const UserDetails = () => {
  const {userId} = useParams() // url params
  return (
    <div>User : {userId}</div>
  )
}

export default UserDetails