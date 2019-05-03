export default `import { useRef, useState, useEffect, useCallback } from "react";
import { FaPlay, FaPause } from "react-icons/fa";

// create a custom useTimer hook that returns currentTime, isRunning,
// and 3 callback functions: startTimer, pauseTimer, and resetTimer. 
const useTimer = autoStart => {
  const [currentTime, setTimer] = useState(0);
  const [isRunning, setRunning] = useState(autostart);
  // utilize a ref to set and clear an interval
  const intervalRef = useRef(); 

  // clear the setInterval timer and set "isRunning" to false.
  const clearTimerInterval = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current); // clear the interval
      intervalRef.current = undefined; // remove the ref.current 
      setRunning(false);
    }
  }, [intervalRef]);

  // if play was clicked, set "isRunning" to true, and create a 
  // 1000ms setInterval timer to update "currentTime".
  const startTimer = useCallback(() => {
    if (!intervalRef.current) {
      setRunning(true);
      // set ref.current to an interval that updates "currentTime" every 1000ms
      intervalRef.current = setInterval(() => {
        setTimer(prevState => (prevState + 1 <= 59 ? prevState + 1 : 1));
      }, 1000);
    }
  }, [intervalRef]);

  // if pause was clicked, clear the setInterval timer.
  const pauseTimer = useCallback(() => clearTimerInterval(), [
    clearTimerInterval
  ]);

  // if reset was clicked, clear the setInterval timer and set "currentTime" 
  // back to 0.
  const resetTimer = useCallback(() => {
    clearTimerInterval();
    setTimer(0);
  }, [clearTimerInterval]);

  // during initial load start the timer if "autoStart" is truthy 
  useEffect(() => {
    if (autoStart) {
      startTimer();
    }
  }, [autoStart, startTimer]);

  return {
    currentTime,
    isRunning,
    pauseTimer,
    resetTimer,
    startTimer,
  };
};

// utilize the custom useTimer hook within a function.
const IntervalTimer = () => {
  const {
    currentTime,
    isRunning,
    pauseTimer,
    resetTimer,
    startTimer,
  } = useTimer(false); // "autoStart" is set to false

  return (
    <Fragment>
              <p>Timer:</p>
              {isRunning 
        ? <button onClick={pauseTimer}>
                          <FaPause />
                      </button>
        : <button onClick={startTimer}>
                          <FaPlay />
                      </button>
       )}
              <div>
                  <span>0:</span>
                  <span>
                      {currentTime < 10 ? \`0\${currentTime}\` : currentTime}
                  </span>
                  <span>s</span>
              </div>
              <button onClick={resetTimer}>
                  <FaTrash />
              </button>
        </Fragment>
  );
};

export default IntervalTimer;
`;
