import React from "react";
import { Link } from "react-router-dom";
import AddToCalendarHOC from "react-add-to-calendar-hoc";
import { Button } from "@material-ui/core";

import CustomButton from "../button/CustomButton";
import CustomDropdown from "../dropdown/CustomDropdown";

import * as styles from "./Wedding.module.scss";

const AddToCalendarDropdown = AddToCalendarHOC(CustomButton, CustomDropdown);

const Wedding = ({ event }) => {
  return (
    <section className={styles.event}>
      <h1>Event Details</h1>
      <div className={styles.date}>
        <p>SAT</p>
        <h2>26 JUNE</h2>
        <p>2021</p>
        <p className={styles.time}>
          <b>12:00 to 00:00*</b>
        </p>
      </div>
      <p className={styles.reception}>*Last orders at 11pm</p>
      <Link to="/rsvp" style={{ textDecoration: "none" }}>
        <Button variant="outlined">RSVP</Button>
      </Link>
      <div className={styles.address}>
        <span>Thwaite Watermill</span>
        <span>Thwaite Lane</span>
        <span>Leeds</span>
        <span>LS10 1RP</span>
      </div>
      <AddToCalendarDropdown event={event} buttonText={"Add to Calendar"} />
    </section>
  );
};

export default Wedding;