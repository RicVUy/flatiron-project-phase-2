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
           <h3>NAME:  {name}</h3>
           <img src={image} alt={name} />
           <h4>PASSWORD: {password}</h4>
           <h4>POSITION:{position}</h4>
           <h4>SCHEDULE:{schedule}</h4>
           <h4>TIME TO WORK:{workTime}</h4>
           <h4>HOURLY PAY:${payPerHour}</h4>
           <h4>TIME IN:{timeInEvents}</h4>
           <h4>TIME OUT:{timeOutEvents}</h4>
           <h4>PAY FOR THIS WEEK: ${payForThisWeek}</h4>
           </ul>
           <button onClick={handleDelete}>Delete</button>
           
        </div>   
       )
}

export default EmployeeCard