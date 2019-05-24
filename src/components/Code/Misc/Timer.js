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
  // we separate the two because "currentTime" is delayed by
  // 1 second. if we combined both, then clicking the play/pause
  // button will result in a one second delay as well.
  const [currentTime, setTimer] = useState(0);
  const [isRunning, setRunning] = useState(false);

  const clearTimerInterval = useCallback(reset => {
    // if the interval is still present
    if (intervalRef.current) {
      clearInterval(intervalRef.current); // clear the interval
      intervalRef.current = undefined; // remove it from ref.current
    }

    setRunning(false);

    // if reset is true, set "currentTime" to 0, else pause time
    setTimer(prevState => (!reset ? prevState : 0));
    }
  }, [intervalRef]);

  // if play was clicked, check that the "intervalRef"
  // doesn't already have an interval. if not, then
  // setRunning to true and create a 1000ms setInterval
  // timer to update "currentTime".
  const startTimer = useCallback(
    () => {
      if (!intervalRef.current) {
        setRunning(true);
        intervalRef.current = setInterval(() => {
          setTimer(prevState => (prevState + 1 <= 59 ? prevState + 1 : 1));
        }, 1000);
      }
    },
    [intervalRef, setRunning]
  );

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
        if (intervalRef.current && isRunning) {
          resetTimer();
        }
      };
    }, [autoStartRef, intervalRef, resetTimer, startTimer, isRunning]);

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
      }
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
