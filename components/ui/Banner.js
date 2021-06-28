import React from "react";
import Image from "next/image";
import styles from "./Banner.module.scss";

const Banner = () => {
  return (
    <div className={styles.bannerContainer}>
      <Image
        src="/images/banner.jpeg"
        objectFit="cover"
        layout="responsive"
        // objectPosition="0px -300px"
        width={1280}
        height={450}
        alt="banner"
      />
    </div>
  );
};

export default Banner;
