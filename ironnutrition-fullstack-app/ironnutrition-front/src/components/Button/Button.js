import React from 'react';

const Button = ({ type, onclick, children }) => {
  return (
    <button type={type} onClick={onclick}>{children}</button>
  );
};

export default Button;
