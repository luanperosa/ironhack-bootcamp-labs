import React, { Component } from 'react';
import './FoodBox.css';

class FoodBox extends Component {
  state = {
    
    foodValue: 1
  }

  addTotalis = () => {
    console.log('teste')
  }

  addValue = (event) => {
    const { functionTotal } = this.props;
    const { value } = event.target;
    this.state.foodValue = value;
    this.setState({
      foodValue: this.state.foodValue
    }, () => {
      functionTotal(this.state)
    })
  }

  render() {
    const { foodsJSON } = this.props;
    return (
      foodsJSON.map(food => {
        return (
          <div className="box">
       <article className="media">
      <div className="media-left">
        <figure className="image is-64x64">
          <img src={ food.image } />
        </figure>
      </div>
      <div className="media-content">
        <div className="content">
          <p>
            <strong>{ food.name } </strong> <br />
            <small>{ food.calories } cal</small>

          </p>
        </div>
      </div>
      <div className="media-right">
        <div className="field has-addons">
          <div className="control">
            <input
              className="input"
              type="number" 
              value={this.state.foodValue}
              onChange={this.addValue}
            />
          </div>
          <div className="control">
            <button className="button is-info" onClick={this.addTotalis}>
              +
            </button>
          </div>
        </div>
      </div>
    </article>
  </div>
        )
      })
      
    );

  }
};

export default FoodBox;