import React from 'react';
import './index.css';
import EmployeePage from './components/Administrator/EmployeePage';
import TimeIn from './components/Employee/TimeIn';
import TimeOut from './components/Employee/TimeOut';
import TimeElapsed from './components/Employee/TimeElapsed';
import TimeList from './components/Employee/TimeList';
import Header from './components/Header/Header';
import EmployeeLogin from './components/Employee/EmployeeLogin';
function App() {
  return (
    <span>
      <div id="header">
      <Header/> 
      </div>
      <div id="time-in-out">
      <TimeIn />
      <TimeOut />
    </div>
    <div id="time-elapsed-list">
      <TimeElapsed />
      <TimeList />
    </div>
    <div className="edit-employee-form-section">
      <EmployeeLogin/>
    </div>
    <div className="App">
      <EmployeePage />
    </div>
    
    </span>
  );
}

export default App;
