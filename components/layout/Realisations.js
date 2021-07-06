import styles from "./Realisations.module.scss";
// import Image from "next/image";
import ReactPlayer from "react-player";
import Card from "../ui/Card";
import { ProjectItem } from "../ui/ProjectItem";

const Realisations = () => {
  return (
    <div id="realisations" className={styles.realisations}>
      <h1>
        Nos <span>réalisations</span> <br />à Madagascar
      </h1>
      <div className={styles.projects}>
        {ProjectItem.map((item) => {
          return <Card key={item.id} info={item} />;
        })}
      </div>
      <div className={styles.projectVideo}>
        <ReactPlayer
          className={styles.reactPlayer}
          width="100%"
          height="100%"
          url="https://www.youtube.com/watch?v=KfDecRwGvaI"
          controls
        />
      </div>
    </div>
  );
};

export default Realisations;
