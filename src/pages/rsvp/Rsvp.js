import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import AddCircleOutlineOutlinedIcon from "@material-ui/icons/AddCircleOutlineOutlined";
import * as styles from "./Rsvp.module.scss";
import { TextInput, RadioButtons, RsvpDropdown } from "../../components/";

const Rsvp = () => {
  const [rsvpResponse, setRsvpResponse] = useState(null);
  const [name, setName] = useState("");
  const [mealChoice, setMealChoice] = useState("");

  const [plusOneName, setPlusOneName] = useState("");
  const [plusOneMealChoice, setPlusOneMealChoice] = useState("");

  const [showPlusOne, setShowPlusOne] = useState(false);

  const handleFormSubmit = e => {
    e.preventDefault();
    console.log(
      `Name: ${name}, RSVP: ${rsvpResponse}, Meal Choice: ${mealChoice}. Guest Name: ${plusOneName}, Guest Meal Choice: ${plusOneMealChoice}`
    );
  };

  const handleChange = e => {
    e.preventDefault();
    if (e.target.value === "true") {
      setRsvpResponse(true);
    } else {
      setRsvpResponse(false);
    }
  };

  return (
    <div className={styles.container}>
      <h1>RSVP</h1>
      <p>
        Please complete the form below to let us know if you can make it to the
        wedding.
      </p>
      <form className={styles.form} onSubmit={handleFormSubmit}>
        <TextInput setName={setName} label={"Full Name"}/>
        <RadioButtons rsvpResponse={rsvpResponse} handleChange={handleChange} />
        <RsvpDropdown mealChoice={mealChoice} setMealChoice={setMealChoice} label={"Meal Preference"}/>
        {showPlusOne ? null : (
          <div className={styles.plus}>
            <button className={styles.addGuest} onClick={() => setShowPlusOne(true)}>
              <AddCircleOutlineOutlinedIcon />
            </button>
            <p>Add a Guest</p>
          </div>
        )}
        {showPlusOne && (
          <div className={styles.guestForm}>
            <TextInput setName={setPlusOneName} label={"Guest's Full Name"}/>
            <RsvpDropdown
              mealChoice={plusOneMealChoice}
              setMealChoice={setPlusOneMealChoice}
              label={"Guest's Meal Preference"}
            />
          </div>
        )}
        <Button type="submit" variant="outlined" className={styles.submitButton}>
          Submit
        </Button>
      </form>
    </div>
  );
};

export default Rsvp;

// 1. Full name (text, required)
// 2. Attendance (radio, required)
// 3. Meal choice (dropdown, required)
// 4. Add a plus one RSVP
// 5. Submit button (log for now)
