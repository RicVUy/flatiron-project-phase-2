import React from 'react'
import EmployeeCard from './EmployeeCard'

function EmployeeList({employees, onUpdateEmployee}) {

    const employeeList = employees.map((employee) => <EmployeeCard key={employee.id} employee={employee} onUpdateEmployee={onUpdateEmployee}/>)
  return (
    <ul className="cards">{employeeList}</ul>
  )
}

export default EmployeeList;