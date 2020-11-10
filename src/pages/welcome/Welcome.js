import React from "react";
import Card from "@material-ui/core/Card";

import image from "../../assets/wedding_logo.png";

import * as styles from "./Welcome.module.scss";

const Welcome = () => {
  return (
    <div className={styles.container}>
      <section className={styles.details}>
        <Card className={styles.welcome}>
          <div className={styles.card}>
            <h1>Welcome</h1>
            <p>
              2020 has been a strange old year, fingers and toes crossed that
              2021 will bring some sense of normality, and that we can celebrate
              our wedding with all our loved ones. <br />
              <br />
              This site should contain all the info you need, we've tried to put
              as much as we can in one place. If you think something is missing
              then feel free to get in touch with us!
              <br />
              <br />
              We can't wait to share our special day with you.
              <br />
              <br />
              Lots of love.
              <br />
              <br />
              Chloe &amp; Joe
              <br />
              xxx
            </p>
          </div>
        </Card>
      </section>
        <img src={image} alt="Chloe & Joe" />
    </div>
  );
};

export default Welcome;
