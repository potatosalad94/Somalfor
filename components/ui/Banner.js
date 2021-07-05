// import Image from "next/image";
import React from "react";
import styles from "./Banner.module.scss";
import { Link, animateScroll as scroll } from "react-scroll";
import { Container } from "react-bootstrap";
import { FaArrowRight } from "react-icons/fa";

const Banner = () => {
  return (
    <div
      className={styles.banner}
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.4),rgba(0,0,0,0.4)), url(/images/banner.jpeg)`,
      }}
    >
      <Container>
        <div className={styles.bannerText}>
          <p>
            <strong>Améliorer la qualité de vie à Madagascar</strong>, en
            apportant&nbsp;
            <br className={styles.hide} />
            notre expertise et notre&nbsp;
            <br className={styles.hide} />
            expérience de l’eau.
          </p>

          <Link
            to="contact"
            smooth={true}
            offset={-70}
            duration={500}
            className={styles["btn-flat"]}
          >
            Contact <FaArrowRight />
          </Link>
        </div>
      </Container>
    </div>

    // <div className={styles.bannerContainer}>
    //   <Image
    //     src="/images/banner.jpeg"
    //     objectFit="cover"
    //     layout="responsive"
    //     // objectPosition="0px -300px"
    //     width={1280}
    //     height={450}
    //     alt="banner"
    //   />
    // </div>
  );
};

export default Banner;
