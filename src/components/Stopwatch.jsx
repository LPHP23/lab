import React, { useRef, useState } from 'react';

const Stopwatch = () => {
  const [time, setTime] = useState(0);      // hiển thị trên UI -> state
  const intervalRef = useRef(null);         // ID interval -> ref, không cần re-render

  const handleStart = () => {
    if (intervalRef.current !== null) return; // đã chạy rồi
    intervalRef.current = setInterval(() => {
      setTime(prev => prev + 1);
    }, 1000);
  };

  const handleStop = () => {
    if (intervalRef.current !== null) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  const handleReset = () => {
    handleStop();
    setTime(0);
  };

  return (
    <div className="stopwatch">
      <h3>Stopwatch (useRef + useState)</h3>
      <p className="time">{time}s</p>
      <div className="btn-row">
        <button onClick={handleStart}>Start</button>
        <button onClick={handleStop}>Stop</button>
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
};

export default Stopwatch;