import React from 'react';
import './index.css';
import EmployeePage from './components/Administrator/EmployeePage';
import TimeIn from './components/Employee/TimeIn';
import TimeOut from './components/Employee/TimeOut';
import TimeElapsed from './components/Employee/TimeElapsed';
import TimeList from './components/Employee/TimeList';
function App() {
  return (
    <span>
      <div id="time-in-out">
      <TimeIn />
      <TimeOut />
    </div>
    <div id="time-elapsed-list">
      <TimeElapsed />
      <TimeList />
    </div>
    <div className="App">
      <EmployeePage />
    </div>
    
    </span>
  );
}

export default App;
