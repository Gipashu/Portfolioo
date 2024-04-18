import React, { useState } from "react";
import styles from "./About.module.css";
import Education from "./Education";
import Skills from "./Skills";

const About = () => {
  const [activeTab, setActiveTab] = useState("education");
  return (
    <section id="about" className={styles.container}>
      <h2 className={styles.title}>About</h2>

      <div>
        <div className={styles.aboutButtons}>
          <button
            className={activeTab === "education" ? "active" : ""}
            onClick={() => setActiveTab("education")}
          >
            Education
          </button>
          <button
            className={activeTab === "skills" ? "active" : ""}
            onClick={() => setActiveTab("skills")}
          >
            Skills
          </button>
        </div>
        <div className="tab-content">
          {activeTab === "education" ? <Education /> : <Skills />}
        </div>
      </div>
    </section>
  );
};

export default About;
