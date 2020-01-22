import React, { Component } from 'react';
import './FormFood.css';
import foods from '../../foods.json';

class FormFood extends Component {
  state = {
    foodsInfo: {
      foodName: '',
      calories: '',
      image: '',
    },
    showForm: false,
  }

  addFood = async () => {
    const { handleAddFood } = this.props;
    const { foodsInfo } = this.state;
    
    await handleAddFood(foodsInfo);

    this.hideForm();
    this.clearForm();
  }

  clearForm = () => {
    this.setState({
      foodsInfo: {
        name: '',
        calories: '',
        image: ''
      }
    })
  }

  handleName = (event) => {
    const { name, value } = event.target;
    this.state.foodsInfo[name] = value
    this.setState({
      foodsInfo: this.state.foodsInfo
    })
  }

  showForm = () => {
    this.setState({
      showForm: true
    })
  }

  hideForm = () => {
    this.setState({
      showForm: false
    })
  }
  
  render() {
    
    return (
    <div>
      <button onClick={ this.showForm }>Add New Food</button> 
      {
        this.state.showForm && 
        (<div>
          <input type="text" name="foodName" value={this.state.foodsInfo.foodName} onChange={ this.handleName } placeholder="Food Name" />
          <input type="text" name="calories" value={this.state.foodsInfo.calories} onChange={ this.handleName } placeholder="Food Calories"/>
          <input type="text" name="image" value={this.state.foodsInfo.image} onChange={ this.handleName } placeholder="Food Image Url"/>
          <button onClick={ this.addFood }>Create Product</button>
          <button onClick={ this.hideForm }>Cancel</button>
        </div>)
    }
    </div>
    
    )
  };
};

export default FormFood;