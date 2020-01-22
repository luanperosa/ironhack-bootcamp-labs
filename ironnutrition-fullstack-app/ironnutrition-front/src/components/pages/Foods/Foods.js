import React, { Component } from 'react';
import api from '../../../api/api';
import { FoodCard, AddForm, SearchForm, Cart } from '../../../components';

class Foods extends Component {
  state = {
    foods: [],
    filteredFoods: [],
  }

  async componentDidMount() {
    const { data } = await api({
      url: `${process.env.REACT_APP_API_FOODS}/foods`,
      method: 'GET',
    });

    this.setState({
      foods: data.slice(),
      filteredFoods: data.slice(),
    })
  }

  filterFoods = (name) => {
    const { foods } = this.state;
    const newFoods = foods.filter((food) => {
      return food.name.toLowerCase().includes(name.toLowerCase());
    });

    this.setState({
      filteredFoods: newFoods
    });
  }

  displayFoods = (foods) => {
    console.log(foods)
    return foods.map((food, idx) => {
      return <FoodCard key={idx} name={food.name} calories={food.calories} img={food.image} />
    });
  };

  render() {
    const { filteredFoods } = this.state;

    return (
      <div>
         <AddForm handleSubmit={this.handleSubmit} />
          <SearchForm search={this.filterFoods} />
          <div className="content-container">
            <div className="foods-container">
              {this.displayFoods(filteredFoods)}
            </div>
            <div className="cart-container">
              <Cart />
            </div>
          </div>
      </div>
    );
  }
}

export default Foods;
