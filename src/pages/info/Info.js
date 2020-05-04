import React from "react";
import * as styles from "./Info.module.scss";

const Info = () => {
  return (
    <div className={styles.container}>
      <section className={styles.hotels}>
        <h5>Hotels</h5>
        <h6>Hotel 1</h6>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <a href="#">Link to Hotel 1</a>
        <h6>Hotel 2</h6>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <a href="#">Link to Hotel 2</a>
        <h6>Hotel 3</h6>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <a href="#">Link to Hotel 3</a>
      </section>
      <section className={styles.travel}>
        <h5>Travel</h5>
        <h6>Parking</h6>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <h6>Train</h6>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <h6>Taxis</h6>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </section>
    </div>
  );
};

export default Info;
