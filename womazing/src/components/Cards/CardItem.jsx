import React from "react";
import cn from "classnames";

/* Style */
import styles from "./Card.module.scss";
import { Link } from "react-router-dom";
import { PropTypes } from "prop-types";

const CardItem = ({ link, className, href, children }) => {
  return (
    <>
      {link ? (
        <Link className={cn(styles.item, className)} to={href}>
          {children}
        </Link>
      ) : (
        <div className={cn(styles.item, className)}>{children}</div>
      )}
    </>
  );
};

CardItem.propTypes = {
  link: PropTypes.bool,
  href: PropTypes.string,
  className: PropTypes.string,
};

export default CardItem;
