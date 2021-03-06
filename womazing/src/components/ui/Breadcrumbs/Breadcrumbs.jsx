import React from "react";
import { Link } from "react-router-dom";
import Breadcrumb from "./components/Breadcrumb";
import { AppRoute } from "../../../utils/constants";

/* Style */
import styles from "./Breadcrumbs.module.scss";

const Breadcrumbs = ({ children, title }) => {
  return (
    <>
      <h1 className={styles.title}>{title}</h1>
      <span className={styles.root} aria-label="breadcrumb">
        <Link className={styles.link} to={AppRoute.HOME}>
          Главная
        </Link>

        {React.Children.map(children, ({ props }) => (
          <Breadcrumb
            title={props.title}
            href={props.href ? props.href : null}
          />
        ))}
      </span>
    </>
  );
};

export default Breadcrumbs;
