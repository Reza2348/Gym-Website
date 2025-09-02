import React from "react";
import styles from "./Our fitness.module.css";
import {
  FaCalculator,
  FaBalanceScale,
  FaAppleAlt,
  FaBullseye,
} from "react-icons/fa";

const tools = [
  {
    title: "Calorie Calculator",
    icon: <FaCalculator />,
    link: "#",
  },
  {
    title: "BMI Calculator",
    icon: <FaBalanceScale />,
    link: "#",
  },
  {
    title: "Macronutrient Calculator",
    icon: <FaAppleAlt />,
    link: "#",
  },
  {
    title: "Goal Setting Tool",
    icon: <FaBullseye />,
    link: "#",
  },
];

const FitnessTools = () => {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>
        Our Fitness <span className={styles.highlight}>Tools</span>
      </h2>
      <p className={styles.subtitle}>
        Access a variety of tools to help you reach your fitness goals more
        effectively.
      </p>

      <div className={styles.toolsGrid}>
        {tools.map((tool, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.icon}>{tool.icon}</div>
            <h3 className={styles.cardTitle}>{tool.title}</h3>
            <a href={tool.link} className={styles.learnMore}>
              Learn More →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FitnessTools;
