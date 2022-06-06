import React from "react";
import Button from "../Button/Button";
import Icon from "../Icon/Icon";
import { NavLink, Link } from "react-router-dom";
import cn from "classnames";

/* Style */
import styles from "./App-header.module.scss";
import Container from "../Container/Container";

const navLinks = [
  {
    title: "Главная",
    href: "/",
    activeClass: "active",
  },
  {
    title: "Магазин",
    href: "/shop",
    activeClass: "active",
  },
  {
    title: "О бренде",
    href: "/about",
    activeClass: "active",
  },
  {
    title: "Контакты",
    href: "/contacts",
    activeClass: "active",
  },
];

const AppHeader = () => {
  return (
    <header className={styles.root} data-scroll-header>
      <Container>
        <div className={styles.inner}>
          <Link className={styles.logo} to="/">
            <Icon name="logo" href="logo" />
            <span>Womazing</span>
          </Link>
          <nav className={styles.nav}>
            <ul className={styles.nav_list}>
              {navLinks.map((link, index) => (
                <li key={index}>
                  <NavLink
                    className={({ isActive }) =>
                      cn(styles.nav_link, {
                        [styles.active]: isActive,
                      })
                    }
                    to={link.href}
                  >
                    {link.title}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
          <div className={styles.items}>
            <div className={styles.items_group}>
              <Button type="mobile">
                <Icon name="mobile" href="mobile" />
              </Button>
              <a className="call" href="tel:74958235412">
                <span>+7 (495) 823-54-12</span>
              </a>
            </div>
            <Link className="cart" to="/cart">
              <Icon name="cart" href="cart" />
            </Link>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default AppHeader;
