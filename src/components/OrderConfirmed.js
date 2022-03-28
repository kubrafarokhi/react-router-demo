import React from 'react';
import { useNavigate } from 'react-router-dom';

const OrderConfirmed = () => {
    const navigate = useNavigate(); 
  return (
    <div>
        OrderConfirmed
        <button onClick={()=> navigate(-1)}>Go back</button>
    </div>
  )
}

export default OrderConfirmed