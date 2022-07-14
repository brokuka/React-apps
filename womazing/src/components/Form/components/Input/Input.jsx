import React from "react";
import cn from "classnames";
import PropTypes from "prop-types";
import { Controller } from "react-hook-form";

/* Style */
import styles from "./Input.module.scss";

const Input = React.forwardRef(
  (
    {
      placeholder,
      className,
      type = "text",
      to,
      autoFocus,
      defaultStyles,
      fullWidth,
      name,
      control,
      error,
      ...props
    },
    ref
  ) => {
    return (
      <div className={styles.root}>
        {control ? (
          <Controller
            name={name}
            control={control}
            defaultValue={""}
            render={({ field }) => (
              <input
                style={{
                  width: fullWidth ? "100%" : null,
                }}
                className={
                  (className || defaultStyles) &&
                  cn(
                    className,
                    defaultStyles && {
                      [styles.text]: type === "text",
                      [styles.email]: type === "email",
                      [styles.tel]: type === "tel",
                      [styles.checkbox]: type === "checkbox",
                    }
                  )
                }
                placeholder={placeholder}
                type={type}
                autoFocus={autoFocus}
                ref={ref}
                {...props}
                {...field}
              />
            )}
          />
        ) : (
          <input
            style={{
              width: fullWidth ? "100%" : null,
            }}
            className={
              (className || defaultStyles) &&
              cn(
                className,
                defaultStyles && {
                  [styles.text]: type === "text",
                  [styles.email]: type === "email",
                  [styles.tel]: type === "tel",
                  [styles.checkbox]: type === "checkbox",
                }
              )
            }
            placeholder={placeholder}
            type={type}
            autoFocus={autoFocus}
            ref={ref}
            {...props}
          />
        )}
        {error && <p className={styles.error}>{error}</p>}
      </div>
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
  maxWidth: PropTypes.string,
};

Input.defaultTypes = {
  type: "text",
};

export default Input;
