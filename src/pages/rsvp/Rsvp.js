import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { Card, Button } from "@material-ui/core";
import AddCircleOutlineOutlinedIcon from "@material-ui/icons/AddCircleOutlineOutlined";

import { TextInput, RadioButtons, RsvpDialogue } from "../../components/";

import * as api from "../../utils/api";

import * as styles from "./Rsvp.module.scss";

const Rsvp = () => {
  const [name, setName] = useState("");
  const [rsvpResponse, setRsvpResponse] = useState(null);
  const [dietaryRequirements, setDietaryRequirements] = useState("");
  const [song, setSong] = useState("");
  const [plusOneName, setPlusOneName] = useState("");
  const [plusOneDietary, setPlusOneDietary] = useState("");
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
    const response = {
      name,
      rsvp: rsvpResponse,
      dietary_req: dietaryRequirements,
      song_suggestion: song,
      plus_one_name: plusOneName,
      plus_one_dietary_req: plusOneDietary
    }
    api.submitRsvp(response)
    setDialogueOpen(false);
    setRedirect(true);
  };

  const handleDialogueCancel = () => {
    setDialogueOpen(false);
  };

  const handleCancelGuest = () => {
    setShowPlusOne(false);
    setPlusOneName("");
    setPlusOneDietary("");
  };

  return (
    <div className={styles.container}>
      <h1>RSVP</h1>
      <p>
        Please complete the form below to let us know if you can make it to the
        wedding.
      </p>
      <Card className={styles.formContainer}>
        <form className={styles.form} onSubmit={handleFormSubmit}>
          <TextInput
            handleTextChange={setName}
            label={"Full Name"}
            value={name}
          />
          <RadioButtons
            rsvpResponse={rsvpResponse}
            handleChange={handleChange}
          />
          <TextInput
            handleTextChange={setDietaryRequirements}
            label={"Any Dietary Requirements?"}
            value={dietaryRequirements}
            required={false}
          />
          <TextInput
            handleTextChange={setSong}
            label={"Song Suggestion"}
            value={song}
            required={false}
          />
          {showPlusOne ? null : (
            <div className={styles.plus}>
              <button
                className={styles.addGuest}
                onClick={() => setShowPlusOne(true)}
              >
                <AddCircleOutlineOutlinedIcon />
                <p>Add a Guest</p>
              </button>
            </div>
          )}
          {showPlusOne && (
            <div className={styles.guestForm}>
              <TextInput
                handleTextChange={setPlusOneName}
                label={"Guest's Full Name"}
                value={plusOneName}
              />
              <TextInput
                handleTextChange={setPlusOneDietary}
                label={"Any Dietary Requirements?"}
                value={plusOneDietary}
                required={false}
              />
              <div className={styles.plus}>
                <button className={styles.addGuest} onClick={handleCancelGuest}>
                  <AddCircleOutlineOutlinedIcon />
                  <p>Remove Guest</p>
                </button>
              </div>
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
      </Card>
      <RsvpDialogue
        open={dialogueOpen}
        name={name}
        rsvpResponse={rsvpResponse}
        dietaryRequirements={dietaryRequirements}
        plusOneName={plusOneName}
        plusOneDietary={plusOneDietary}
        handleDialogueConfirm={handleDialogueConfirm}
        handleDialogueCancel={handleDialogueCancel}
      />
      {redirect && (
        <Redirect
          to={{
            pathname: "/confirmation",
            state: { rsvpResponse }
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
