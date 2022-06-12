import React from "react";
import { Link, useResolvedPath, useMatch } from "react-router-dom";
import cn from "classnames";

/* Style */
import styles from "./Breadcrumbs.module.scss";

const Breadcrumb = ({ href, title }) => {
  let resolved = useResolvedPath(href);
  let match = useMatch({ path: resolved.pathname });

  return (
    <>
      {href ? (
        <Link
          className={cn(styles.link, {
            [styles.active]: match,
          })}
          to={href}
        >
          {title}
        </Link>
      ) : (
        <span className={styles.link}>{title}</span>
      )}
    </>
  );
};

export default Breadcrumb;
