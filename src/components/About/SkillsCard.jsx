import React from "react";
import styles from "./Skills.module.css";
import { IoLogoJavascript } from "react-icons/io";
import { IconContext } from "react-icons";
import { FaReact } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { IoLogoNodejs } from "react-icons/io";
import { GrMysql } from "react-icons/gr";
import { TbBrandCpp } from "react-icons/tb";
import { FaNetworkWired } from "react-icons/fa";
import { MdOutlineDataObject } from "react-icons/md";
import { FaGitAlt } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { GrSystem } from "react-icons/gr";

const componentMap = {
    IoLogoJavascript: IoLogoJavascript,
    FaReact: FaReact,
    SiMongodb: SiMongodb,
    SiExpress: SiExpress,
    IoLogoNodejs: IoLogoNodejs,
    GrMysql: GrMysql,
    TbBrandCpp: TbBrandCpp,
    FaNetworkWired: FaNetworkWired,
    MdOutlineDataObject: MdOutlineDataObject,
    FaGitAlt: FaGitAlt,
    SiTailwindcss: SiTailwindcss,
    GrSystem: GrSystem
    // Add more components as needed
  };
const SkillsCard = ({ title, theme, colour, size, description }) => {
    return (
        // {data.map((item, index) => (
            <li className={styles.item}>
               <div>
                {theme && (
                  <IconContext.Provider value={{ color: colour?colour:"", size: size }}>
                  {React.createElement(componentMap[theme])}
                  </IconContext.Provider>
                )}
                </div>
              <div className={styles.itemText}>
                {title && <h3>{title}</h3>}
                {description && <p>{description}</p>}
              </div>
            </li>
    )
}
  
  export default SkillsCard;