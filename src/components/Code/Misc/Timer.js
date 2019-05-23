export default `import React {
  Fragment,
  useRef,
  useState,
  useEffect,
  useCallback
} from "react";
import { FaPlay, FaPause, FaTrash } from "react-icons/fa";

// create a custom useTimer hook that returns "values" and
// 3 callback functions: "startTimer", "pauseTimer", and "resetTimer".
const useTimer = autoStart => {
  // utilize a ref to start the timer once
  const autoStartRef = useRef(autoStart);

  // utilize a ref to set and clear an interval
  const intervalRef = useRef();

  // utilize state to initialize "currentTime" and "isRunning"
  const [values, setTimer] = useState({
    currentTime: 0,
    isRunning: autoStart || false
  });

  const clearTimerInterval = useCallback(reset => {
    // if the interval is still present
    if (intervalRef.current) {
      clearInterval(intervalRef.current); // clear the interval
      intervalRef.current = undefined; // remove it from ref.current
    }

    // if reset is true, set "currentTime" to 0, else pause time
    setTimer(prevState => ({
      currentTime: !reset ? prevState.currentTime : 0,
      isRunning: false
    }));
    }
  }, [intervalRef]);

  // if play was clicked, check that the "intervalRef"
  // doesn't already have an interval. If not, then
  // create a 1000ms setInterval timer to update
  // "currentTime" and "isRunning".
  const startTimer = useCallback(() => {
    if (!intervalRef.current) {
      intervalRef.current = setInterval(() => {
        setTimer(prevState => ({
          currentTime:
            prevState.currentTime + 1 <= 59
              ? prevState.currentTime + 1
              : 1,
          isRunning: true
        }));
      }, 1000);
    }
  }, [intervalRef]);

  // if pause was clicked, clear the setInterval timer and pause time.
  const pauseTimer = useCallback(() => {
    clearTimerInterval()
  }, [clearTimerInterval]);

  // if reset was clicked, clear the setInterval timer and
  // set "currentTime" back to 0.
  const resetTimer = useCallback(() => {
    clearTimerInterval(true);
  }, [clearTimerInterval]);

  // during initial load start the timer if "autoStartRef" is truthy
  // during unmount remove the interval if its still running
  useEffect(() => {
      if (autoStartRef.current) {
        autoStartRef.current = null;
        startTimer();
      }

      return () => {
        if (intervalRef.current && values.isRunning) {
          resetTimer();
        }
      };
    }, [autoStartRef, intervalRef, resetTimer, startTimer, values.isRunning]);

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
    values,
    pauseTimer,
    resetTimer,
    startTimer,
  } = useTimer(false); // "autoStart" is set to false

  return (
    <Fragment>
      <p>Timer:</p>
      {values.isRunning
        ? <button onClick={pauseTimer}>
            <FaPause />
          </button>
        : <button onClick={startTimer}>
            <FaPlay />
          </button>
      }
      <div>
        <span>0:</span>
        <span>
          {values.currentTime < 10 ? \`0\${values.currentTime}\` : values.currentTime}
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
