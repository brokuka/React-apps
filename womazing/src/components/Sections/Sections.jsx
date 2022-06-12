import React from "react";
import DreamTeam from "./blocks/DreamTeam/DreamTeam";
import ImportantToUs from "./blocks/ImportantToUs/ImportantToUs";
import NewCollection from "./blocks/NewCollection/NewCollection";

import styles from "./Section.module.scss";

const Section = () => {
  return (
    <>
      <NewCollection root={styles.root} title={styles.title} />
      <ImportantToUs root={styles.root} title={styles.title} />
      <DreamTeam root={styles.root} title={styles.title} />
    </>
  );
};

export default Section;
