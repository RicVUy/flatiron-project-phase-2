import React from 'react';
import './index.css';
import EmployeePage from './components/Administrator/EmployeePage';
import Person from './components/Employee/Person';
import Header from './components/Header/Header';

function App() {
  return (
    <span>
      <div id="header">
      <Header/> 
      </div>
      <div>
        <Person/>
      </div>
       <div className="App">
      <EmployeePage />
    </div>
    
    </span>
  );
}

export default App;
