import React from "react";
import Button from "../../../components/Button/Button";
import Cards from "../../../components/Cards/Cards";
import { useSelector } from "react-redux/es/exports";

/* Style */
import styles from "./ShopCatalog.module.scss";

const ShopCatalog = () => {
  const { items } = useSelector((state) => state.products);
  const { categoryId } = useSelector((state) => state.filter);

  const filteredItems = items.filter((item) => item.categoryId === categoryId);

  const View = () => {
    const count = (arr) => (
      <span className={styles.count}>
        Показано:
        <span className={styles.showed}>{arr.length}</span>
        <span className={styles.all}>{arr.length}</span>
      </span>
    );

    return (
      <>
        {categoryId ? (
          <>
            {count(filteredItems)}

            <Cards collection={filteredItems} className={styles.cards} />

            {count(filteredItems)}
          </>
        ) : (
          <>
            {count(items)}

            <Cards collection={items} className={styles.cards} />

            {count(items)}
          </>
        )}
      </>
    );
  };

  return (
    <div className={styles.root}>
      <View />

      <div className={styles.group}>
        <Button type="pagination">1</Button>
        <Button type="pagination">2</Button>
      </div>
    </div>
  );
};

export default ShopCatalog;
