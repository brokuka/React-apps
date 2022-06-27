import React from "react";
import cn from "classnames";
import PropTypes from "prop-types";

/* Style */
import styles from "./Input.module.scss";

const Input = React.forwardRef(
  (
    {
      placeholder,
      className,
      type,
      to,
      autoFocus,
      defaultStyles,
      innerRef,
      ...props
    },
    ref
  ) => {
    return (
      <input
        className={
          (className || defaultStyles) &&
          cn(
            className,
            defaultStyles && {
              [styles.root]: type === "text",
              [styles.email]: type === "email",
              [styles.tel]: type === "tel",
              [styles.checkbox]: type === "checkbox",
            }
          )
        }
        placeholder={placeholder}
        type={type}
        autoFocus
        ref={ref}
        {...props}
      />
    );
  }
);

Input.propTypes = {
  name: PropTypes.string,
  placeholder: PropTypes.string,
  className: PropTypes.string,
  type: PropTypes.string,
  autoFocus: PropTypes.bool,
  defaultStyles: PropTypes.bool,
};

Input.defaultTypes = {
  type: "text",
};

export default Input;
