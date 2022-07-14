import React from "react";
import Breadcrumbs from "../../components/ui/Breadcrumbs/Breadcrumbs";
import Breadcrumb from "../../components/ui/Breadcrumbs/components/Breadcrumb";
import Row from "../../components/Row/Row";
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
