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
    <div id='card'>
     <h2>Time Card</h2>
      <ul>
        {timerData.map((record, index) => (
          <li key={index} id='space'>
            <p>Time In: {record.startTime}</p>
            <p> Time Out: {record.endTime}</p>
            <p>{" "}</p>
            <p> Time At Work this Period: {record.totalTime} hours</p>
             <p>Pay for this Period: ${record.payForThisWeek}</p>
             <p>-----------------------------------------------</p>
          </li>
        ))}
        <button onClick={clearLocalStorage}>Delete Time Card</button>
      </ul>
    </div>
  );
}

export default TimeList;