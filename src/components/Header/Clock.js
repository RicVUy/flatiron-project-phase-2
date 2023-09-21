import React, { useEffect, useState } from 'react';


// fetching data (key!), setInterval, update part of the page outside React
function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    setInterval(() => {
      setTime(new Date());
    }, 1000);
  }, []);

  return <div>{time.toString()}</div>;
}


export default Clock;