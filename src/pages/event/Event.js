import React from "react";
import * as styles from "./Event.module.scss";
import { Wedding, Map } from "../../components";

const weddingCalendarEvent = {
  description: "Joe and Chloe are getting married!",
  duration: "12",
  endDatetime: "20210627T000000",
  location: "Thwaite Watermill, Leeds",
  startDatetime: "20210626T120000",
  title: 'Joe and Chloe"s Wedding'
};

const Event = () => {
  return (
    <div className={styles.container}>
      <Wedding event={weddingCalendarEvent} />
      <section className={styles.details}>
        <h5>Child Free Wedding</h5>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tortor mauris, dapibus quis condimentum nec, vestibulum vel tellus. Aliquam mattis metus sapien, id ornare lectus varius ut. Quisque eleifend urna at convallis malesuada.</p>
        <h5>Dress Code</h5>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tortor mauris, dapibus quis condimentum nec, vestibulum vel tellus.</p>
        <h5>Direction & Map</h5>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing</p>
        <Map/>
      </section>
    </div>
  );
};

export default Event;
