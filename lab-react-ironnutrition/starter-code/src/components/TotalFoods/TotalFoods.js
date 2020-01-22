import React, { Component } from 'react';
import './TotalFoods.css';

class TotalFoods extends Component {
  state = {
    countFood: 0,
  }

  addCountFood = () => {
    const { functionAddTotal } = this.props;
    this.state.countFood = 3;
    console.log(functionAddTotal)
    this.setState({
      countFood: this.state.countFood
    })
  }

  
  render() {

    return(
      <div>
        <h1>Today's TotalFoods</h1>
          <ul>
            <li>{ this.state.countFood } Hamburgueres - 800 cal</li>
          </ul>
        <p>Total: 800 Cal</p>
      </div>

    );
  };
};

export default TotalFoods;