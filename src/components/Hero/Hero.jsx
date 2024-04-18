import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Gipashu Aryan</h1>
        <p className={styles.description}>
          Welcome to my Portfolio!<br/>
          <br/>
          I am a proficient MERN stack developer, fortified by a robust understanding of Data Structures and
           Algorithms, complemented by a deep insight into the fundamentals of computer science.
        </p>
        <a
          href="MyCV.pdf" download="MyCV.pdf"
          className={styles.contactBtn}
        >
          Download CV
        </a>
      </div>
      <img
        src={getImageUrl("hero/mypic2.png")}
        alt="gipashu_image"
        className={styles.heroImg}
      />
      
    </section>
  );
};

export default Hero;
