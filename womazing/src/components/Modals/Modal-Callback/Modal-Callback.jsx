import React from "react";
import ModalLayout from "..";
// import PropTypes from "prop-types";
import CallbackForm from "./components/CallBack-Form/CallBackForm";
import CallbackFinished from "./components/Callback-Finished/Callback-Finished";

/**
 *
 * @param {{
 * type: "form" | "finished";
 * }}
 *
 */

const getModalTitles = (type) => {
  const titles = {
    form: "Заказать обратный звонок",
    finished: "Отлично! Мы скоро вам перезвоним.",
  };

  return titles[type] ?? "Заголовок данного окна";
};

const ModalCallback = ({ state, onChangeState, type }) => {
  const [currentType, setCurrentType] = React.useState("form");
  const [exitButton, setExitButton] = React.useState(false);

  React.useEffect(() => {
    setCurrentType(type);
  }, [type]);

  return (
    <ModalLayout
      state={state}
      changeState={onChangeState}
      title={getModalTitles(currentType)}
      onExit={() => {
        setCurrentType(type);
        setExitButton(false);
      }}
      exitButton={exitButton}
    >
      {currentType === "form" && (
        <CallbackForm onClickButton={() => setCurrentType("finished")} />
      )}

      {currentType === "finished" && (
        <CallbackFinished exitButton={setExitButton} />
      )}
    </ModalLayout>
  );
};

ModalCallback.defaultProps = {
  type: "form",
};

export default ModalCallback;
