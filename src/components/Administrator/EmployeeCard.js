import React from 'react'

function EmployeeCard ({employee}) {
    const {
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
    return (
        <div className="card">
           <ul>
           <li>{name}</li>
           <img src={image} alt={name} />
           <li>{password}</li>
           <li>position:{position}</li>
           <li>schedule:{schedule}</li>
           <li>Hours of work:{workTime}</li>
           <li>Pay per hour:{payPerHour}</li>
           <li>Time In:{timeInEvents}</li>
           <li>Time Out:{timeOutEvents}</li>
           <li>Pay for this week: ${payForThisWeek}</li>
           </ul>
        </div>   
       )
}

export default EmployeeCard