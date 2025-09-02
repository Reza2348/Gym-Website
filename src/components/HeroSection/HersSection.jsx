import React from "react";
import Img from "../../assets/img/Group 2.png";
import styles from "./HeroSection.module.css";

const HeroSection = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.textContent}>
        <h1 className={styles.title}>
          Achive Your <br />
          <span className={styles.highlight}>Fitness Goals</span>
          <br />
          With FitMaker
        </h1>
        <p className={styles.description}>
          "Join the Fitmaker community and transform your fitness journey. Our
          expert coaches and personalized programs are designed to help you
          achieve your goals and exceed your expectations. Ready to make a
          change?"
        </p>
        <a href="#" className={styles.orderBtn}>
          Start Your Journey
        </a>
        <a href="#" className={styles.orderBtnd}>
          Explore Programs
        </a>
      </div>

      <div className={styles.imageContainer}>
        <div className={styles.bgShape}></div>

        <div className={styles.mainImage}>
          <img src={Img} alt="Gym" />
        </div>

        <div className={styles.deliveryBadge}>
          <div>
            <p className={styles.badgeTitle}> + 80</p>
            <p className={styles.badgeSubtitle}>Coaches</p>
          </div>
        </div>

        <div className={styles.locationBadge}>
          <div>
            <p className={styles.badgeTitle}> + 1500</p>
            <p className={styles.badgeSubtitle}>Trainers</p>
          </div>
        </div>

        <div className={styles.userBadge}>
          <div>
            <div className={styles.rating}>
              <p className={styles.badgeTitle}> + 1000</p>
              <p className={styles.badgeSubtitle}>Workout Videos</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
