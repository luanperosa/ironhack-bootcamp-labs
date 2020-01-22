import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import contacts from './contacts.json';
import IronContats from './components/IronContats/IronContats';

class App extends Component {
  state = {
    stateContats: [],
  };

  componentDidMount() {
    console.log('dklasmdlkamsdlkmasdlkm')
      this.setState({
        stateContats: contacts.slice(0, 5)
      }, () => console.log(this.state.stateContats))
  }

  
  
  render() {
    console.log(this.state);
    return (
      <div className="App">
        <h1>IronContats</h1>
        {
          this.state.stateContats.length === 0 ? 
          <h1>carregando</h1> : 
          <IronContats picture={this.state.stateContats[0].pictureUrl} name={this.state.stateContats[0].name} popularity={this.state.stateContats[0].popularity}/>
        }
      </div>
    );
  }
}

export default App;
