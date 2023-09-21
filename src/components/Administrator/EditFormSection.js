import React, { useState} from 'react'

const EditFormSection = ({handleUpdateEmployee}) => {

  const [formData, setFormData] = useState({
    id: "",
    name: "",
    image: "",
    password: "",
    position: "",
    schedule: "",
    workTime: "",
    payPerHour: "",
    timeInEvents: [],
    timeOutEvents: [],
    payForThisWeek: "",
})
const onInputChange = (e) => {
  const formDataCopy = {...formData}
  formDataCopy[e.target.name] = e.target.value
  setFormData(formDataCopy)
}
const removeBlankEntries = () => {
  const result = {};
  Object.entries(formData)
  .filter((entry) => entry[1])
  .forEach((entry) => (result[entry[0]] = entry[1]));
  return result;
}
const onFormSubmit = (e) => {
  e.preventDefault()
  const updatedEmployeeData = removeBlankEntries();
  const config = {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updatedEmployeeData),
  }
  fetch(`http://localhost:3001/employees/${id}`, config)
  .then(resp => resp.json())
  .then(data => handleUpdateEmployee(data))

  setFormData({
    id: "",
    name: "",
    image: "",
    password: "",
    position: "",
    schedule: "",
    workTime: "",
    payPerHour: "",
    timeInEvents: [],
    timeOutEvents: [],
    payForThisWeek: "",
  })
}
  return (
    <section className="edit-employee-form-section">
      <form className="edit-employee-form" onSubmit={onFormSubmit}>
        <h1>Edit employee</h1>

        <label htmlFor="id">ID</label>
        <input id="id" name="ID" type="text" value={formData.id} onChange={onInputChange}/>
        <label htmlFor="name">Name</label>
        <input id="name" name="name" type="text"  value={formData.name}onChange={onInputChange} />
        <label htmlFor="image">Image</label>
        <input id="image" name="image" type="text"  value={formData.image} onChange={onInputChange}/>
        <label htmlFor="password">Password</label>
        <input id="password" name="password" type="text"  value={formData.password} onChange={onInputChange}/>
        <label htmlFor="position">Position</label>
        <input id="position" name="position" type="text" value={formData.position} onChange={onInputChange}/>
        <label htmlFor="schedule">Schedule</label>
        <input id="schedule" name="schedule" type="text"  value={formData.schedule} onChange={onInputChange}/>
        <label htmlFor="worktime">Worktime</label>
        <input id="worktime" name="worktime" type="text"  value={formData.workTime} onChange={onInputChange}/>
        <label htmlFor="payPerHour">payPerHour</label>
        <input id="payPerHour" name="payPerHour" type="text"  value={formData.payPerHour} onChange={onInputChange}/>
        <label htmlFor="timeInEvents">timeInEvents</label>
        <input id="timeInEvents" name="timeInEvents" type="text"  value={formData.timeInEvents} onChange={onInputChange}/>
        <label htmlFor="timeOutEvents">timeOutEvents</label>
        <input id="timeOutEvents" name="timeOutEvents" type="text"  value={formData.timeOutEvents} onChange={onInputChange}/>
        <label htmlFor="payForThisWeek">payForThisWeek</label>
        <input id="payForThisWeek" name="payForThisWeek" type="text"  value={formData.payForThisWeek} onChange={onInputChange}/>
        <input type="submit" />
      </form>
    </section>
  )
}

export default EditFormSection