import React from 'react';
import { Title } from '../../components';

const Cart = ({ foodList, totalCalories = 0 }) => {
  return (
    <div>
      <Title htmlType='H3'>Today's foods</Title>

      <ul>
        {foodList}
      </ul>

      <p>{`Total: ${totalCalories} cal`}</p>
    </div>
  );
}

export default Cart;
