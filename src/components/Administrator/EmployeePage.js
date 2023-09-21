import React, {useState, useEffect} from 'react'
import EmployeeList from './EmployeeList'
import NewEmployeeForm from './NewEmployeeForm'
import SearchEmployee from './SearchEmployee'
//import EditFormSection from './EditFormSection'

const EmployeePage = () => {
    const [employees, setEmployees] = useState([])
    const [searchTerm, setSearchTerm] = useState("")
    //const [employee, setEmployee] = useState({})

    useEffect(() => {
        fetch("http://localhost:3001/employees")
        .then(r => r.json())
        .then(setEmployees) 
          },[])

          function handleAddEmployee (newEmployee) {
            setEmployees([...employees, newEmployee])
            }  

            function handleUpdatedEmployee(updatedEmployee){
              const updatedEmployees = employees.map((employee) => {
                if (employee.id === updatedEmployee.id) {
                  return updatedEmployee
                 } else {
                  return employee
                 }
              })
              setEmployees(updatedEmployees)
              }

              function handleDeleteEmployee(id) {
                const filteredEmployees = employees.filter(employee => employee.id !== id)
                setEmployees(filteredEmployees)
              }

  const filteredEmployees = employees.filter(employee => employee.name.toLowerCase().includes(searchTerm.toLowerCase()))          
  
  /*const onUpdateEmployee = (updatedEmployee) => {
    setEmployee(updatedEmployee)
  }*/

  return (
    <main>
      <div id='employeeForm'>
      <SearchEmployee searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
      </div>
      <div>
        <EmployeeList 
        employees={filteredEmployees} 
        onUpdateEmployee={handleUpdatedEmployee}
        onDeleteEmployee={handleDeleteEmployee}
        />
        </div>
        <div id="employeeForm">
       <NewEmployeeForm onAddEmployee={handleAddEmployee}/>
       </div>
        {/*<div className="editFormSection">
     <EditFormSection handleUpdateEmployee={onUpdateEmployee}/>
  </div> */}
        </main>
  )
}

export default EmployeePage