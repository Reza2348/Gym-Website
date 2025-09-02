import React from "react";
import styles from "./OurPlans.module.css";

const plans = [
  {
    title: "Pro Plan",
    price: "99$/USDT",
    package: "Package",
    descriptionTitle: "Description",
    description:
      "Our Pro Plan offers advanced workouts and personalized nutrition coaching to help you reach your goals faster. Sign up right now!",
    features: [
      "Access to All Exercise Videos",
      "Progress Tracking",
      "Supportive Online Community",
      "Advanced, Personalized Workout Plans",
      "Comprehensive Nutrition Coaching",
      "Access to Advanced Workout Programs",
      "Body Composition Analysis",
    ],
  },
  {
    title: "Custom Plan",
    price: "149$/USDT",
    package: "Package",
    descriptionTitle: "Description",
    description:
      "Experience a fully tailored fitness experience with our Custom Plan. Work one-on-one with a dedicated trainer to achieve your goals.",
    features: [
      "Access to All Exercise Videos",
      "Progress Tracking",
      "Supportive Online Community",
      "Advanced, Personalized Workout Plans",
      "Comprehensive Nutrition Coaching",
      "Access to Advanced Workout Programs",
      "Body Composition Analysis",
    ],
  },
];

const OurPlans = () => {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>
        Our <span className={styles.highlight}>Plans</span>
      </h2>
      <p className={styles.subtitle}>
        Select the plan that suits your fitness goals and let our expert coaches
        guide you every step of the way.
      </p>

      <button className={styles.toggleBtn}>Monthly</button>
      <button className={styles.toggleBtn}>Annauly</button>

      <div className={styles.container}>
        <div className={styles.plans}>
          {plans.map((plan, index) => (
            <div key={index} className={styles.planCard}>
              <h4 className={styles.planLabel}>{plan.package}</h4>
              <h3 className={styles.planTitle}>{plan.title}</h3>

              <h4 className={styles.planLabel}>{plan.descriptionTitle}</h4>
              <p className={styles.planDescription}>{plan.description}</p>

              <p className={styles.planFeaturesTitle}>Features</p>
              <ul className={styles.planFeatures}>
                {plan.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>

              <p className={styles.planPrice}>{plan.price}</p>

              <button className={styles.planBtn}>Choose This Plan</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurPlans;
