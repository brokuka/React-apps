import React from "react";
import { Link } from "react-router-dom";
import Cards from "../../../Cards/Cards";
import Button from "../../../ui/Button/Button";
import { useSelector } from "react-redux/es/exports";

/* Style */
import styles from "./NewCollection.module.scss";

const NewCollection = ({ root, title }) => {
  const { items } = useSelector((state) => state.products);
  const filtered = items?.filter((item) => item.newCollection);

  return (
    <>
      {filtered ? (
        <section className={root} id="new_collection">
          <h2 className={title}>Новая коллекция</h2>
          <Cards collection={filtered} />

          <div className={styles.button}>
            <Link to="/shop">
              <Button fill type="ghost">
                Открыть магазин
              </Button>
            </Link>
          </div>
        </section>
      ) : null}
    </>
  );
};

export default NewCollection;
