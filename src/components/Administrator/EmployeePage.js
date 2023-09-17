import React, {useState, useEffect} from 'react'
import EmployeeList from './EmployeeList'
import NewEmployeeForm from './NewEmployeeForm'
import SearchEmployee from './SearchEmployee'

const EmployeePage = () => {
    const [employees, setEmployees] = useState([])
    const [searchTerm, setSearchTerm] = useState("")

    useEffect(() => {
        fetch("http://localhost:3001/employees")
        .then(r => r.json())
        .then(setEmployees) 
          },[])

          function handleAddEmployee (newEmployee) {
            setEmployees([...employees, newEmployee])
            }  

  const filteredEmployees = employees.filter(employee => employee.name.toLowerCase().includes(searchTerm.toLowerCase()))          
  
  return (
    <main>
      <div>
        <EmployeeList employees={filteredEmployees}/>
        </div>
        <div id="employeeForm">
        <SearchEmployee searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
        <NewEmployeeForm onAddEmployee={handleAddEmployee}/>
         
        </div>
        </main>
  )
}

export default EmployeePage