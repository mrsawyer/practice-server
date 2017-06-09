import React, { Component } from 'react';
import './App.css';

class App extends Component {

  state = {
    data: []
  }

  componentDidMount() {
    fetch('http://localhost:3000/auth/fish/secretfish')
      .then(response => response.json())
      .then(data => this.setState({ data }))
  }

  render() {
    console.log(this.state.data);
    return (
      <div className="App">
        <div className="ima-poet">
        { this.state.data.map(messages => (
          <p>{messages.name}</p>)
        )}
        </div>
      </div>
    );
  }
}

export default App;
