import Navbar from "./navbar/Navbar";
import Banner from "../ui/Banner";
import styles from "./Layout.module.css";

const Layout = (props) => {
  return (
    <div>
      <Navbar />
      <Banner />
      <main className={styles.main}>{props.children}</main>
    </div>
  );
};

export default Layout;
