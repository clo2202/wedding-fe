import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

const RsvpDialogue = ({
  open,
  name,
  rsvpResponse,
  mealChoice,
  plusOneName,
  plusOneMealChoice,
  handleDialogueConfirm,
  handleDialogueCancel
}) => {
  return (
    <div>
      <Dialog open={open} keepMounted onClose={() => {}}>
        <DialogTitle>{"Please check the details below are correct"}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Name: {name}
            <br />
            RSVP: {rsvpResponse ? "Yes" : "No"}
            <br />
            Meal Preference: {mealChoice}
            <br />
            {plusOneName !== "" ? (
              <React.Fragment>
                Guest Name: {plusOneName}
                <br />
                Guest Meal Preference: {plusOneMealChoice}
              </React.Fragment>
            ) : null}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDialogueCancel} color="primary">
            Cancel
          </Button>
          <Button onClick={handleDialogueConfirm} color="primary">
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default RsvpDialogue;
