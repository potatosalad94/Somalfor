import Navbar from "./navbar/Navbar";
import Banner from "../ui/Banner";
import styles from "./Layout.module.css";
import { Container } from "react-bootstrap";

const Layout = (props) => {
  return (
    <div>
      <Navbar />
      <Banner />
      <Container>
        <main className={styles.main}>{props.children}</main>
      </Container>
    </div>
  );
};

export default Layout;
