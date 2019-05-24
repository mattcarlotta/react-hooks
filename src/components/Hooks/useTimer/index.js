import { useRef, useState, useEffect, useCallback } from "react";
import PropTypes from "prop-types";

const useTimer = autoStart => {
  const autoStartRef = useRef(autoStart);
  const intervalRef = useRef();
  const [currentTime, setTimer] = useState(0);
  const [isRunning, setRunning] = useState(false);

  const clearTimeReset = useCallback(
    reset => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = undefined;
      }

      setRunning(false);
      setTimer(prevState => (!reset ? prevState : 0));
    },
    [intervalRef]
  );

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

  const pauseTimer = useCallback(
    () => {
      clearTimeReset();
    },
    [clearTimeReset]
  );

  const resetTimer = useCallback(
    () => {
      clearTimeReset(true);
    },
    [clearTimeReset]
  );

  useEffect(
    () => {
      if (autoStartRef.current) {
        autoStartRef.current = null;
        startTimer();
      }

      return () => {
        if (intervalRef.current && isRunning) {
          resetTimer();
        }
      };
    },
    [autoStartRef, intervalRef, resetTimer, startTimer, isRunning]
  );

  return {
    currentTime,
    isRunning,
    pauseTimer,
    resetTimer,
    startTimer
  };
};

useTimer.propTypes = {
  autostart: PropTypes.bool.isRequired
};

export default useTimer;
