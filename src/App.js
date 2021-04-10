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
    ],
    otherState: 'Some other value'
  } //managed from inside the component default way 

  switchNameHandler = (newName) => {
    console.log('Was Clicked')
    this.setState({
      persons: [
        { name: newName, age: 200 },
        { name: "Manu", age: 30 },
        { name: "Stepheny", age: 100 }
      ]
    })
    //DONT DO THIS - >  this.state.persons[0].name = "Maximilian";
  }

  nameChangeHandler = (event) => {
    this.setState({
      persons: [
        { name: "Max Manu test", age: 200 },
        { name: event.target.value, age: 30 },
        { name: "Stepheny", age: 100 }
      ]
    })
  }

  render() {

    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px'
    }
    return (
      <div className="App">
        <h1>Hi I am React App</h1>
        <p>This is really working !</p>
        <button style={style}
          onClick={this.switchNameHandler.bind(this, "Maximillain")}>Switch Name</button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        ></Person>
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, "Max!!!")}
          changed={this.nameChangeHandler}>
          My Hobbies : Racing
            </Person>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
        ></Person>
      </div>
    );
  };
}

export default App;
