import React from 'react';
import './BoxColor.css';

const BxColor = ({ r, g, b }) => {
  const divStyle = {
    backgroundColor: 'rgb(' + r + ',' + g + ',' + b + ' )',
  }

  function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length === 1 ? "0" + hex : hex;
  }

  function rgbToHex(r, g, b) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
  }


  return (
    <div className="boxcolor" style={divStyle}>
      <ul>
        <li>rgb({r},{g},{b})</li>
        <li>{rgbToHex(r, g, b)}</li>
      </ul>
    </div>
  );
};

export default BxColor;