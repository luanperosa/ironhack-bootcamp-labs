import React from 'react';
import './IronContats.css';

const IronContats = (props) => {
  const { picture, name, popularity } = props

  return (
    <div className="list-contats">
    <table>
      <tr>
        <th>Picture</th>
        <th>Name</th>
        <th>Popularity</th>
      </tr>
      <tr>
        <th><img src={ picture } /></th>
        <th>{ name }</th>
        <th>{ popularity }</th>
      </tr>
    </table>
    </div>
  );
};

export default IronContats;