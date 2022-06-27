import FocusTrap from "focus-trap-react";
import React from "react";
import Button from "../Button/Button";
import Icon from "../Icon/Icon";
import PropTypes from "prop-types";
import { motion, AnimatePresence } from "framer-motion";

/* Style */
import styles from "./index.module.scss";

const ModalLayout = ({
  state,
  changeState,
  style,
  title,
  closeButton,
  closeOnBackdrop,
  closeOnEscape,
  children,
  onExit,
  exitButton,
}) => {
  const modalRoot = React.useRef(null);
  const modalClose = React.useRef(null);
  const scrollY = window.scrollY;
  const scrollX = window.scrollX;

  function onEscape(e) {
    if (e.key !== "Escape") return;

    onClose();
  }

  function onScroll() {
    window.scroll(scrollX, scrollY);
  }

  function dettachEvents() {
    window.removeEventListener("keydown", onEscape);
    window.removeEventListener("scroll", onScroll);
  }

  function attachEvents() {
    if (!state) return;

    if (closeOnEscape) {
      window.addEventListener("keydown", onEscape);
    }

    window.addEventListener("scroll", onScroll);
  }

  React.useEffect(() => {
    attachEvents();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state]);

  const onClose = React.useCallback(() => {
    dettachEvents();
    changeState();
    onExit();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state]);

  React.useEffect(() => {
    if (exitButton) {
      onClose();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [exitButton]);

  const onClickOverlay = (e) => {
    const target = e.target;
    if (target === modalRoot.current && closeOnBackdrop) {
      onClose();
    }
  };

  return (
    <AnimatePresence>
      {state && (
        <FocusTrap>
          <motion.div
            className={styles.root}
            onClick={onClickOverlay}
            ref={modalRoot}
            style={style}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className={styles.content}>
              {closeButton ? (
                <Button
                  className={styles.close}
                  onClick={onClose}
                  innerRef={modalClose}
                >
                  <Icon name="x" href="x" />
                </Button>
              ) : null}

              <h3 className={styles.title}>{title}</h3>

              {children}
            </div>
          </motion.div>
        </FocusTrap>
      )}
    </AnimatePresence>
  );
};

ModalLayout.propTypes = {
  state: PropTypes.bool,
  changeState: PropTypes.func,
  title: PropTypes.string,
  closeButton: PropTypes.bool,
  closeOnBackdrop: PropTypes.bool,
  closeOnEscape: PropTypes.bool,
};

ModalLayout.defaultProps = {
  closeButton: true,
  closeOnBackdrop: true,
  closeOnEscape: true,
};

export default ModalLayout;
