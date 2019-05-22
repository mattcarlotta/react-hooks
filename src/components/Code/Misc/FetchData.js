export default `import React, {
  Fragment,
  useCallback,
  useEffect,
  useRef,
  useState
} from "react";
import axios from "axios";
import { FaHeartBroken, FaRedoAlt } from "react-icons/fa";

const initialState = {
  data: [],
  error: "",
  isLoading: true
};

// create a custom useFetchData hook that returns an initial value
// and a "refreshData" function.
const useFetchData = () => {
  // define an "isFetching" ref
  const isFetching = useRef(true);
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

      setData({
        photos: res.data,
        error: "",
        isLoading: false
      });
    } catch (error) {
      setData({
        photos: [],
        error: error.toString(),
        isLoading: false
      });
    }
  };

  // callback function to reset back to "initialState" that invokes
  // "fetchData" again (in the useEffect below)
  const refreshData = useCallback(
    () => {
      setData(initialState);
      isFetching.current = true;
    },
    [initialState, isFetching.current]
  );

  // due to asynchronous nature of data fetching, we must utilize
  // the "isFetching" ref to make sure our API is only called once.
  // by manipulating this mutatable ref, we can ensure
  // "fetchData" consistency across repaints.
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
  const { data, refreshData } = useFetchData();

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
