import axios from "axios";
import { useState, useCallback } from "react";

const initialState = {
  data: [],
  error: "",
  isLoading: true
};

const useFetchData = () => {
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
        }, 800);
      });

      setData({ photos: res.data, error: "", isLoading: false });
    } catch (error) {
      setData({ photos: [], error: error.toString(), isLoading: false });
    }
  };

  const refreshData = useCallback(() => setData(initialState), []);

  return {
    data,
    fetchData,
    refreshData
  };
};

export default useFetchData;
