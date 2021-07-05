import styles from "./About.module.scss";
import Image from "next/image";

const About = () => {
  return (
    <div id="about" className={styles.about}>
      <div className={styles.imageAbout}>
        <Image
          src="/images/about.jpg"
          layout="fill"
          objectFit="cover"
          alt="about us"
        />
      </div>
      <div className={styles.aboutText}>
        <p>
          <strong>SOMALFOR</strong> est une société spécialisée dans la
          réalisation de forage d’eau.
          <br />
          <br />
          Notre but est de permettre à tout un chacun de pouvoir avoir{" "}
          <span>accès à l’eau potable</span>
          . Notre équipe possède une grande expérience dans ce domaine.
          <br />
          <br />
          Nos chantiers sont encadrés par des{" "}
          <span>professionnels compétents</span> locaux ou expatriés.
        </p>
      </div>
    </div>
  );
};

export default About;
