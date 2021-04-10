// import logo from './logo.svg';
import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      { name: "Max", age: 28 },
      { name: "Manu", age: 30 },
      { name: "Stepheny", age: 26 }
    ]
  } //managed from inside the component default way 

  switchNameHandler = () => {
     console.log('Was Clicked')
  }

  render() {
    return (
      <div className="App">
        <h1>Hi I am React App</h1>
        <p>This is really working !</p>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}></Person>
        <Person name={this.state.persons[1].name} age={this.state.persons[0].age}>My Hobbies : Racing</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[0].age}></Person>
      </div>
    );
  };
}

export default App;
