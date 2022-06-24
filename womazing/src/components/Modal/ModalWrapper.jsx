import React from "react";
import Modal from "../Modal/Modal";
import { CSSTransition } from "react-transition-group";

/* Style */
import styles from "./Modal.module.scss";

const ModalWrapper = ({ state, onChangeState }) => {
  return (
    <CSSTransition
      in={state}
      timeout={100}
      classNames={{
        enterActive: styles.enter,
        enterDone: styles.enterActive,
        exitActive: styles.exitActive,
        exitDone: styles.exit,
      }}
      unmountOnExit
      mountOnEnter
    >
      <Modal state={state} changeState={onChangeState} />
    </CSSTransition>
  );
};

export default ModalWrapper;
