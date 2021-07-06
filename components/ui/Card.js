import React from "react";
import styles from "./Card.module.scss";
import Image from "next/image";

const Card = (props) => {
  const data = props.info;

  return (
    <div className={styles.projectDetails}>
      <div className={styles.projectContent}>
        <div className={styles.projectInfo}>
          <h3>
            <strong>{data.year}</strong>
          </h3>
          <ul>
            <li>Durée du projet: {data.duration} semaine</li>
            <li>{data.water} L d&apos;eau extrait</li>
            <li>{data.people} personnes</li>
            <li>{data.machine} machine</li>
          </ul>
        </div>
      </div>
      <div>
        <Image
          src={data.image}
          layout="fill"
          objectFit="cover"
          alt="project-1"
        />
      </div>
    </div>
  );
};

export default Card;
