import React from "react";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  root: {
    marginTop: "2%",
    marginBottom: "2%"
  }
});

const RsvpDropdown = ({ mealChoice, setMealChoice, label }) => {
  const classes = useStyles();
  return (
    <FormControl classes={{ root: classes.root }}>
      <InputLabel id="select-label">{label}</InputLabel>
      <Select
        labelId="select-label"
        value={mealChoice}
        onChange={e => setMealChoice(e.target.value)}
      >
        <MenuItem value={"meat"}>Meat</MenuItem>
        <MenuItem value={"vegetarian"}>Vegetarian</MenuItem>
        <MenuItem value={"vegan"}>Vegan</MenuItem>
      </Select>
    </FormControl>
  );
};

export default RsvpDropdown;
