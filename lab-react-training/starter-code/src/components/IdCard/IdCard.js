import React from 'react';
import './IdCard.css'

const IdCard = ({ lastName, firstName, gender, height, birth, picture }) => {
  return (
    <div className="cards">
      <ul>
        <li><img src={picture} alt={ firstName } /></li>
        <li><strong>First Name: </strong>{ firstName }</li>
        <li><strong>Last Name: </strong>{ lastName }</li>
        <li><strong>Gender: </strong>{ gender }</li>
        <li><strong>Height: </strong>{ height }</li>
        <li><strong>Birth: </strong>{ birth }</li>
      </ul>
    </div>
  );
};

export default IdCard;


