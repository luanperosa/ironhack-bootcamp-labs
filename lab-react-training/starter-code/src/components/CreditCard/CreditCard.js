import React from 'react';
import './CreditCard.css';

const CreditCard = ({ type, number, expirationMonth, expirationYear, bank, owner, bgColor, color }) => {
  const divStyle = {
    backgroundColor: bgColor,
    color: color
  };
  
  return (
    <div className="credit-card">
      <div className="card" style={ divStyle }>
        <ul>
          <li>{ type }</li>
          <li>{ number }</li>
          <li>Expires { expirationMonth }/{ expirationYear }    { bank }</li>
          <li>{ owner }</li>
        </ul>
      </div>
    </div>
  );
};

export default CreditCard;