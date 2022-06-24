import React from "react";
import cn from "classnames";
import PropTypes from "prop-types";

/* Style */
import styles from "./Button.module.scss";

/**
 *
 * @param {{
 * type: "mobile" | "ghost" | "filter" | "pagination" | "size" | "colors" | "count" | "cartCount" | "cartItemRemove" | "coupon" | "arrow_scroll" | "sliderPrev" | "sliderNext";
 * }}
 *
 */

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
  ...props
}) => {
  return (
    <button
      onClick={onClick}
      style={{
        maxWidth: maxWidth,
        backgroundColor: color,
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
      })}
      ref={innerRef}
      {...props}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  active: PropTypes.bool,
  onClick: PropTypes.func,
  type: PropTypes.string,
  color: PropTypes.string,
  fill: PropTypes.bool,
  cover: PropTypes.bool,
  className: PropTypes.string,
};

export default Button;
