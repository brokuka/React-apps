import React from "react";
import Row from "../../components/Row/Row";
import Col from "../../components/Col/Col";
import cn from "classnames";
import { useSelector } from "react-redux";

/* Styles */
import styles from "./About.module.scss";

const AboutItem = ({ data, reverse }) => {
  return (
    <>
      {
        <Col def={12}>
          <Row className={cn(styles.content, { [styles.reverse]: reverse })}>
            <Col def="auto" tb={12}>
              <picture>
                <source srcSet={`${data.img.src}.webp`} type="image/webp" />
                <img
                  className="img"
                  src={`${data.img.src}.jpg`}
                  alt={data.alt}
                  width={442}
                  height={547}
                />
              </picture>
            </Col>

            <Col def="6" tb={12}>
              <div className={styles.text_group}>
                <h3 className={styles.text_title}>{data.text.title}</h3>
                {data.text.paragraph.map((p, index) => (
                  <p className={styles.text} key={index}>
                    {p.text}
                  </p>
                ))}
              </div>
            </Col>
          </Row>
        </Col>
      }
    </>
  );
};

export default AboutItem;
