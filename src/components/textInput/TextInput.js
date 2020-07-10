import React from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  root: {
    marginTop: "2%",
    marginBottom: "2%"
  }
});

const TextInput = ({
  handleTextChange,
  label,
  value,
  required = true,
  error = false,
  helperText
}) => {
  const classes = useStyles();
  return (
    <TextField
      classes={{ root: classes.root }}
      required={required}
      label={label}
      value={value}
      onChange={e => handleTextChange(e.target.value)}
      error={error}
      helperText={error && helperText}
    />
  );
};

export default TextInput;
