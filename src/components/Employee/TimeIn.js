import React, { useState, useEffect } from 'react';

function TimeIn() {
  const [dateTimes, setDateTimes] = useState([]);
  const [capturedDateTime, setCapturedDateTime] = useState(null);

  // Load data from local storage when the component mounts
  useEffect(() => {
    const storedDateTimes = JSON.parse(localStorage.getItem('dateTimes'));
    if (storedDateTimes) {
      setDateTimes(storedDateTimes);
    }
  }, []);

  // Save data to local storage whenever dateTimes changes
  useEffect(() => {
    localStorage.setItem('dateTimes', JSON.stringify(dateTimes));
  }, [dateTimes]);

  const captureCurrentDateTime = () => {
    const now = new Date();
    setCapturedDateTime(now);

    // Update the state with the new dateTime
    setDateTimes([...dateTimes, now]);
  };

  const clearLocalStorage = () => {
    localStorage.clear();
    setDateTimes([]);
  };

  return (
    <div>
      <button onClick={captureCurrentDateTime}>Time In</button>
      <button onClick={clearLocalStorage}>Delete Time In</button>
      {capturedDateTime && (
        <p>Time In: {capturedDateTime.toLocaleString()}</p>
      )}
      {dateTimes.length > 0 && (
        <div>
          <h2>Date and Time In:</h2>
          <ul>
            {dateTimes.map((dateTime, index) => (
              <li key={index}>{dateTime.toLocaleString()}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default TimeIn;

