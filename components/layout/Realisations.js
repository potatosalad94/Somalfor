import styles from "./Realisations.module.scss";
import Image from "next/image";

const Realisations = () => {
  return (
    <div id="realisations" className={styles.realisations}>
      <h1>
        Nos <span>réalisations</span> <br />à Madagascar
      </h1>
      <div className={styles.projects}>
        <div className={styles.projectDetails}>
          <div className={styles.projectContent}>
            <div className={styles.projectInfo}>
              <h3>
                <strong>2019</strong>
              </h3>

              <ul>
                <li>Durée du projet: 1 semaine</li>
                <li>XX L d'eau extrait</li>
                <li>XX personnes</li>
                <li>XX machine</li>
              </ul>
            </div>
          </div>
          <div>
            <Image
              src="/images/project-1.jpg"
              layout="fill"
              objectFit="cover"
              alt="project-1"
            />
          </div>
        </div>
        <div className={styles.projectDetails}>
          <div className={styles.projectContent}>
            <div className={styles.projectInfo}>
              <h3>
                <strong>2021</strong>
              </h3>

              <ul>
                <li>Durée du projet: 2 semaines</li>
                <li>XX L d'eau extrait</li>
                <li>XX personnes</li>
                <li>XX machine</li>
              </ul>
            </div>
          </div>
          <div>
            <Image
              src="/images/project-2.jpg"
              layout="fill"
              objectFit="cover"
              alt="project-1"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Realisations;
