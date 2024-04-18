import React from "react";
import EducationCard from "./EducationCard";
import { getImageUrl } from "../../utils";
import styles from "./Education.module.css"


const Education = () => {
  return (
    <div className="education-section">
      <div className="education-item">
        <EducationCard
          title="Matriculation"
          instituteImage={getImageUrl("about/logo_r.jpg")}
          name="St Xavier's School"
          passingYear="2018"
          grade="92.4%"
        />
      </div>
      <div className="education-item">
        <EducationCard
          title="Intermediate"
          instituteImage={getImageUrl("about/jvm.png")}
          name="Jawahar Vidya Mandir Shyamali"
          passingYear="2020"
          grade="94.4%"
        />
      </div>
      <div className="education-item">
        
        <EducationCard
          title="B.Tech"
          instituteImage={getImageUrl("about/nit.png")}
          name="NIT JAMSHEDPUR"
          passingYear="2025"
          grade="8.06 CGPA"
        />
      </div>
    </div>
  );
};

export default Education;
