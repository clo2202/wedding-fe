import React from "react";
import * as styles from "./Header.module.scss"

const Header = () => {
  return (
    <header className={styles.header}>
      <h1>Joe & Chloe</h1>
      <p>26th June 2021</p>
    </header>
  );
};

export default Header;
