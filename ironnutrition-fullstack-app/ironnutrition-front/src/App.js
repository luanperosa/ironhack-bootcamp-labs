import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home/Home';
import Signup from './components/pages/Signup/Signup';
import Login from './components/pages/Login/Login';
import Foods from './components/pages/Foods/Foods';
import PrivateRoute from './router/PrivateRoute';

class App extends Component {
  constructor() {
    super();
    this.state = {
      isUserAuthenticated: false,
    };

    const authToken = localStorage.getItem('loggedUser');
  
    if (authToken) this.state.isUserAuthenticated = true;
  }

  authenticateUser = () => {
    this.setState({ isUserAuthenticated: true })
  };

  logoutUser = () => {
    localStorage.removeItem('loggedUser');
    this.setState({ isUserAuthenticated: false });
  };


  handleSubmit = async (food) => {
    const { foods, filteredFoods } = this.state;

    foods.push(food);
    filteredFoods.push(food);

    this.setState({
      foods,
      filteredFoods,
     })
  };

  render() {
    const { isUserAuthenticated } = this.state;

    return (
      <div>
        {isUserAuthenticated ? (
          <nav>
            <Link to='/'>Voltar para Home</Link>
            <br/>
            <Link to='/foods'>Ver minhas Foods</Link>
            <br/>
            <Link onClick={this.logoutUser} to='/'>Logout</Link>
          </nav>
        ) : (
          <nav>
            <Link to='/'>Voltar para Home</Link>
            <br/>
            <Link to='/login'>Entre</Link>
            <br/>
            <Link to='/signup'>Cadastre-se</Link>
          </nav>
        )}

        <Switch>
          {/* Public Routes */}
          <Route exact path='/' component={Home} />
          <Route exact path='/signup' component={Signup} />
          <Route exact path='/login' render={(props) => <Login {...props} authenticateUser={this.authenticateUser} />} />

          {/* Private Routes */}
          <PrivateRoute exact path='/foods' component={Foods} isAuth={isUserAuthenticated} teste='klsjdflsdflkj' />
        </Switch>
      </div>
    );
  }
}

export default App;
