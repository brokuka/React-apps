import React from "react";
import Button from "../../../../Button/Button";
import { useDispatch } from "react-redux";
import { setModal } from "../../../../../../store/slices/modalSlice";

const CallbackFinished = ({ onClickButton }) => {
  const dispatch = useDispatch();

  return (
    <Button
      type="ghost"
      fill
      onClick={() => {
        dispatch(setModal(false));
        onClickButton();
      }}
      fullWidth
    >
      Закрыть
    </Button>
  );
};

export default CallbackFinished;
