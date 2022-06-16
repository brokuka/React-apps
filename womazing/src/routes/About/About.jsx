import React from "react";
import Breadcrumb from "../../components/Breadcrumbs/Breadcrumb";
import Col from "../../components/Col/Col";
import Row from "../../components/Row/Row";
import Breadcrumbs from "./../../components/Breadcrumbs/Breadcrumbs";
import Main from "./../../components/Main/Main";

/* Style */
import styles from "./About.module.scss";

const About = () => {
  return (
    <Main block>
      <Breadcrumbs title="О бренде">
        <Breadcrumb href={1} title="О бренде" />
      </Breadcrumbs>

      <Row className={styles.content} wrap>
        <Col>
          <Row>
            <Col def={5} tb={12}>
              <picture>
                <source srcSet="/images/about/1.webp" type="image/webp" />
                <img
                  className="img"
                  src="/images/about/1.jpg"
                  alt="Girl"
                  width={442}
                  height={547}
                />
              </picture>
            </Col>

            <Col def={6} tb={12}>
              <div class={styles.text_group}>
                <h3 class={styles.text_title}>Идея и женщина</h3>
                <p class={styles.text}>
                  Womazing была основана в 2010-ом и стала одной из самых
                  успешных компаний нашей страны. Как и многие итальянские
                  фирмы, Womazing остаётся семейной компанией, хотя ни один из
                  членов семьи не является модельером. Мы действуем по успешной
                  формуле, прибегая к услугам известных модельеров для создания
                  своих коллекций. Этот метод был описан критиком моды Колином
                  Макдауэллом как форма дизайнерского со-творчества, характерная
                  для ряда итальянских prêt-a-porter компаний.
                </p>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </Main>
  );
};

export default About;
