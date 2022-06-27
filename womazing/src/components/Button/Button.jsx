import React from "react";
import cn from "classnames";
import PropTypes from "prop-types";

/* Style */
import styles from "./Button.module.scss";

const Button = ({
  active,
  onClick,
  children,
  type,
  subtype,
  fill,
  cover,
  color,
  innerRef,
  className,
  maxWidth,
  height,
  disabled,
  submit,
  ...props
}) => {
  const onSubmit = async (e) => {
    await e;
  };

  return (
    <button
      onClick={onClick}
      style={{
        maxWidth: maxWidth,
        backgroundColor: color,
        height: height,
      }}
      className={cn(styles.root, className, {
        [styles.fill]: fill,
        [styles.cover]: cover,
        [styles.mobile]: type === "mobile",
        [styles.ghost]: type === "ghost",
        [styles.filter]: type === "filter",
        [styles.filter_active]: type === "filter" && active,
        [styles.pagination]: type === "pagination",
        [styles.size]: type === "size",
        [styles.color]: type === "colors" && color,
        [styles.count]: type === "count",
        [styles.cart_count]: type === "cartCount",
        [styles.cart_item_remove]: type === "cartItemRemove",
        [styles.cart_refresh]: type === "cartRefresh",
        [styles.coupon]: type === "coupon",
        [styles.arrow_scroll]: type === "arrow_scroll",
        [styles.slider_prev || className]: type === "sliderPrev",
        [styles.slider_next || className]: type === "sliderNext",
        [styles.disabled]: disabled,
      })}
      ref={innerRef}
      disabled={disabled}
      {...props}
      onSubmit={onSubmit}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  active: PropTypes.bool,
  //   onClick: PropTypes.oneOfType(PropTypes.func, PropTypes.func),
  type: PropTypes.string,
  color: PropTypes.string,
  fill: PropTypes.bool,
  cover: PropTypes.bool,
  className: PropTypes.string,
};

export default Button;
