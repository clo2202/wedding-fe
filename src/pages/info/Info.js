import React from "react";
import * as styles from "./Info.module.scss";
import StarRatings from "react-star-ratings";

const Info = () => {
  return (
    <div className={styles.container}>
      <section className={styles.hotels}>
        <h5>Accomodation</h5>
        <h6>Holiday Inn Express (Armouries)</h6>
        <p>
          Located opposite the Royal Armouries, this is the closest hotel to the
          venue (1.5 miles away).
        </p>
        <StarRatings
          rating={4.1}
          starDimension="20px"
          starSpacing="5px"
          starRatedColor="#F3DE8A"
        />
        <a
          href="https://www.ihg.com/holidayinnexpress/hotels/gb/en/leeds/leecd/hoteldetail"
          target="_blank"
          rel="noopener noreferrer"
        >
          Book Now
        </a>
        <h6>Jurys Inn Leeds</h6>
        <p>
          Jurys Inn is located in Brewery Wharf, a short 10 min walk from Leeds
          train station and 1.8 miles away from the venue.
        </p>
        <StarRatings
          rating={4.1}
          starDimension="20px"
          starSpacing="5px"
          starRatedColor="#F3DE8A"
        />
        <a href="https://www.jurysinns.com/hotels/leeds" target="_blank" rel="noopener noreferrer">
          Book Now
        </a>
        <h6>Leeds Marriot Hotel</h6>
        <p>
          Smack bang in the centre of Leeds, the Marriot is 2.1 miles away from
          Thwaite Watermill.
        </p>
        <StarRatings
          rating={4.2}
          starDimension="20px"
          starSpacing="5px"
          starRatedColor="#F3DE8A"
        />
        <a
          href="https://www.marriott.com/hotels/travel/lbadt-leeds-marriott-hotel/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Book Now
        </a>
        <h6>Airbnb</h6>
        <p>There are plenty of Airbnbs available in and around Leeds.</p>
        <a href="https://www.airbnb.co.uk/" target="_blank" rel="noopener noreferrer">
          Search Now
        </a>
      </section>
      <section className={styles.travel}>
        <h5>Travel</h5>
        <h6>Parking</h6>
        <p>
          Thwaite Watermill is close to the M1, junction 43 from the South and
          junction 44 from the North. There is plenty of free parking available,
          with disabled parking by the entrance.
        </p>
        <h6>Train</h6>
        <p>Leeds Train Station is located 2.5 miles away from the venue.</p>
        <h6>Taxis</h6>
        <p>
          Uber is available in Leeds but if you're more old school, below are
          the names & numbers of local taxi services.
        </p>
        <h5>Gifts</h5>
        <p>
          Your attendance is the biggest gift you can give us, and so we do not
          expect any more than that on our wedding day. However, for those of
          you who do wish to give us a gift we have a honeymoon fund that you
          can contribute to. Please find any information on this below,
          alternatively we will have a box on the day for any Wedding cards you
          might like to give us.
        </p>
      </section>
    </div>
  );
};

export default Info;
