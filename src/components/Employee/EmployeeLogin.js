import React, { useState } from 'react';
import { employees1 } from './data';
import TimeTracker from './TimeTracker';
import TimeList from './TimeList';

function EmployeeLogin() {
  const [formData, setFormData] = useState({
    name: '',
    password: '',
  });

  const [employeeData, setEmployeeData] = useState(null);
  const [loginError, setLoginError] = useState('');
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();



    //  employee authentication 
    const { name, password } = formData;
    
     for (let i=0; i<employees1.length; i++){
    if (name === employees1[i].name1 && password === employees1[i].password1) {
      // If authentication is successful, fetch employee data
     fetchEmployeeData(name);
      setLoginError('');
    } else {
      setEmployeeData(null);
      setLoginError('Invalid name or password');
    }
   
  }};
  
  
  const fetchEmployeeData = (name) => {
    // Fetch employee data based on the provided name
    
    fetch(`http://localhost:3001/employees?name=${name}`)
      .then((resp) => resp.json())
      .then((data) => {
        // Assuming data is an array with one employee object
        console.log(data)
        if (data.length === 1) {
          setEmployeeData(data[0]);
        } else {
          setEmployeeData(null);
          setLoginError('Employee not found');
        }
      })
      .catch((error) => {
        console.error('Error fetching employee data:', error);
      });
  };

  return (
    <div>
      <h2>Employee Login</h2>
      <form onSubmit={handleFormSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit">Login</button>
      </form>

      {loginError && <p>{loginError}</p>}

      {employeeData && (
        <div>
          <h2>Employee Data</h2>
          <p>Name: {employeeData.name}</p>
          <p>Position: {employeeData.position}</p>
          <p>schedule:{employeeData.schedule}</p>
          <p>WorkTime:{employeeData.workTime}</p>
          <p>Pay per hour:${employeeData.payPerHour}</p>
          <p>Time In:{employeeData.timeInEvents}</p>
          <p>Time Out:{employeeData.timeOutEvents}</p>
          <p>Pay for this week: ${employeeData.payForThisWeek}</p>

          <div id="time-in-out">
      <TimeTracker />
      </div>
      <div id="time-in-out"> 
      <TimeList />
    </div>
        </div>
      )}
    </div>
  );
}

export default EmployeeLogin;

/*Fetch employee data from db.json
    fetch("http://localhost:3000/employees")
      .then((resp) => resp.json())
      .then((data) => {
        // Find the employee with the inputted name
        const employee = data.employees.find(
          (employee) =>
            employee.name === formData.name && employee.password === formData.password
        );*/