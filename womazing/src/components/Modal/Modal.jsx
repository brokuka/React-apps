import FocusTrap from "focus-trap-react";
import React from "react";
import Button from "../Button/Button";
import Icon from "../Icon/Icon";
import cn from "classnames";
import { useTransition, animated, config } from "react-spring";
import { CSSTransition } from "react-transition-group";
import PropTypes from "prop-types";
import { motion, AnimatePresence } from "framer-motion";

/* Style */
import styles from "./Modal.module.scss";

const Modal = ({
  state,
  changeState,
  style,
  title,
  closeButton,
  closeOnBackdrop,
  closeOnEscape,
}) => {
  const body = document.body;
  const padding = window.innerWidth - document.documentElement.clientWidth;
  const modalRoot = React.useRef(null);
  const modalClose = React.useRef(null);

  const transitions = useTransition(state, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    // reverse: true,
    // config: config.molasses,
  });

  function onEscape(e) {
    if (e.key === "Escape") {
      onClose();
    }
  }

  function dettachEvents() {
    window.removeEventListener("keydown", onEscape);
  }

  const onInit = () => {
    if (closeOnEscape) {
      window.addEventListener("keydown", onEscape);
    }
    // body.style.overflow = "hidden";
    body.classList.add("no-scroll");
    body.style.paddingRight = `${padding}px`;
  };

  React.useEffect(() => {
    onInit();
  }, []);

  const onClose = () => {
    const styles = ["class", "style"];
    styles.forEach((i) => body.removeAttribute(i));

    changeState();
    dettachEvents();
  };

  const onClickClose = (e) => {
    const target = e.target;
    if (target === modalRoot.current && closeOnBackdrop) {
      onClose();
    }
  };

  return (
    // <div className={styles.root} onClick={onClickClose} ref={modalRoot}>
    //   <div className={styles.content}>
    //     {closeButton ? (
    //       <Button
    //         className={styles.close}
    //         onClick={onClose}
    //         innerRef={modalClose}
    //       >
    //         <Icon name="x" href="x" />
    //       </Button>
    //     ) : null}

    //     <h3 className={styles.title}>Заказать обратный звонок</h3>

    //     <input
    //       autoFocus
    //       className="modal_input"
    //       type="text"
    //       placeholder="Имя"
    //     />
    //     <input className="modal_input" type="email" placeholder="E-mail" />
    //     <input className="modal_input" type="tel" placeholder="Телефон" />

    //     <Button fill cover>
    //       Заказать звонок
    //     </Button>
    //   </div>
    // </div>

    <>
      <AnimatePresence>
        <FocusTrap>
          <motion.div
            className={styles.root}
            onClick={onClickClose}
            ref={modalRoot}
            style={style}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className={styles.content}>
              <Button
                className={styles.close}
                onClick={onClose}
                innerRef={modalClose}
              >
                <Icon name="x" href="x" />
              </Button>

              <h3 className={styles.title}>Заказать обратный звонок</h3>

              <input
                autoFocus
                className="modal_input"
                type="text"
                placeholder="Имя"
              />
              <input
                className="modal_input"
                type="email"
                placeholder="E-mail"
              />
              <input className="modal_input" type="tel" placeholder="Телефон" />

              <Button fill cover>
                Заказать звонок
              </Button>
            </div>
          </motion.div>
        </FocusTrap>
      </AnimatePresence>
      {/*       {transitions(
        (style, item) =>
          item && (
            <FocusTrap>
              <animated.div
                className={styles.root}
                onClick={onClickClose}
                ref={modalRoot}
                style={style}
              >
                <div className={styles.content}>
                  <Button
                    className={styles.close}
                    onClick={onClose}
                    innerRef={modalClose}
                  >
                    <Icon name="x" href="x" />
                  </Button>

                  <h3 className={styles.title}>Заказать обратный звонок</h3>

                  <input
                    autoFocus
                    className="modal_input"
                    type="text"
                    placeholder="Имя"
                  />
                  <input
                    className="modal_input"
                    type="email"
                    placeholder="E-mail"
                  />
                  <input
                    className="modal_input"
                    type="tel"
                    placeholder="Телефон"
                  />

                  <Button fill cover>
                    Заказать звонок
                  </Button>
                </div>
              </animated.div>
            </FocusTrap>
          )
                 <FocusTrap>
          <animated.div
            className={styles.root}
            onClick={onClickClose}
            ref={modalRoot}
            style={style}
          >
            <div className={styles.content}>
              <Button
                className={styles.close}
                onClick={onClose}
                innerRef={modalClose}
              >
                <Icon name="x" href="x" />
              </Button>

              <h3 className={styles.title}>Заказать обратный звонок</h3>

              <input
                autoFocus
                className="modal_input"
                type="text"
                placeholder="Имя"
              />
              <input
                className="modal_input"
                type="email"
                placeholder="E-mail"
              />
              <input className="modal_input" type="tel" placeholder="Телефон" />

              <Button fill cover>
                Заказать звонок
              </Button>
            </div>
          </animated.div>
        </FocusTrap> */}
    </>
  );
};

Modal.propTypes = {
  state: PropTypes.bool,
  changeState: PropTypes.func,
  title: PropTypes.string,
  closeButton: PropTypes.bool,
  closeOnBackdrop: PropTypes.bool,
  closeOnEscape: PropTypes.bool,
};

Modal.defaultProps = {
  closeButton: true,
  closeOnBackdrop: true,
  closeOnEscape: true,
};

export default Modal;
