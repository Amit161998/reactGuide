// import logo from './logo.svg';
import React, { Component } from 'react';
import './App.css';
import Persons from '../components/Persons/Persons';
import Radium, { StyleRoot } from 'radium';

class App extends Component {
  state = {
    persons: [
      { name: "Max", age: 28 },
      { name: "Manu", age: 30 },
      { name: "Stepheny", age: 26 }
    ],
    otherState: 'Some other value',
    showPersons: false
  } //managed from inside the component default way 

  // switchNameHandler = (newName) => {
  //   console.log('Was Clicked')
  //   this.setState({
  //     persons: [
  //       { name: newName, age: 200 },
  //       { name: "Manu", age: 30 },
  //       { name: "Stepheny", age: 100 }
  //     ]
  //   })
  //   //DONT DO THIS - >  this.state.persons[0].name = "Maximilian";
  // }

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id
    })
    const person = { ...this.state.persons[personIndex] }
    person.name = event.target.value;


    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({
      persons: persons
    });
  }

  deletePersonHandler = (personIndex) => {
    console.log(personIndex)
    const persons1 = [...this.state.persons]//this.state.persons.slice();  //dont mutate the original state //copy of array and store it in new vab
    persons1.splice(personIndex, 1)
    this.setState({ persons: persons1 })
  }

  togglerPersonsHadler = () => {
    const doesShow = this.state.showPersons
    this.setState({ showPersons: !doesShow })
  }

  render() {

    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'black'
      },
    }

    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          <Persons
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangeHandler}>
          </Persons>
          {/* {this.state.persons.map((person, index) => {
            return <Person
              name={person.name}
              age={person.age}
              click={() => this.deletePersonHandler(index)}
              key={person.id}
              changed={(event) => this.nameChangeHandler(event, person.id)}>
            </Person>
          })} */}
        </div>
      )

      style.backgroundColor = 'red'
      style[':hover'] = {
        backgroundColor: 'salmon',
        color: 'black'
      };
    }

    let classes = [];
    if (this.state.persons.length <= 2) {
      classes.push('red');
    }
    if (this.state.persons.length <= 1) {
      classes.push('bold')
    }


    return (
      <StyleRoot>
        <div className="App">
          <h1>Hi I am React App</h1>
          <p className={classes.join(' ')}>This is really working !</p>
          <button style={style}
            onClick={this.togglerPersonsHadler}>Toggle Button</button>
          {persons}
        </div>
      </StyleRoot>
    );
  };
}

export default Radium(App);
