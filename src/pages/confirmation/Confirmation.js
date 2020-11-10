import React from "react";
import { Redirect } from "react-router-dom";

import image from "../../assets/wedding_logo.png";

import * as styles from "./Confirmation.module.scss";

const Confirmation = props => {
  let rsvpResponse;
  if (props.history.location.state) {
    rsvpResponse = props.history.location.state.rsvpResponse;
  }
  return (
    <>
      {props.history.location.state ? (
        <div className={styles.container}>
          <h1>Thanks!</h1>
          <p>Your RSVP has been recorded</p>
          {rsvpResponse ? (
            <p>We can't wait to see you at the wedding</p>
          ) : (
            <p>We're sorry to hear you can't make it.</p>
          )}
          <p>If anything changes then please let one of us know.</p>
          <img src={image} alt="Chloe & Joe" />
        </div>
      ) : (
        <Redirect
          to={{
            pathname: "/rsvp"
          }}
        />
      )}
    </>
  );
};

export default Confirmation;
