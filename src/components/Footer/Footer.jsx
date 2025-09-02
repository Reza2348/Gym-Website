import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.topSection}>
        <h2 className={styles.title}>
          Fit <span className={styles.highlight}>Maker</span>
          <p className={styles.subtitle}>Transform Your Body</p>
          <p className={styles.subtitlee}>
            Transform Your Body with FitMaker, Your Trusted Partner in Fitness.
            With Over 5 Years of Experience, We Offer Expert Coaching, Tailored
            Workout Plans, and Comprehensive Nutritional Guidance. Join Our
            Community and Start Your Journey Towards a Healthier, Stronger You.
            Ready to Make a Change?
          </p>
        </h2>

        <div className={styles.menus}>
          <div className={styles.menu}>
            <p>Company</p>
            <a href="#">About us</a>
            <a href="#">Our Services</a>
            <a href="#">Careers</a>
            <a href="#">Blog</a>
            <a href="#">Testimonial</a>
            <a href="#">Contact Us</a>
          </div>

          <div className={styles.menu}>
            <p>Resources</p>
            <a href="#">Fitness tools</a>
            <a href="#">Workout Videos</a>
            <a href="#">nutrition Guides</a>
            <a href="#">FAQ</a>
            <a href="#">Success Stories</a>
            <a href="#">Membership</a>
          </div>

          <div className={styles.menu}>
            <p>Programs</p>
            <a href="#">Weight Loss</a>
            <a href="#">Building muscles</a>
            <a href="#">Home Workout</a>
            <a href="#">Gym Plan</a>
            <a href="#">Our Plans</a>
            <a href="#">Fitness group</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
