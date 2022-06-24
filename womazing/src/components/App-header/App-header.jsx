import React from "react";
import Button from "../Button/Button";
import Icon from "../Icon/Icon";
import { NavLink, Link } from "react-router-dom";
import cn from "classnames";
import Modal from "../Modal/Modal";
import Container from "../Container/Container";
import { useTransition, animated, config } from "react-spring";

/* Style */
import styles from "./App-header.module.scss";
import { CSSTransition } from "react-transition-group";
import ModalWrapper from "../Modal/ModalWrapper";

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
  const [modal, setModal] = React.useState(false);

  const onChangeState = () => {
    setModal(!modal);
  };

  //   const transitions = useTransition(modal, {
  //     // from: { opacity: 0, transform: "translateY(-40px)" },
  //     // enter: { opacity: 1, transform: "translateY(0px)" },
  //     // leave: { opacity: 0, transform: "translateY(-40px)" },
  //     from: { opacity: 0 },
  //     enter: { opacity: 1 },
  //     leave: { opacity: 0 },
  //   });

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
      {/* {modal ? <Modal state={modal} changeState={onChangeState} /> : null}
       */}
      {/* {transitions(
        (style, item) =>
          item && (
            <Modal
              state={modal}
              style={style}
              changeState={onChangeState}
              aria-labelledby="spring-modal-title"
              aria-describedby="spring-modal-description"
            />
          )
      )} */}
      {/* <CSSTransition in={modal} unmountOnExit>
        <Modal
          state={modal}
          changeState={onChangeState}
          labelledBy
          describedBy
          aria-labelledby="spring-modal-title"
          aria-describedby="spring-modal-description"
        />
      </CSSTransition> */}
      {/* <Modal
        state={modal}
        changeState={onChangeState}
        labelledBy
        describedBy
        aria-labelledby="spring-modal-title"
        aria-describedby="spring-modal-description"
      /> */}
      {modal ? <Modal state={modal} changeState={onChangeState} /> : null}
      {/* <ModalWrapper state={modal} onChangeState={setModal} /> */}
    </>
  );
};

export default AppHeader;
