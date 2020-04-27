import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";
import Divider from "@material-ui/core/Divider";
import * as styles from "./CustomDropdown.module.scss";

const CustomDropdown = ({ children, isOpen, onRequestClose }) => {
  return (
    <Dialog onClose={onRequestClose} open={isOpen} className={styles.dialogue}>
      <DialogTitle className={styles.title} disableTypography>
        Choose Calendar
      </DialogTitle>
      <List>
        {children.map(item => (
          <React.Fragment>
            <ListItem key={item} onClick={onRequestClose}>
              <ListItemText primary={item} className={styles.item}/>
            </ListItem>
            <Divider variant="middle"/>
          </React.Fragment>
        ))}
      </List>
    </Dialog>
  );
};

export default CustomDropdown;
