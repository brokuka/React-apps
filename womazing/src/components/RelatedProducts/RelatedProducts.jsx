import React from "react";
import Cards from "../Cards/Cards";
import axios from "axios";
import { Link } from "react-router-dom";

/* Style */
import styles from "./RelatedProducts.module.scss";
import { useSelector } from "react-redux";

const RelatedProducts = React.memo(() => {
  const { current } = useSelector((state) => state.products);

  return (
    <>
      {current.related.length > 0 ? (
        <div className={styles.root}>
          <h2 className={styles.title}>Связанные товары</h2>
          <Cards collection={current.related} />
        </div>
      ) : null}
    </>
  );
});

export default RelatedProducts;
