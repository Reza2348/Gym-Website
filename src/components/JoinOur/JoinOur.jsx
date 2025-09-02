import React, { useState } from "react";
import styles from "./JoinOur.module.css";
import { CiUser } from "react-icons/ci";
import { MdEmail } from "react-icons/md";
import { FcGoogle } from "react-icons/fc";

const JoinOur = () => {
  const [activeTab, setActiveTab] = useState("signup");

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.left}>
          <h2 className={styles.heading}>
            Join Our <span className={styles.highlight}>Fitness Community</span>
          </h2>
          <p className={styles.subtitle}>
            Sign up now to unlock exclusive access to personalized workout
            plans, expert coaching, and a supportive community that will help
            you achieve your fitness goals.
          </p>

          <div className={styles.cardsContainer}>
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>
                Personalized <span className={styles.red}>Workout Plans</span>
              </h3>
              <p>
                Customized routines that match your fitness level and goals,
                ensuring you achieve the best results in the most efficient way.
              </p>
            </div>

            <div className={styles.card}>
              <h3 className={styles.cardTitle}>
                Expert <span className={styles.red}>Coaching</span>
              </h3>
              <p>
                Work with certified trainers who guide you every step of the way
                to ensure you're on the right track.
              </p>
            </div>

            <div className={styles.card}>
              <h3 className={styles.cardTitle}>
                Community <span className={styles.red}>Support</span>
              </h3>
              <p>
                Join a vibrant community of fitness enthusiasts, share
                experiences, get motivated, and stay inspired.
              </p>
            </div>

            <div className={styles.card}>
              <h3 className={styles.cardTitle}>
                Exclusive <span className={styles.red}>Resources</span>
              </h3>
              <p>
                Access premium content, including video tutorials, nutrition
                guides, and member-only discounts on fitness gear.
              </p>
            </div>
          </div>
        </div>

        <div className={styles.right}>
          <div className={styles.tabs}>
            <button
              className={`${styles.tab} ${
                activeTab === "signup" ? styles.activeTab : ""
              }`}
              onClick={() => setActiveTab("signup")}
            >
              Sign Up
            </button>
            <button
              className={`${styles.tab} ${
                activeTab === "login" ? styles.activeTab : ""
              }`}
              onClick={() => setActiveTab("login")}
            >
              Login
            </button>
          </div>
          <form className={styles.form}>
            <label>Name</label>
            <div className={styles.inputBox}>
              <CiUser className={styles.icon} />
              <input type="text" placeholder="Enter Your Name" required />
            </div>

            <label>E-Mail</label>
            <div className={styles.inputBox}>
              <MdEmail className={styles.icon} />
              <input type="email" placeholder="Enter Your E-Mail" required />
            </div>

            <button className={styles.btn}>Sign Up</button>
            <p className={styles.or}>--- OR ---</p>
            <button className={styles.googleBtn}>
              <FcGoogle className={styles.googleIcon} /> Sign Up With Google
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default JoinOur;

