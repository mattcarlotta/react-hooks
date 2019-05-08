export default `import React, { Fragment, useCallback, useEffect, useState } from "react";
import axios from "axios";
import { FaHeartBroken, FaRedoAlt } from "react-icons/fa";

const initialState = {
  data: [],
  error: "",
  isLoading: true
};

// create a custom useFetchData hook that returns an initial value 
// and two functions: fetchData and refreshData. 
const useFetchData = () => {
  const [data, setData] = useState(initialState);

  // an asynchronous function that updates state with data or an error
  const fetchData = async () => {
    try {
      // sets an id between 1 and 1000;
      const id = Math.floor(Math.random() * 1000) + 1;

      // fetches a photo album by id
      const res = await axios.get(
        \`https://jsonplaceholder.typicode.com/photos?id=\${id}\`
      );

      setData({ photos: res.data, error: "", isLoading: false });
    } catch (error) {
      setData({ photos: [], error: error.toString(), isLoading: false });
    }
  };

  // callback function to reset back to "initialState" that invokes
  // "fetchData" again (in the useEffect below)
  const refreshData = useCallback(() => setData(initialState), []);

  return {
    data,
    fetchData,
    refreshData
  };
};

// a loading placeholder component
const Placeholder = () => (
  <p>Loading...</p>
);

// a component that will either display a server error or display
// the data returned from the API.
const DisplayData = ({ error, photos }) => (
  <div>
    {(error || (photos && photos.length === 0))
      ? <Fragment>
          <h3>
            <FaHeartBroken /> Uh oh, something went wrong.
          </h3>
          <p>{error}</p>
        </Fragment>
      : photos.map(({ albumId, id, title, url, thumbnailUrl }) => (
          <Fragment key={id}>
            <img src={thumbnailUrl} alt="example" />
            <h3>ALBUM ID: {albumId}</h3>
            <p>
              <strong>TITLE:</strong> {title}
            </p>
            <p>
              <strong>URL: </strong>
              <a href={url} target="_blank">
                {url}
              </a>
            </p>
          </Fragment>
        ))
      )}
  </div>
);

// utilize the custom useFetchData hook within a function and the
// two components defined above.
const FetchData = () => {
  const { data, fetchData, refreshData } = useFetchData();

  // utilize "useEffect" to create a lifecycle that checks if
  // "data.isLoading" is true and if so, it fetches data.
  useEffect(() => {
    if (data.isLoading) {
      fetchData();
    }
  }, [data.isLoading, fetchData]);

  return (
    <div>
      { data.isLoading
        ? <Placeholder />
        : <DisplayData {...data} />
      }
      <button onClick={refreshData}>
          <FaRedoAlt /> Refresh Data
      </button>
    </div>
  );
};

export default FetchData;
`;
