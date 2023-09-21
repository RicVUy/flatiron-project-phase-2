import React, { useState, useEffect } from 'react';

function TimeList() {
  const [timerData, setTimerData] = useState([]);

  useEffect(() => {
    // Fetch timer data from JSON database
    const data = JSON.parse(localStorage.getItem('timerData')) || [];
    setTimerData(data);
  }, []);

  /*const clearLocalStorage = () => {
    
    localStorage.clear();
    setTimerData([]);
    
    
  };*/
  return (
    <div>
     
      <ul>
        {timerData.map((record, index) => (
          <li key={index}>
            <p>Start Time: {record.startTime}</p>
            <p>End Time: {record.endTime}</p>
            <p>Elapsed Time: {record.elapsedTime} ms</p>
          </li>
        ))}
        {/*<button onClick={clearLocalStorage}>Delete Time Card</button>*/}
      </ul>
    </div>
  );
}

export default TimeList;