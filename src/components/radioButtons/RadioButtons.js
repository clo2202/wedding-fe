import React from "react";
import {
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl
} from "@material-ui/core";

import * as styles from "./RadioButtons.module.scss";

const RadioButtons = ({ rsvpResponse, handleChange }) => {
  return (
    <FormControl component="fieldset">
      <RadioGroup
        className={styles.radioGroup}
        aria-label="position"
        name="rsvpResponse"
        value={rsvpResponse}
        onChange={handleChange}
        row
      >
        <FormControlLabel
          value={true}
          control={<Radio color="primary" required />}
          label="Yes, I can come"
          labelPlacement="top"
        />
        <FormControlLabel
          value={false}
          control={<Radio color="primary" required />}
          label="Sorry, I can't make it"
          labelPlacement="top"
        />
      </RadioGroup>
    </FormControl>
  );
};

export default RadioButtons;
