import axios from "axios";
import { useEffect, useRef, useState, useCallback } from "react";

const initialState = {
  data: [],
  error: "",
  isLoading: true
};

const useFetchData = () => {
  const isFetching = useRef(true);
  const [data, setData] = useState(initialState);

  const fetchData = async () => {
    try {
      const id = Math.floor(Math.random() * 1000) + 1;
      const res = await axios.get(
        `https://jsonplaceholder.typicode.com/photos?id=${id}`
      );

      await new Promise(res => {
        setTimeout(() => {
          res();
        }, 300);
      });
      setData({ photos: res.data, error: "", isLoading: false });
    } catch (error) {
      setData({ photos: [], error: error.toString(), isLoading: false });
    }
  };

  const refreshData = useCallback(
    () => {
      setData(initialState);
      isFetching.current = true;
    },
    [initialState, isFetching.current]
  );

  useEffect(
    () => {
      if (isFetching.current) {
        isFetching.current = false;
        fetchData();
      }
    },
    [isFetching.current]
  );

  return {
    data,
    refreshData
  };
};

export default useFetchData;
