import { useRef, useState, useEffect, useCallback } from "react";
import PropTypes from "prop-types";

const useTimer = autoStart => {
  const [currentTime, setTimer] = useState(0);
  const [isRunning, setRunning] = useState(autoStart);
  const intervalRef = useRef();

  const clearTimerInterval = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = undefined;
      setRunning(false);
    }
  }, [intervalRef]);

  const startTimer = useCallback(() => {
    if (!intervalRef.current) {
      setRunning(true);
      intervalRef.current = setInterval(() => {
        setTimer(prevState => (prevState + 1 <= 59 ? prevState + 1 : 1));
      }, 1000);
    }
  }, [intervalRef]);

  const pauseTimer = useCallback(() => clearTimerInterval(), [
    clearTimerInterval
  ]);

  const resetTimer = useCallback(() => {
    clearTimerInterval();
    setTimer(0);
  }, [clearTimerInterval]);

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
    startTimer
  };
};

useTimer.propTypes = {
  autostart: PropTypes.bool.isRequired
};

export default useTimer;
