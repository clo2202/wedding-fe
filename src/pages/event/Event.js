import React from "react";
import * as styles from "./Event.module.scss";
import { Wedding } from "../../components";

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
        <h5>Gifts</h5>
        <p>
          Your attendance is the biggest gift you can give us, and so we do not
          expect any more than that on our wedding day. However, for those of
          you who do wish to give us a gift we have a honeymoon fund that you
          can contribute to. Please find any information on this below,
          alternatively we will have a box on the day for any Wedding cards you
          might like to give us.
        </p>
      </section>
    </div>
  );
};

export default Event;
