import React, { useState, useEffect } from 'react';

function TimeOut() {
  const [dateTimes1, setDateTimes1] = useState([]);
  const [capturedDateTime1, setCapturedDateTime1] = useState(null);

  // Load data from local storage when the component mounts
  useEffect(() => {
    const storedDateTimes1 = JSON.parse(localStorage.getItem('dateTimes1'));
    if (storedDateTimes1) {
      setDateTimes1(storedDateTimes1);
    }
  }, []);

  // Save data to local storage whenever dateTimes changes
  useEffect(() => {
    localStorage.setItem('dateTimes1', JSON.stringify(dateTimes1));
  }, [dateTimes1]);

  const captureCurrentDateTime = () => {
    const now = new Date();
    setCapturedDateTime1(now);

    // Update the state with the new dateTime
    setDateTimes1([...dateTimes1, now]);
  };

  const clearLocalStorage1 = () => {
    localStorage.clear();
    setDateTimes1([]);
  };

  /*
 const handleStopClick = () => {
      if (startTime) {
        setEndTime(Date.now());
        let elapsedTime = endTime - startTime;
        ((elapsedTime /= 60000).toFixed(2));
        setTimes([...times, elapsedTime]);
        setStartTime(null);
      }
    };
  */
  return (
    <div>
      <button onClick={captureCurrentDateTime}>Time Out</button>
      <button onClick={clearLocalStorage1}>Delete Time Out</button>
      {capturedDateTime1 && (
        <p>Time Out: {capturedDateTime1.toLocaleString()}</p>
      )}
      {dateTimes1.length > 0 && (
        <div>
          <h2>Date and Time Out:</h2>
          <ul>
            {dateTimes1.map((dateTime, index) => (
              <li key={index}>{dateTime.toLocaleString()}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
export default TimeOut;