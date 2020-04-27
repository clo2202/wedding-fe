import React from "react";
import { Link } from "react-router-dom";
import Card from "@material-ui/core/Card";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import * as styles from "./Welcome.module.scss";
import image from "../../assets/main-image.jpg";

const Welcome = () => {
  return (
    <div className={styles.container}>
      <section >
        <Card className={styles.welcome}>
          <div className={styles.card}>
            <h1>Welcome</h1>
            <p>
              Hopefully you can find everything you need here, we've tried to
              put as much information as we can in one place. If you think
              something is missing then feel free to get in touch with us!
              <br />
              <br />
              We can't wait to share our special day with you.
              <br />
              <br />
              Lots of love.
              <br />
              <br />
              Chloe & Joe
              <br />
              xxx
            </p>
            {/* <Link to={"/event"}>
              <ChevronRightIcon className={styles.icon} />
            </Link> */}
          </div>
        </Card>
      </section>
        <img src={image} alt="Chloe & Joe" />
    </div>
  );
};

export default Welcome;
