import React, {useState, useEffect} from 'react'
import EmployeeList from './EmployeeList'
import NewEmployeeForm from './NewEmployeeForm'

const EmployeePage = () => {
    const [employees, setEmployees] = useState([])

    useEffect(() => {
        fetch("http://localhost:3001/employees")
        .then(r => r.json())
        .then(setEmployees) 
          },[])

          function handleAddEmployee (newEmployee) {
            setEmployees([...employees, newEmployee])
            }  
  return (
    <main>
      <div>
        <EmployeeList employees={employees}/>
        </div>
        <div id="employeeForm">
        <NewEmployeeForm onAddEmployee={handleAddEmployee}/>
        </div>
        </main>
  )
}

export default EmployeePage