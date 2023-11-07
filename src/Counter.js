import React, { useState } from 'react';

const Counter = () => {

  const [counter, setCounter] = useState(0);

  const handleIncrement = () => {
    setCounter(counter + 1);
  };

  const handleDecrement = () => {
    setCounter(counter - 1);
  };

  return (
    <div>

      <div>

        <label className='input-label'>Start counting: </label>
        <button onClick={handleDecrement}>-</button>
        <span className=''> {counter} </span>
        <button onClick={handleIncrement}>+</button>
        
      </div>

      <hr/>

    </div>
  );
};

export default Counter;
