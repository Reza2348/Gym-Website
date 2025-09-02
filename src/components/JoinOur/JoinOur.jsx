import React from "react";
import styles from "./JoinOur.module.css";
import { CiUser } from "react-icons/ci";
import { MdEmail } from "react-icons/md";

const JoinOur = () => {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>
        Fitmaker <span className={styles.highlight}>Blog Posts</span>
      </h2>
      <p className={styles.subtitle}>
        Sign up now to unlock exclusive access to personalized workout plans,
        expert coaching, and a supportive community that will help you achieve
        your fitness goals.
      </p>

      <div className={styles.cardsContainer}>
        <div className={`${styles.card} ${styles.cardLarge}`}>
          <h2 className={styles.cardTitlee}>
            Personalized
            <span className={styles.highlightt}>Workout Plans</span>
          </h2>
          <p>
            Customized routines that match your fitness level and goals,
            ensuring you achieve the best results in the most efficient way.
          </p>
        </div>

        <div className={styles.card}>
          <h2 className={styles.cardTitle}>
            Expert <span className={styles.highlight}>Coaching</span>
          </h2>
          <p>
            Customized routines that match your fitness level and goals,
            ensuring you achieve the best results in the most efficient way.
          </p>
        </div>

        <div className={styles.card}>
          <h2 className={styles.cardTitle}>
            Community <span className={styles.highlight}>Support</span>
          </h2>
          <p>
            Customized routines that match your fitness level and goals,
            ensuring you achieve the best results in the most efficient way.
          </p>
        </div>

        <div className={styles.card}>
          <h2 className={styles.cardTitle}>
            Exclusive <span className={styles.highlight}>Resources</span>
          </h2>
          <p>
            Access premium content, including video tutorials, nutrition guides,
            and member-only discounts on fitness gear.
          </p>
        </div>
      </div>
      {/* <div className={styles.Reactt}>
        <a href=""></a>
        <a href=""></a>
        <div>
          <label className={styles.lab}>Name</label>
          <input
            className={styles.inpu}
            type="text"
            placeholder="Enter Your Name"
          />
        </div>
        <div>
          <label>E-Mail</label>
          <MdEmail />
          <input
            className={styles.inpu}
            type="text"
            placeholder="Enter Your E-Mail"
          />
        </div>
        <button className={styles.btn}>Sign Up</button>
        <p>--- or---</p>
        <button className={styles.btn}>Sign Up With Google</button>
      </div> */}
    </section>
  );
};

export default JoinOur;
