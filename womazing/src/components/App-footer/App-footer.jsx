import React from "react";
import { Link, NavLink } from "react-router-dom";
import Col from "../Col/Col";
import Container from "../Container/Container";
import Icon from "../ui/Icon/Icon";
import Row from "../Row/Row";
import cn from "classnames";

/* Style */
import styles from "./App-footer.module.scss";

const navigation = [
  {
    title: "Главная",
    href: "/",
  },
  {
    title: "Магазин",
    href: "/shop",
  },
  {
    title: "О бренде",
    href: "/about",
  },
  {
    title: "Контакты",
    href: "/contacts",
  },
];

const socialsGroup = [
  {
    href: "/",
    svg: {
      name: "instagram",
      href: "instagram",
    },
  },
  {
    href: "/",
    svg: {
      name: "facebook",
      href: "facebook",
    },
  },
  {
    href: "/",
    svg: {
      name: "twitter",
      href: "twitter",
    },
  },
];

const clothesList = [
  {
    title: "Пальто",
    href: "/",
  },
  {
    title: "Свитшоты",
    href: "/",
  },
  {
    title: "Кардиганы",
    href: "/",
  },
  {
    title: "Толстовки",
    href: "/",
  },
];

const AppFooter = () => {
  return (
    <footer className={styles.root}>
      <Container>
        <Row className={styles.line_1}>
          <Col def="auto">
            <Link className={styles.logo} to="/">
              <Icon name="logo" href="logo" />
              <span>Womazing</span>
            </Link>
          </Col>

          <Col def={5} tb={12}>
            <nav>
              <ul className={styles.nav_list}>
                {navigation.map((item, index) => (
                  <li key={index}>
                    <NavLink
                      className={({ isActive }) =>
                        cn(styles.nav_link, {
                          [styles.active]: isActive,
                        })
                      }
                      to={item.href}
                      key={index}
                    >
                      {item.title}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </nav>
          </Col>

          <Col def="auto">
            <div className={styles.items_group}>
              <a href="tel:74958235412" title="позвонить">
                <span>+7 (495) 823-54-12</span>
              </a>
              <a href="mailto:hello@womazing.com" title="отправить сообщение">
                <span>hello@womazing.com</span>
              </a>
            </div>
          </Col>
        </Row>

        <Row className={styles.line_2} wrap>
          <Col def={3} tb={12}>
            <ul className={styles.list_info}>
              <li>© Все права защищены</li>

              <li>
                <Link to="/">Политика конфиденциальности</Link>
              </li>

              <li>
                <Link to="/">Публичная оферта</Link>
              </li>
            </ul>
          </Col>

          <Col def={4} tb={12} none="tb">
            <ul className={styles.list_clothes}>
              {clothesList.map((item, index) => (
                <li key={index}>
                  <Link to={item.href}>{item.title}</Link>
                </li>
              ))}
            </ul>
          </Col>

          <Col def="auto" tb={12}>
            <div className={styles.socials_payment}>
              <div className={styles.socials_group}>
                {socialsGroup.map((social, index) => (
                  <Link to={social.href} key={index}>
                    <Icon name={social.svg.name} href={social.svg.href} />
                  </Link>
                ))}
              </div>
              <div className={styles.payment_group}>
                <Icon name="visa" href="visa" />
                <Icon name="mastercard" href="mastercard" />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default AppFooter;
