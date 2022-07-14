import React from "react";
import Main from "./../../components/Main/Main";
import Breadcrumbs from "../../components/ui/Breadcrumbs/Breadcrumbs";
import Breadcrumb from "../../components/ui/Breadcrumbs/components/Breadcrumb";
import Row from "../../components/Row/Row";
import Col from "../../components/Col/Col";
import Button from "../../components/ui/Button/Button";

/* Style */
import styles from "./Contacts.module.scss";

const Contacts = () => {
  return (
    <Main block header>
      <Breadcrumbs title="Контакты">
        <Breadcrumb href={1} title="Контакты" />
      </Breadcrumbs>

      <Row className={styles.root}>
        <div className={styles.map}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2249.0538454423304!2d37.529893116086804!3d55.68805160445132!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54cf681cd88db%3A0x2a3fadda3df86f1b!2z0YPQuy4g0KHRgtGA0L7QuNGC0LXQu9C10LksIDI1LCDQnNC-0YHQutCy0LAsINCg0L7RgdGB0LjRjywgMTE5MzEx!5e0!3m2!1sru!2sge!4v1653660422349!5m2!1sru!2sge"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="map"
          />
        </div>

        <Row className={styles.text} wrap>
          <Col def={3} sd={12}>
            <span>Телефон</span>
            <a href="tel:74958235412" title="позвонить">
              +7 (495) 823-54-12
            </a>
          </Col>

          <Col def={3} sd={12}>
            <span>E-mail</span>
            <a href="mailto:hello@womazing.com" title="отправить сообщение">
              hello@womazing.com
            </a>
          </Col>

          <Col def={4} sd={12}>
            <span>Адрес</span>
            <a
              href="https://www.google.com/maps/dir//%D1%83%D0%BB.+%D0%A1%D1%82%D1%80%D0%BE%D0%B8%D1%82%D0%B5%D0%BB%D0%B5%D0%B9,+25+%D0%9C%D0%BE%D1%81%D0%BA%D0%B2%D0%B0+%D0%A0%D0%BE%D1%81%D1%81%D0%B8%D1%8F+119311/@55.6880486,37.5320818,16z/data=!4m5!4m4!1m0!1m2!1m1!1s0x46b54cf681cd88db:0x2a3fadda3df86f1b"
              target="_blank"
              title="Открыть на карте"
              rel="noreferrer"
            >
              г. Москва, 3-я улица Строителей, 25
            </a>
          </Col>
        </Row>

        <form className={styles.form}>
          <h3 className={styles.form_title}>Напишите нам</h3>

          <Row className={styles.form_content}>
            <input type="text" placeholder="Имя" />
            <input type="email" placeholder="E-mail" />
            <input type="tel" placeholder="Телефон" />
            <textarea placeholder="Сообщение" />
            <Button className={styles.send} fill>
              Отправить
            </Button>
          </Row>
        </form>
      </Row>
    </Main>
  );
};

export default Contacts;
