import React from 'react';
import './Title.css'

const Title = ({ htmlType, children }) => {
    switch(htmlType){
      case('H1'): return <h1 className="custom-title">{children}</h1>
      case('H2'): return <h2>{children}</h2>
      case('H3'): return <h3 className="custom-title-h3">{children}</h3>
      case('H4'): return <h4>{children}</h4>
      case('H5'): return <h5>{children}</h5>
      case('H6'): return <h6>{children}</h6>
    }
};

export default Title;
