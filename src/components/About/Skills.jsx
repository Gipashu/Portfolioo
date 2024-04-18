import React from "react";
import styles from "./Skills.module.css";
import SkillsCard from "../About/SkillsCard"

import data from "../../data/card.json"

const Skills = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div>
          <ul className={styles.items}>
            {data.map((item, index) => (
              <SkillsCard
              key={index}
              title={item.title}
              description={item.description}
              size={item.size}
              theme={item.theme}
              colour={item.colour}
              />
          ))}

            {/* <li className={styles.item}>
              <div>
                <IconContext.Provider value={{ color: "white", size: "5em" }}>
                  <SiExpress />
                </IconContext.Provider>
              </div>

              <div className={styles.itemText}>
                <h3>Express</h3>
                <p>
                  {" "}
                  I have leveraged Express to create server-side logic, handle
                  HTTP requests and responses, and organize the application's
                  structure efficiently.
                </p>
              </div>
            </li>

            <li className={styles.item}>
              <div>
                <IconContext.Provider value={{ color: "blue", size: "5em" }}>
                  <FaReact />
                </IconContext.Provider>
              </div>

              <div className={styles.itemText}>
                <h3>React</h3>
                <p>
                  I have utilized React to develop interactive and efficient web
                  applications, enabling me to create reusable UI components and
                  manage complex application state effectively.
                </p>
              </div>
            </li>
            <li className={styles.item}>
              <div>
                <IconContext.Provider value={{ color: "green", size: "5em" }}>
                  <IoLogoNodejs />
                </IconContext.Provider>
              </div>

              <div className={styles.itemText}>
                <h3>NodeJs</h3>
                <p>
                  {" "}
                  I have utilized Node.js to build scalable and high-performance
                  server-side applications, including RESTful APIs.
                </p>
              </div>
            </li>
            <li className={styles.item}>
              <div>
                <IconContext.Provider value={{ color: "yellow", size: "5em" }}>
                  <IoLogoJavascript />
                </IconContext.Provider>
              </div>

              <div className={styles.itemText}>
                <h3>JavaScript</h3>
                <p>
                  I have used JavaScript extensively to enhance user experience
                  on websites, create animations, and handle form validations.
                </p>
              </div>
            </li>
            <li className={styles.item}>
              <div>
                <IconContext.Provider value={{ color: "blue", size: "5em" }}>
                  <SiTailwindcss />
                </IconContext.Provider>
              </div>

              <div className={styles.itemText}>
                <h3>Tailwind CSS</h3>
                <p>
                  {" "}
                  I have adopted Tailwind CSS to rapidly prototype and style web
                  interfaces, achieving consistent and responsive designs across
                  different devices.
                </p>
              </div>
            </li>
          </ul>
        </div>
        <div>
          <ul className={styles.items}>
            <li className={styles.item}>
              <div>
                <IconContext.Provider value={{ color: "white", size: "5em" }}>
                  <GrMysql />
                </IconContext.Provider>
              </div>
              <div className={styles.itemText}>
                <h3>SQL</h3>
                <p>
                  {" "}
                  I have learned SQL to perform complex database operations,
                  including data manipulation, aggregation, and joining.
                </p>
              </div>
            </li>

            <li className={styles.item}>
              <div>
                <IconContext.Provider value={{ size: "5em" }}>
                  <TbBrandCpp />
                </IconContext.Provider>
              </div>
              <div className={styles.itemText}>
                <h3>C++</h3>
                <p>Skilled in C++, proficient in algorithms, data structures, and object-oriented programming. Experienced in developing efficient solutions and leveraging STL for rapid development.</p>
              </div>
            </li>
            <li className={styles.item}>
              <div>
                <IconContext.Provider value={{ size: "5em" }}>
                  <FaNetworkWired />
                </IconContext.Provider>
              </div>
              <div className={styles.itemText}>
                <h3>Computer Networks</h3>
                <p>
                  I have studied and implemented various networking concepts
                  such as TCP/IP protocols, routing algorithms, and network
                  security mechanisms to design and troubleshoot network
                  infrastructures for efficient data transmission and access.
                </p>
              </div>
            </li>
            <li className={styles.item}>
              <div>
                <IconContext.Provider value={{ size: "5em" }}>
                  <MdOutlineDataObject />
                </IconContext.Provider>
              </div>
              <div className={styles.itemText}>
                <h3>Object Oriented Programming</h3>
                <p>
                  I have learned OOPs principles such as abstraction,
                  inheritance, polymorphism, and encapsulation to design modular
                  and reusable software components, enhancing code
                  maintainability and scalability.
                </p>
              </div>
            </li>
            <li className={styles.item}>
              <div>
                <IconContext.Provider value={{ size: "5em" }}>
                  <FaGitAlt />
                </IconContext.Provider>
              </div>
              <div className={styles.itemText}>
                <h3>Git</h3>
                <p>
                  I have utilized Git for version control, collaborating with
                  team members on projects, and managing code repositories
                  efficiently.
                </p>
              </div>
            </li>
            <li className={styles.item}>
              <div>
                <IconContext.Provider value={{ size: "5em" }}>
                  <GrSystem />
                </IconContext.Provider>
              </div>
              <div className={styles.itemText}>
                <h3>Operating System</h3>
                <p>
                  {" "}
                  I have studied various operating systems' functionalities,
                  including process management, memory allocation, file systems,
                  and security mechanisms. 
                </p>
              </div>
            </li> */}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Skills;
