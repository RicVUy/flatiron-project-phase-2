import React from 'react'
import TimeElapsed from './TimeElapsed';
import TimeList from './TimeList';
import EmployeeLogin from './EmployeeLogin';
function Person() {
  return (
    <>
    <div className="see">
  <EmployeeLogin />
</div>

<div id="time-in-out">
  <TimeElapsed />
  <TimeList />
</div>
</>
  )
}

export default Person