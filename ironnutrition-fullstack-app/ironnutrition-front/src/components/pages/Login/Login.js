import React, { Component } from 'react';
import api from '../../../api/api';

class Login extends Component {
  state = {
    username: '',
    password: '',
  }

  handleChange = (e) => {
    const { name, value } = e.target;

    this.setState({ [name]: value });
  };

  handleSubmit = async (e) => {
    e.preventDefault();

    const response = await api({
      url: `${process.env.REACT_APP_API_FOODS}/users/login`,
      method: 'POST',
      data: this.state,
    });

    if (response.status === 200) {
      const token = JSON.stringify(response.data)
      const { authenticateUser, history } = this.props;

      localStorage.setItem('loggedUser', token)
      authenticateUser();
      history.push('/foods');
    }
  }

  render() {
    const { username, password } = this.state;
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
          <button type='submit'>Entrar!</button>
        </div>
      </form>
    );
  }
};

export default Login;
