import React from 'react';
import './Greetings.css'

const Greetings = ({ lang, children }) => {
    
    const lan = {
      de: 'Hallo',
      es: 'Hola',
      en: 'Hello',
      fr: 'Bonjour',
    };

  return (
    <div className="greetings">
      <p>{lan[lang]} { children }</p>
    </div>
  );
};

export default Greetings;