import React from 'react';
import TextField from "@material-ui/core/TextField";

const TextInput = ({setName, label, value}) => {
    return (
        <TextField
          required
          label={label}
          value={value}
          onChange={e => setName(e.target.value)}
        />
    );
};

export default TextInput;