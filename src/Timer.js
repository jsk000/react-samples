import React, { useState, useEffect } from 'react';

const Timer = () => {
  const [time, setTime] = useState(0);
  const [inputTime, setInputTime] = useState(0);
  const [isActive, setIsActive] = useState(false);

  // Function to start the timer
  const startTimer = () => {
    if (inputTime > 0) {
      setIsActive(true);
      setTime(inputTime);
    }
  };

  // Function to stop the timer
  const stopTimer = () => {
    setIsActive(false);
  };

  // Function to reset the timer
  const resetTimer = () => {
    setIsActive(false);
    setTime(0);
    setInputTime(0);
  };

  useEffect(() => {
    let interval;
  
    if (isActive && time > 0) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);
    } else if (isActive && time === 0) {
      // The timer has ended, so show the alert
      clearInterval(interval);
      alert('Time is up!');
      setIsActive(false);
    }
  
    return () => {
      clearInterval(interval);
    };
  }, [isActive, time]);
  
  return (
    <div>
      <h3><u> 4. Timer and Counter: </u></h3>
      <div>

        <label className='input-label'>Set a timer: </label>
        <input className='input-field'
          type="number"
          value={inputTime}
          onChange={(e) => setInputTime(e.target.value)}
          placeholder="Enter time (seconds)"
        />

        <button onClick={startTimer}>Start</button>
        <button onClick={stopTimer}>Stop</button>
        <button onClick={resetTimer}>Reset</button>
      </div>
      <div>
        <p>Time: <span style={{ fontWeight: 'bold' }}>{time}</span> seconds</p>
      </div>

      <hr/>

    </div>
  );
};

export default Timer;
