import { Link, animateScroll as scroll } from "react-scroll";

import styles from "./Navbar.module.scss";
// import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import { MenuItems } from "./MenuItems";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = (props) => {
  const [active, setActive] = useState(false);

  const handleMenuBurger = () => {
    setActive((prevState) => {
      return !prevState;
    });
  };

  const handleScrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <nav className={styles.navbarItems}>
      <div className={styles.navbarLogo} onClick={handleScrollToTop}>
        <Image
          src="/images/somalfor-logo.png"
          width={150}
          height={30}
          objectFit="contain"
          alt="Somalfor"
        />
      </div>

      <div className={styles.navbarMenuIcon}>
        {active ? (
          <FaTimes onClick={handleMenuBurger} />
        ) : (
          <FaBars onClick={handleMenuBurger} />
        )}
      </div>

      <ul
        className={
          !active
            ? `${styles.navbarMenu}`
            : `${styles.navbarMenu} ${styles.selected}`
        }
      >
        {MenuItems.map((item) => (
          <li key={item.title}>
            <Link
              className={styles.navLinks}
              activeClass={styles.active}
              spy={true}
              to={item.to}
              smooth={true}
              offset={-100}
              duration={500}
              onClick={handleMenuBurger}
            >
              <span>{item.title}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
