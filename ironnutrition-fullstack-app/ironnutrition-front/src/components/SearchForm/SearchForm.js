import React, { Component } from 'react';

class SearchForm extends Component {
  state = {
    name: '',
  }

  handleChange = (e) => {
    const { name, value } = e.target;

    this.setState({ [name]: value }, () => {
      const { name } = this.state;
      const { search } = this.props;

      search(name);
    });
  }

  render() {
    
    return(
      <input type="text" name="name" placeholder="Filter by Food Name" onChange={(e) => this.handleChange(e)} />
    )
  }
}

export default SearchForm;
