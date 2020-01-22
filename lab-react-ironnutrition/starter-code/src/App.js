import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json';
import FoodBox from './components/FoodBox/FoodBox';
import FormFood from './components/FormFood/FormFood';
import SearchFood from './components/SearchFood/SearchFood';
import TotalFoods from './components/TotalFoods/TotalFoods';

class App extends Component {
  state = {
    foods: foods
  }

  addTotals = (totals) => {
    const { foodValue } = totals
    this.totalisFood(foodValue)
    
  }

  totalisFood = (numTotal) => {
    return numTotal;
  }

  filterFoods = (filter) => {
    const { foods } = this.state;
    const { search } = filter;
    const filteredFoods = foods.filter((food) => {
      return food.name.toLowerCase().includes(search)
    });
    this.setState({
      foods: filteredFoods,
    })
  }

  handleAddFood = (food) => {
    this.state.foods.push(food)
    this.setState({
      foods: this.state.foods
    })
  }

  render() {
    return (
      <div className="App">
        <h1>IronFods</h1>
          <FormFood handleAddFood={this.handleAddFood} />
          <SearchFood filterFunction={this.filterFoods}/>
        <div className="page">
          <TotalFoods functionAddTotal={this.totalisFood}/>
          <FoodBox foodsJSON={ this.state.foods } functionTotal={this.addTotals}/>
        </div>
      </div>
    );
  }
}

export default App;
