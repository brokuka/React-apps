import React from "react";
import { Controller } from "react-hook-form";

/* Style */
import styles from "./TextArea.module.scss";

const TextArea = React.forwardRef(
  ({ placeholder, name, control, className, children }, ref) => {
    return (
      <>
        {control ? (
          <Controller
            name={name}
            control={control}
            defaultValue={""}
            render={({ field }) => (
              <textarea placeholder={placeholder} ref={ref} {...field}>
                {children}
              </textarea>
            )}
          />
        ) : (
          <textarea name={name} placeholder={placeholder} ref={ref}>
            {children}
          </textarea>
        )}
      </>
    );
  }
);

export default TextArea;
