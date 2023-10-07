import React, { useState } from 'react';
import { employees1 } from '../../data';
import TimeElapsed from './TimeElapsed';
import TimeList from './TimeList';

function EmployeeLogin({ setLoggedInE }) {
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
      setLoggedInE(true);
     fetchEmployeeData(name);
      setLoginError('');
    } else {
      setEmployeeData(null);
      //setLoginError('Invalid name or password');
    }
   
  }};
  
  
  const fetchEmployeeData = (name) => {
    // Fetch employee data based on the provided name
    
    fetch(`/employees?name=${name}`)
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
          
          <h2 className='box'>Employee PROFILE</h2>
          <h3>NAME: {employeeData.name}</h3>
          <img src={employeeData.image} alt={employeeData.name}/>
          <h4>PASSWORD:{employeeData.password}</h4>
          <h4>POSITION: {employeeData.position}</h4>
          <h4>SCHEDULE:{employeeData.schedule}</h4>
          <h4>WORKTIME:{employeeData.workTime}</h4>
          <h4>PAY PER HOUR:${employeeData.payPerHour}</h4>
          <h4>TIME IN EVENTS:{employeeData.timeInEvents}</h4>
          <h4>TIME OUT EVENTS:{employeeData.timeOutEvents}</h4>
          <h4>PAY FOR THIS WEEK: ${employeeData.payForThisWeek}</h4>

          <div id="time-in-out">
      <TimeElapsed />
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

