import React from "react";

import { Wedding } from "../../components";

import * as styles from "./Event.module.scss";

const weddingCalendarEvent = {
  description: "Joe and Chloe are getting married!",
  duration: "12",
  endDatetime: "20210627T000000",
  location: "Thwaite Watermill, Leeds",
  startDatetime: "20210626T120000",
  title: "Joe and Chloe's Wedding"
};

const Event = () => {
  return (
    <div className={styles.container}>
      <Wedding event={weddingCalendarEvent} />
      <section className={styles.details}>
        <h5>The Ceremony</h5>
        <p>
          Due to a registrar misshap, we will "officially" be getting married on
          Friday June 25th, the day before the big party. 
          <br />
          <br />
          But we'll be re-enacting the "I dos" on Saturday so nobody misses out.
        </p>
        <h5>Dress Code</h5>
        <p>
          Whatever you like. You can come suited and booted or you can wear your
          pjs, we don't mind, as long as you feel comfortable. The venue is an
          old mill with a cobbled courtyard and a marquee on a lawn (consider
          that a warning for anyone planning to wear stilettos).
        </p>
        <h5>Gifts</h5>
        <p>
          Your attendance is the biggest gift you can give us, and so we do not
          expect any more than that on our wedding day. But should you wish to
          buy us something, we’d greatly appreciate a contribution towards our
          dream honeymoon, alternatively we will have a box on the day for any
          Wedding cards/gifts you might like to give us.
        </p>
      </section>
    </div>
  );
};

export default Event;
