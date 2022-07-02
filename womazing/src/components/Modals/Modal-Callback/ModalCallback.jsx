import React from "react";
import ModalLayout from "../Modal-Layout/ModalLayout";
import PropTypes from "prop-types";
import CallbackForm from "./components/CallBack-Form/CallBackForm";
import CallbackFinished from "./components/Callback-Finished/Callback-Finished";

const getModalTitles = (type) => {
  const titles = {
    form: "Заказать обратный звонок",
    finished: "Отлично! Мы скоро вам перезвоним.",
  };

  return titles[type] ?? "Заголовок данного окна";
};

/**
 *
 * @param {{
 * type: "form" | "finished";
 * }}
 *
 */

const ModalCallback = ({ type }) => {
  const [currentType, setCurrentType] = React.useState("form");

  React.useEffect(() => {
    setCurrentType(type);
  }, [type]);

  return (
    <ModalLayout
      title={getModalTitles(currentType)}
      onExit={() => {
        setCurrentType(type);
      }}
    >
      {currentType === "form" && (
        <CallbackForm onClickButton={() => setCurrentType("finished")} />
      )}

      {currentType === "finished" && (
        <CallbackFinished
          onClickButton={
            type ? () => setCurrentType(type) : () => setCurrentType("form")
          }
        />
      )}
    </ModalLayout>
  );
};

ModalCallback.propTypes = {
  type: PropTypes.string,
};

ModalCallback.defaultProps = {
  type: "form",
};

export default ModalCallback;
