import React from 'react'

function EmployeeCard ({employee,  onDeleteEmployee}) {
    const {
    id,    
    name,
    image,
    password,
    position,
    schedule,
    workTime,
    payPerHour,
    timeInEvents,
    timeOutEvents,
    payForThisWeek} = employee

    
      function handleDelete(params) {
        fetch(`/employees/${id}`, {
          method: "DELETE"
        })
        .then(onDeleteEmployee(id))
       }

    return (
        <div className="card">
          <h2>EMPLOYEE</h2>
           <ul>
           <li>NAME:  {name}</li>
           <img src={image} alt={name} />
           <li>PASSWORD: {password}</li>
           <li>POSITION:{position}</li>
           <li>SCHEDULE:{schedule}</li>
           <li>TIME TO WORK:{workTime}</li>
           <li>HOURLY PAY:${payPerHour}</li>
           <li>TIME IN:{timeInEvents}</li>
           <li>TIME OUT:{timeOutEvents}</li>
           <li>PAY FOR THIS WEEK: ${payForThisWeek}</li>
           </ul>
           <button onClick={handleDelete}>Delete</button>
           
        </div>   
       )
}

export default EmployeeCard