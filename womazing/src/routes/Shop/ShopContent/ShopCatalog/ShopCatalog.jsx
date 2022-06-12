import React from "react";
import Button from "../../../../components/Button/Button";
import Cards from "./../../../../components/Cards/Cards";
import { useSelector } from "react-redux/es/exports";

/* Style */
import styles from "./ShopCatalog.module.scss";

const ShopCatalog = () => {
  const { items } = useSelector((state) => state.products);

  return (
    <div className={styles.root}>
      <>
        <span className={styles.count}>
          Показано: <span className={styles.showed}>{items.length}</span>
          <span className={styles.all}>{items.length}</span>
        </span>
        <Cards collection={items} className={styles.cards} />

        <span className={styles.count}>
          Показано: <span className={styles.showed}>{items.length}</span>
          <span className={styles.all}>{items.length}</span>
        </span>
        <div className={styles.group}>
          <Button type="pagination">1</Button>
          <Button type="pagination">2</Button>
        </div>
      </>
    </div>
  );
};

export default ShopCatalog;
