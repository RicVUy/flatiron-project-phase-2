import React from 'react'
import EmployeeCard from './EmployeeCard'

function EmployeeList({employees}) {

    const employeeList = employees.map((employee) => <EmployeeCard key={employee.id} employee={employee}/>)
  return (
    <ul className="cards">{employeeList}</ul>
  )
}

export default EmployeeList;