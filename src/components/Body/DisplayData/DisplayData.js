import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { FaHeartBroken } from "react-icons/fa";

const DisplayData = ({ className, error, photos }) => (
  <div className={className}>
    {error ? (
      <div className="error-container">
        <h3>
          <FaHeartBroken /> Uh oh, something went wrong.
        </h3>
        <p>{error}</p>
      </div>
    ) : (
      photos.map(({ albumId, id, title, url, thumbnailUrl }) => (
        <Fragment key={id}>
          <img className="image" src={thumbnailUrl} alt="example" />
          <h3 className="album">ALBUM ID: {albumId}</h3>
          <p className="title">
            <strong>TITLE:</strong> {title}
          </p>
          <p className="url">
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

DisplayData.propTypes = {
  className: PropTypes.string.isRequired,
  error: PropTypes.string,
  photos: PropTypes.arrayOf(
    PropTypes.shape({
      albumId: PropTypes.number,
      id: PropTypes.numer,
      title: PropTypes.string,
      url: PropTypes.string,
      thumbnailUrl: PropTypes.string
    })
  )
};

export default DisplayData;
