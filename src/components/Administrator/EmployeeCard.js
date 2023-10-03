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
        fetch(`http://localhost:3001/employees/${id}`, {
          method: "DELETE"
        })
        .then(onDeleteEmployee(id))
       }

    return (
        <div className="card">
           <ul>
           <li>{name}</li>
           <img src={image} alt={name} />
           <li>{password}</li>
           <li>position:{position}</li>
           <li>schedule:{schedule}</li>
           <li>WorkTime:{workTime}</li>
           <li>Pay per hour:${payPerHour}</li>
           <li>Time In:{timeInEvents}</li>
           <li>Time Out:{timeOutEvents}</li>
           <li>Pay for this week: ${payForThisWeek}</li>
           </ul>
           <button onClick={handleDelete}>Delete</button>
           
        </div>   
       )
}

export default EmployeeCard