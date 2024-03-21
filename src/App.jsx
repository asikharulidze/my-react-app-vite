import React, { useState, useEffect } from 'react';
import './App.css';
const LiveApp = () => {
  const [count, setCount] = useState(0);
  const [time, setCurrentTime] = useState(new Date().toLocaleTimeString());

  const increment = () => {
    setCount(prevCount => prevCount + 1);
  };

  const decrement = () => {
    setCount(prevCount => prevCount - 1);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <h1>My First React App</h1>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <p>Current Time: {time}</p>
    </div>
  );
}

export default LiveApp;
