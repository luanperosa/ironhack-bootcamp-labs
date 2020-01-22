import React from 'react';
import './Random.css';

const Random = ({ min, max }) => {
  const randomNumber = Math.floor(Math.random() * (max - min ) + min);

  return (
    <div className="random">
      <p>Random value betwen {min} and {max} => { randomNumber }</p>
    </div>
  );
};

export default Random;