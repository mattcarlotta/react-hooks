import { useRef, useState, useEffect, useCallback } from "react";
import PropTypes from "prop-types";

const useTimer = autoStart => {
  const autoStartRef = useRef(autoStart);
  const intervalRef = useRef();
  const [values, setTimer] = useState({
    currentTime: 0,
    isRunning: false
  });

  const clearTimeReset = useCallback(
    reset => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = undefined;
      }
      setTimer(prevState => ({
        currentTime: !reset ? prevState.currentTime : 0,
        isRunning: false
      }));
    },
    [intervalRef]
  );

  const startTimer = useCallback(
    () => {
      if (!intervalRef.current && !values.isRunning) {
        intervalRef.current = setInterval(() => {
          setTimer(prevState => ({
            currentTime:
              prevState.currentTime + 1 <= 59 ? prevState.currentTime + 1 : 1,
            isRunning: true
          }));
        }, 1000);
      }
    },
    [intervalRef, values.isRunning]
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
        if (intervalRef.current && values.isRunning) {
          resetTimer();
        }
      };
    },
    [autoStartRef, intervalRef, resetTimer, startTimer, values.isRunning]
  );

  return {
    values,
    pauseTimer,
    resetTimer,
    startTimer
  };
};

useTimer.propTypes = {
  autostart: PropTypes.bool.isRequired
};

export default useTimer;
