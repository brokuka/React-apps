import React from "react";
import Button from "../../Button";
import Icon from "../../../Icon/Icon";
import {
  increaseItemCart,
  decreaseItemCart,
  removeItemFromCart,
} from "../../../../store/slices/cartSlice";

/* Style */
import styles from "./ButtonCounter.module.scss";
import { useDispatch } from "react-redux";

const ButtonCounter = ({
  state,
  onChange,
  size,
  iconSize,
  filterItem,
  globalState,
}) => {
  const dispatch = useDispatch();

  const changeCount = (action) => {
    switch (action) {
      case "increase":
        state
          ? onChange((state) => state + 1)
          : dispatch(increaseItemCart(filterItem));
        break;

      case "decrease":
        if (state > 1 || globalState > 1) {
          state
            ? onChange((state) => state - 1)
            : dispatch(decreaseItemCart(filterItem));
        } else {
          if (window.confirm("Вы точно хотите удалить?")) {
            dispatch(removeItemFromCart(filterItem));
          }
        }

        break;

      default:
        return state;
    }
  };

  const customStyle = {
    width: size,
    height: size,
  };

  return (
    <div className={styles.root}>
      <Button onClick={() => changeCount("decrease")}>
        <Icon href="minus" name="minus" size={iconSize} />
      </Button>

      <span className={styles.count} tabIndex="-1" style={customStyle}>
        {state || globalState}
      </span>

      <Button onClick={() => changeCount("increase")}>
        <Icon href="plus" name="plus" size={iconSize} />
      </Button>
    </div>
  );
};

export default ButtonCounter;
