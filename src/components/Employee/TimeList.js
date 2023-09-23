import React, { useState, useEffect } from 'react';

function TimeList() {
  const [timerData, setTimerData] = useState([]);

  useEffect(() => {
    // Fetch timer data from JSON database
    const data = JSON.parse(localStorage.getItem('timerData')) || [];
    setTimerData(data);
  }, []);

  const clearLocalStorage = () => {
    localStorage.clear();
    setTimerData([]);
    };
  return (
    <div>
     
      <ul>
        {timerData.map((record, index) => (
          <li key={index}>
            <p>Time In: {record.startTime}</p>
            <p>Time Out: {record.endTime}</p>
            <p>Time at Work: {record.elapsedTime} minutes</p>
          </li>
        ))}
        <button onClick={clearLocalStorage}>Delete Time Card</button>
      </ul>
    </div>
  );
}

export default TimeList;