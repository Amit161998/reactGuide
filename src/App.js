// import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person'

const App = props => {

  const [personState, setPersonsState] = useState({   // returns an array with two elements (state and fn )
    persons: [
      { name: "Max", age: 28 },
      { name: "Manu", age: 30 },
      { name: "Stepheny", age: 26 }
    ]
  })

  const [otherState , setOtherState] = useState({otherState: "Some other value"})

  console.log(personState,otherState)

  const switchNameHandler = () => {
    console.log('Was Clicked')
    setPersonsState({
      persons: [
        { name: "Maximillian", age: 28 },
        { name: "Manu", age: 30 },
        { name: "Stepheny", age: 100 }
      ]
    });
    //DONT DO - >  state.persons[0].name = "Maximilian";
  };

  return (
    <div className="App">
      <h1>Hi I am React App</h1>
      <p>This is really working !</p>
      <button onClick={switchNameHandler}>Switch Name</button>
      <Person name={personState.persons[0].name} age={personState.persons[0].age}></Person>
      <Person name={personState.persons[1].name} age={personState.persons[1].age}>My Hobbies : Racing</Person>
      <Person name={personState.persons[2].name} age={personState.persons[2].age}></Person>
    </div>
  );

}

export default App;





