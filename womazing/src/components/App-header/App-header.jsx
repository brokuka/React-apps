import React from "react";
import Button from "../ui/Button/Button";
import Icon from "../ui/Icon/Icon";
import { NavLink, Link } from "react-router-dom";
import cn from "classnames";
import Container from "../Container/Container";
import ModalCallback from "../ui/Modals/Modal-Callback/ModalCallback";
import { setModal } from "../../store/slices/modalSlice";
import { useDispatch, useSelector } from "react-redux";

/* Style */
import styles from "./App-header.module.scss";

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
  const dispatch = useDispatch();
  const { total } = useSelector((state) => state.cart);
  const [active, setActive] = React.useState(false);

  const onChangeState = () => {
    dispatch(setModal(true));
    setActive(!active);
  };

  return (
    <>
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
                <Button type="mobile" onClick={onChangeState}>
                  <Icon name="mobile" href="mobile" />
                </Button>

                <a className={styles.call} href="tel:74958235412">
                  <span>+7 (495) 823-54-12</span>
                </a>
              </div>

              <Link className={styles.cart} to="/cart">
                {total > 0 && <span className={styles.count}>{total}</span>}
                <Icon name="cart" href="cart" />
              </Link>
            </div>
          </div>
        </Container>
      </header>
      {active && <ModalCallback onExit={() => setActive(false)} />}
      <Button />
    </>
  );
};

export default AppHeader;
