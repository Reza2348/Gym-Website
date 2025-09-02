import React from "react";
import styles from "./OurSection.module.css";

const stats = [
  {
    number: "96%",
    label: "Client Satisfaction",
    desc: "Our Members Love Their Results And Experience",
    color: "#ef4444",
  },
  {
    number: "+5",
    label: "Years Of Experience",
    desc: "Trust In Our Proven Track Record Of Transforming",
    color: "#ef4444",
  },
  {
    number: "+800",
    label: "Active Members",
    desc: "Join Our Thriving Fitness Community",
    color: "#ef4444",
  },
  {
    number: "24/7",
    label: "Support Available",
    desc: "Expert Assistance Whenever You Need It",
    color: "#ef4444",
  },
];

const OurSection = () => {
  return (
    <section className={styles.ourSection}>
      <div className={styles.container}>
        {stats.map((item, index) => (
          <div key={index} className={styles.card}>
            <h2 className={styles.number} style={{ color: item.color }}>
              {item.number}
            </h2>
            <h3 className={styles.label}>{item.label}</h3>
            <p className={styles.desc}>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurSection;
