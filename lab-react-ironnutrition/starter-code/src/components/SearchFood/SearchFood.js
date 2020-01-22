import React, { Component } from 'react';
import './SearchFood.css';

class SearchFood extends Component {
  state = {
    search: '',
  }

  handleSearch = (event) => {
    const { filterFunction } = this.props;
    const { name, value } = event.target;
    this.state.search = value;
      this.setState({
        search: value,
    }, () => {
      filterFunction(this.state);
    });
  };
  
  render() {
    return(
      <div className='search-food'>
        <h1>IronNutritions</h1>
        <input type="text" name={this.state.name} value={this.state.search} onChange={(event) => this.handleSearch(event)}/>
      </div>
    );
  };
};

export default SearchFood;