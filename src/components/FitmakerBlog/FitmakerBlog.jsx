import React from "react";
import styles from "./FitmakerBlog.module.css";
import Img from "../../assets/img/Frame 427.png";
import Img2 from "../../assets/img/Frame 437.png";

const FitmakerBlog = () => {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>
        Fitmaker <span className={styles.highlight}> Blog Posts </span>
      </h2>
      <p className={styles.subtitle}>
        Discover essential tips to maximize your workout results and reach your
        fitness goals faster.
      </p>

      <div className={styles.img}>
        <img src={Img} alt="" />
        <img src={Img2} alt="" />
      </div>
    </section>
  );
};

export default FitmakerBlog;
