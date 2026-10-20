
import { useState, useEffect } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    if (!isRunning) return;

    const timerId = setInterval(() => {
      setCount(previousCount => previousCount + 1);
    }, 1000);

    return () => {
      clearInterval(timerId);
    };
  }, [isRunning]);

  return (
    <div>
      <h2>Counter: {count}</h2>

      <button onClick={() => setIsRunning(true)}>
        Start
      </button>

      <button onClick={() => setIsRunning(false)}>
        Pause
      </button>

      <button
        onClick={() => {
          setIsRunning(false);
          setCount(0);
        }}
      >
        Reset
      </button>
    </div>
  );
}

export default Counter;
