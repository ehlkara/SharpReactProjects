import React from 'react';
import './App.css';
import Home from './components/Home';
import Instructor from './components/Instructor';
import InstructorList from './components/InstructorList';
import Request from './components/Request';
import EventActions from './components/EventActions';
import LoginCheck from './components/LoginCheck';
import ReducerExample from './components/ReducerExample';
import ContextExample from './components/ContextExample';
import { ThemeContextProvider } from './components/ThemeContext';

function App() {

  const instructor = {
    firstName: 'Ehlullah',
    lastName: 'Karakurt'
  }

  const instructorList = [{
    firstName: 'Ehlullah',
    lastName: 'Karakurt'
  },
  {
    firstName: 'Canan',
    lastName: 'Boz'
  },
  {
    firstName: 'Efe',
    lastName: 'Kara'
  }];
  return (
    <div className="App">
      {/* <Home name="Ehlullah" courseNumber={15} isBest />
      <Instructor instructorNameLastName={instructor} />
      <InstructorList instructorNameLastNameList= {instructorList}/>
      <Request status="success"/>
      <EventActions/> */}
      {/* <LoginCheck/> */}
      <ReducerExample />
      <ThemeContextProvider>
        <ContextExample />
      </ThemeContextProvider>
    </div>
  );
}

export default App;
