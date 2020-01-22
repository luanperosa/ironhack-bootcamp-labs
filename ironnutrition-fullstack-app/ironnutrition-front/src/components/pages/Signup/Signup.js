import React, { Component } from 'react';
import api from '../../../api/api';

class Signup extends Component {
  state = {
    username: '',
    password: '',
    email: '',
  }

  handleChange = (e) => {
    const { name, value } = e.target;

    this.setState({ [name]: value });
  };

  handleSubmit = async (e) => {
    e.preventDefault();

    const response = await api({
      url: `${process.env.REACT_APP_API_FOODS}/users/signup`,
      method: 'POST',
      data: this.state,
    });

    if (response.status === 200) {
      this.setState({
        username: '',
        password: '',
        email: '',
      })
      this.props.history.push('/login')
    }
  }

  render() {
    const { username, password, email } = this.state;
    return (
      <form onSubmit={(e) => this.handleSubmit(e)}>
        <div>
          <label>Username</label>
          <input type='text' name='username' placeholder='Username' value={username} onChange={(e) => this.handleChange(e)} />
        </div>
        <div>
          <label>Password</label>
          <input type='password' name='password' placeholder='Password' value={password} onChange={(e) => this.handleChange(e)} />
        </div>
        <div>
          <label>Email</label>
          <input type='text' name='email' placeholder='Email' value={email} onChange={(e) => this.handleChange(e)} />
        </div>
        <div>
          <button type='submit'>Signup!</button>
        </div>
      </form>
    );
  }

};

export default Signup;