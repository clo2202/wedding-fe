import React from "react";
import { Link } from "react-router-dom";
import AddToCalendarHOC from "react-add-to-calendar-hoc";
import * as styles from "./Wedding.module.scss";
import CustomButton from "../button/CustomButton";
import CustomDropdown from "../dropdown/CustomDropdown";
import { Button } from "@material-ui/core";

const AddToCalendarDropdown = AddToCalendarHOC(CustomButton, CustomDropdown);

const Wedding = ({ event }) => {
  return (
    <section className={styles.event}>
      <h1>Event Details</h1>
      <div className={styles.date}>
        <p>SAT</p>
        <h2>26 JUNE</h2>
        <p>2020</p>
        <p className={styles.time}>
          <b>12:00 to 00:00*</b>
        </p>
      </div>
      <p className={styles.reception}>
        *Reception guests - please arrive from 17:00
      </p>
      <AddToCalendarDropdown event={event} buttonText={"Add to Calendar"} />
      <div className={styles.address}>
        <span>Thwaite Watermills</span>
        <span>Thwaite Lane</span>
        <span>Leeds</span>
        <span>LS10 1RP</span>
      </div>
      <Link to="/rsvp" style={{ textDecoration: "none" }}>
        <Button variant="outlined">RSVP</Button>
      </Link>
    </section>
  );
};

export default Wedding;
