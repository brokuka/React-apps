import React from "react";
import Breadcrumb from "../../components/Breadcrumbs/Breadcrumb";
import Row from "../../components/Row/Row";
import Breadcrumbs from "./../../components/Breadcrumbs/Breadcrumbs";
import Main from "./../../components/Main/Main";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { fetchAbout } from "../../store/slices/aboutSlice";
import axios from "axios";
import AboutItem from "./AboutItem";
import { dataUrls } from "../../utils/constants";

/* Style */
import styles from "./About.module.scss";

const About = () => {
  const dispatch = useDispatch();
  const { items } = useSelector((state) => state.about);

  React.useEffect(() => {
    dispatch(fetchAbout());
  }, []);

  return (
    <Main block header>
      <Breadcrumbs title="О бренде">
        <Breadcrumb href={1} title="О бренде" />
      </Breadcrumbs>

      {items ? (
        <Row className={styles.root} wrap>
          {/* <AboutItem data={items[0]} />
          <AboutItem data={items[1]} reverse /> */}
          {items.map((item) => (
            <AboutItem data={item} reverse={item.reverse} />
          ))}
        </Row>
      ) : null}
    </Main>
  );
};

export default About;
