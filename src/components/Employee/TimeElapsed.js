import React, { useState, useEffect } from 'react';

function TimeElapsed() {
  const [startTime, setStartTime] = useState(null);
  const [endTime, setEndTime] = useState(null);
  const [elapsedTime, setElapsedTime] = useState(0);
 let timeWork = []
 let duration = 0;
  const handleStartClick = () => {
    setStartTime(Date.now());
  };

  const handleStopClick = () => {
    if (startTime) {
      setEndTime(Date.now());

    }
  };

  useEffect(() => {
    if (endTime) {
       duration = endTime - startTime;
      setElapsedTime(duration);
     
    }
  }, [startTime, endTime]);
  
  const handleSaveClick = () => {
    if (elapsedTime > 0) {
      const newRecord = {
        startTime: new Date(startTime).toLocaleString(),
        endTime: new Date(endTime).toLocaleString(),
        elapsedTime: elapsedTime,
      };

      // Fetch existing timer data from JSON database
      const existingData = JSON.parse(localStorage.getItem('timerData')) || [];

      // Add the new record to the array
      existingData.push(newRecord);

      // Update the JSON database
      localStorage.setItem('timerData', JSON.stringify(existingData));

      // Reset state
      setStartTime(null);
      setEndTime(null);
      setElapsedTime(0);
    }
  };

  return (
    <div>
      <h2>Time At Work</h2>
      <button onClick={handleStartClick}>Time In</button>
      <button onClick={ () => { handleStopClick(); handleSaveClick();}}>
       Time Out 
      </button>
      {/*<button onClick={handleStopClick}>Time Out</button>
      <button onClick={handleSaveClick}>Save</button>*/}
      <div>
        {startTime && <p>Time In: {new Date(startTime).toLocaleString()}</p>}
        {endTime && <p>Time Out: {new Date(endTime).toLocaleString()}</p>}
        {elapsedTime > 0 && <p>Time at Work: {elapsedTime} ms</p>}
        <p>Time at Work:{timeWork}</p>
      </div>
    </div>
  );
}

export default TimeElapsed;
