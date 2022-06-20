import React from "react";
import cn from "classnames";

/* Styles */
import styles from "./Col.module.scss";

const Col = ({ children, def, mb, tb, sd, ds, none, className }) => {
  return (
    <div
      className={cn(className, {
        [styles[`col-${def}`]]: def,
        [styles[`col-mb-${mb}`]]: mb,
        [styles[`col-tb-${tb}`]]: tb,
        [styles[`col-sd-${sd}`]]: sd,
        [styles[`col-ds-${ds}`]]: ds,
        [styles.mb_none]: none === "mb",
        [styles.tb_none]: none === "tb",
        [styles.sd_none]: none === "sd",
        [styles.ds_none]: none === "ds",
      })}
    >
      {children}
    </div>
  );
};

export default Col;
