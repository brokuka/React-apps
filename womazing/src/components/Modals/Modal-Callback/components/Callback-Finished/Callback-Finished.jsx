import React from "react";
import Button from "../../../../Button/Button";

const CallbackFinished = ({ exitButton }) => {
  return (
    <Button
      type="ghost"
      fill
      onClick={() => {
        exitButton(true);
      }}
    >
      Закрыть
    </Button>
  );
};

export default CallbackFinished;
