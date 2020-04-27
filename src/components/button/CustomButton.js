import React from "react";
import Button from "@material-ui/core/Button";
import EventIcon from "@material-ui/icons/Event";
import * as styles from './CustomButton.module.scss';

const CustomButton = ({ onClick, children }) => {
  return (
    <Button onClick={onClick} variant="outlined">
      <EventIcon className={styles.icon}/>
      {children}
    </Button>
  );
};

export default CustomButton;
