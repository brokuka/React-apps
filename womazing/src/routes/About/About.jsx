import React from "react";
import Breadcrumb from "../../components/Breadcrumbs/Breadcrumb";
import Row from "../../components/Row/Row";
import Breadcrumbs from "./../../components/Breadcrumbs/Breadcrumbs";
import Main from "./../../components/Main/Main";
import { useSelector } from "react-redux/es/exports";
import AboutItem from "./AboutItem";

/* Style */
import styles from "./About.module.scss";

const About = () => {
  const { items } = useSelector((state) => state.about);

  return (
    <Main block header>
      <Breadcrumbs title="О бренде">
        <Breadcrumb href={1} title="О бренде" />
      </Breadcrumbs>

      {items ? (
        <Row className={styles.root} wrap>
          {items.map((item, index) => (
            <AboutItem key={index} data={item} reverse={item.reverse} />
          ))}
        </Row>
      ) : null}
    </Main>
  );
};

export default About;
