import React from "react";
import styles from "./EducationCard.module.css";

const EducationCard = ({ title, instituteImage, name, passingYear, grade }) => {
  return (
    <div>
      <h2 className={styles.title}>{title}</h2>

      <div className={styles.educationCard}>
        <div className={styles.educationImage}>
          <img src={instituteImage} alt="Institute" />
        </div>
        <div className={styles.educationCardDetails}>
          <h2>{name}</h2>
          <p>Passing Year: {passingYear}</p>
          <p>Grade: {grade}</p>
        </div>
      </div>
    </div>
  );
}

export default EducationCard;
