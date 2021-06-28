import styles from "./Navbar.module.scss";
import Link from "next/link";
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

  return (
    <nav className={styles.navbarItems}>
      <Link href="/">
        <>
          <div className={styles.navbarLogo}>
            <Image
              src="/images/somalfor-logo.png"
              width={150}
              height={30}
              objectFit="contain"
              alt="Somalfor"
            />
          </div>
        </>
      </Link>

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
            : `${styles.navbarMenu} ${styles.active}`
        }
      >
        {MenuItems.map((item) => (
          <li key={item.title}>
            <Link href={item.url}>
              <a className={styles.navLinks}>{item.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
