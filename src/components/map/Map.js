import React from "react";

import * as styles from "./Map.module.scss";

const API_KEY = process.env.REACT_APP_GOOGLE_MAP_API_KEY;
const mapUrl = `https://www.google.com/maps/embed/v1/place?q=Thwaite+Watermill+in+Leeds&key=${API_KEY}`;

const Map = () => {
  return (
    <iframe
      className={styles.map}
      title="map"
      src={mapUrl}
      frameBorder="0"
      style={{ border: 0 }}
      allowFullScreen={true}
      aria-hidden={true}
      tabIndex="0"
    ></iframe>
  );
};

export default Map;
