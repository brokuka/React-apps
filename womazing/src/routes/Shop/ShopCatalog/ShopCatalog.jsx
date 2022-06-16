import React from "react";
import Button from "../../../components/Button/Button";
import Cards from "../../../components/Cards/Cards";
import { useSelector } from "react-redux/es/exports";

/* Style */
import styles from "./ShopCatalog.module.scss";

const ShopCatalog = () => {
  const products = useSelector((state) => state.products);
  const filter = useSelector((state) => state.filter);

  return (
    <>
      {filter.items ? (
        <div className={styles.root}>
          <>
            <span className={styles.count}>
              Показано:{" "}
              <span className={styles.showed}>{filter.items.length}</span>
              <span className={styles.all}>{filter.items.length}</span>
            </span>

            {filter.items ? (
              <Cards collection={filter.items} className={styles.cards} />
            ) : (
              <Cards collection={products.items} className={styles.cards} />
            )}

            <span className={styles.count}>
              Показано:{" "}
              <span className={styles.showed}>{filter.items.length}</span>
              <span className={styles.all}>{filter.items.length}</span>
            </span>
            <div className={styles.group}>
              <Button type="pagination">1</Button>
              <Button type="pagination">2</Button>
            </div>
          </>
        </div>
      ) : null}
    </>
  );
};

export default ShopCatalog;
