import React from 'react';
import TextField from "@material-ui/core/TextField";

const TextInput = ({setName, label}) => {
    return (
        <TextField
          id="standard-basic"
          label={label}
          onChange={e => setName(e.target.value)}
        />
    );
};

export default TextInput;