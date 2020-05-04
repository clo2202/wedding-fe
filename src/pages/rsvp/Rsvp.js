import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import Button from "@material-ui/core/Button";
import AddCircleOutlineOutlinedIcon from "@material-ui/icons/AddCircleOutlineOutlined";
import * as styles from "./Rsvp.module.scss";
import {
  TextInput,
  RadioButtons,
  RsvpDropdown,
  RsvpDialogue
} from "../../components/";

const Rsvp = () => {
  const [name, setName] = useState("");
  const [rsvpResponse, setRsvpResponse] = useState(null);
  const [mealChoice, setMealChoice] = useState("");

  const [plusOneName, setPlusOneName] = useState("");
  const [plusOneMealChoice, setPlusOneMealChoice] = useState("");

  const [showPlusOne, setShowPlusOne] = useState(false);

  const [dialogueOpen, setDialogueOpen] = useState(false);

  const [redirect, setRedirect] = useState(false);

  const handleFormSubmit = e => {
    e.preventDefault();
    setDialogueOpen(true);
  };

  const handleChange = e => {
    if (e.target.value === "true") {
      setRsvpResponse(true);
    } else {
      setRsvpResponse(false);
    }
  };

  const handleDialogueConfirm = () => {
    console.log(
      `Name: ${name}, RSVP: ${rsvpResponse}, Meal Choice: ${mealChoice}. Guest Name: ${plusOneName}, Guest Meal Choice: ${plusOneMealChoice}`
    );
    setDialogueOpen(false);
    setRedirect(true);
  };

  const handleDialogueCancel = () => {
    setDialogueOpen(false);
  };

  return (
    <div className={styles.container}>
      <h1>RSVP</h1>
      <p>
        Please complete the form below to let us know if you can make it to the
        wedding.
      </p>
      <form className={styles.form} onSubmit={handleFormSubmit}>
        <TextInput setName={setName} label={"Full Name"} value={name} />
        <RadioButtons rsvpResponse={rsvpResponse} handleChange={handleChange} />
        <RsvpDropdown
          mealChoice={mealChoice}
          setMealChoice={setMealChoice}
          label={"Meal Preference"}
        />
        {showPlusOne ? null : (
          <div className={styles.plus}>
            <button
              className={styles.addGuest}
              onClick={() => setShowPlusOne(true)}
            >
              <AddCircleOutlineOutlinedIcon />
            </button>
            <p>Add a Guest</p>
          </div>
        )}
        {showPlusOne && (
          <div className={styles.guestForm}>
            <TextInput
              setName={setPlusOneName}
              label={"Guest's Full Name"}
              value={plusOneName}
            />
            <RsvpDropdown
              mealChoice={plusOneMealChoice}
              setMealChoice={setPlusOneMealChoice}
              label={"Guest's Meal Preference"}
            />
          </div>
        )}
        <Button
          type="submit"
          variant="outlined"
          className={styles.submitButton}
        >
          Submit
        </Button>
      </form>
      <RsvpDialogue
        open={dialogueOpen}
        name={name}
        rsvpResponse={rsvpResponse}
        mealChoice={mealChoice}
        plusOneName={plusOneName}
        plusOneMealChoice={plusOneMealChoice}
        handleDialogueConfirm={handleDialogueConfirm}
        handleDialogueCancel={handleDialogueCancel}
      />
      {redirect && (
        <Redirect
          to={{
            pathname: "/confirmation",
          }}
        />
      )}
    </div>
  );
};

export default Rsvp;

// 1. Full name (text, required)
// 2. Attendance (radio, required)
// 3. Meal choice (dropdown, required)
// 4. Add a plus one RSVP
// 5. Submit button (log for now)
