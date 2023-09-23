import React, { useState } from 'react';

function EmployeeLogin() {
  const [formData, setFormData] = useState({
    name: '',
    password: '',
  });

  const [employeeData, setEmployeeData] = useState(null);
  const [loginError, setLoginError] = useState('');
  
  let employees1 = [
    { 
          id : 1,
          name : "Ricardo Uy",
          password: "dolphin",
          title : "Manager",
          payPerHour : 30,
          timeInEvents : [],
          timeOutEvents : []
    },
    {
          id : 2,
          name : "Edna Uy",
          password: "Eloise",
          title : "Manager",
          payPerHour : 25,
          timeInEvents : [],
          timeOutEvents : []
    },
    {
      id : 3,
          name : "Johnny Diego",
          password: "Kuro",
          title : "Maintenance",
          payPerHour : 20,
          timeInEvents : [],
          timeOutEvents : []
    }
  ]

  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Simulate employee authentication (replace with your actual authentication logic)
    const { name, password } = formData;
     console.log(name)
     console.log(password)
    // Example authentication logic - you should replace this with your actual authentication logic
    
    
    if (name === name && password === password) {
      // If authentication is successful, fetch employee data
      fetchEmployeeData(name);
      setLoginError('');
    } else {
      setEmployeeData(null);
      setLoginError('Invalid name or password');
    }
  };

  const fetchEmployeeData = (name) => {
    // Fetch employee data based on the provided name
    // Replace this URL with your actual API endpoint
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