import React from "react";
import {
  List,
  ListItem,
  ListItemText,
  Dialog,
  DialogTitle,
  Divider
} from "@material-ui/core";

import * as styles from "./CustomDropdown.module.scss";

const CustomDropdown = ({ children, isOpen, onRequestClose }) => {
  return (
    <Dialog onClose={onRequestClose} open={isOpen} className={styles.dialogue}>
      <DialogTitle className={styles.title} disableTypography>
        Choose Calendar
      </DialogTitle>
      <List>
        {children.map(item => (
          <React.Fragment key={item}>
            <ListItem key={item} onClick={onRequestClose}>
              <ListItemText primary={item} className={styles.item} />
            </ListItem>
            <Divider variant="middle" />
          </React.Fragment>
        ))}
      </List>
    </Dialog>
  );
};

export default CustomDropdown;
