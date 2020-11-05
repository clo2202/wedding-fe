import React from "react";
import * as styles from "./Info.module.scss";
import StarRatings from "react-star-ratings";
import { Map } from "../../components";

const Info = () => {
  return (
    <div className={styles.container}>
      <section className={styles.hotels}>
        <h5>Hotels (closest to venue)</h5>
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
        <a
          href="https://www.jurysinns.com/hotels/leeds"
          target="_blank"
          rel="noopener noreferrer"
        >
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
        <p>
          There are plenty of Airbnbs available in and around Leeds. We
          recommend you search for places at Leeds Docks as this area is close
          to the venue.
        </p>
        <a
          href="https://www.airbnb.co.uk/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Search Now
        </a>
      </section>
      <section className={styles.travel}>
        <h5>Travel</h5>
        <h6>Parking</h6>
        <p>
          There is plenty of free parking available at the venue, with disabled parking by
          the entrance.
        </p>
        <h6>Train</h6>
        <p>Leeds Train Station is located 2.5 miles away from the venue.</p>
        <h6>Taxis</h6>
        <p>
          Uber is available in Leeds but if you're more old school, below are
          the names &amp; numbers of local taxi services.
        </p>
        <h6>Direction &amp; Map</h6>
        <Map />
      </section>
    </div>
  );
};

export default Info;
