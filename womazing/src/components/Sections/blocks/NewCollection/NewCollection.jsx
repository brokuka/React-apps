import React from "react";
import Container from "../../../Container/Container";
import { Link } from "react-router-dom";
import Cards from "../../../Cards/Cards";
import Button from "../../../Button/Button";
import { useSelector, useDispatch } from "react-redux/es/exports";
import axios from "axios";
import { filterProducts } from "../../../../store/slices/productsSlice";

/* Style */
import styles from "./NewCollection.module.scss";

const NewCollection = ({ root, title }) => {
  const { items } = useSelector((state) => state.products);
  const filtered = items?.filter((item) => item.newCollection);

  return (
    <>
      {filtered ? (
        <section className={root} id="new_collection">
          <Container>
            <h2 className={title}>Новая коллекция</h2>
            <Cards collection={filtered} />

            <div className={styles.button}>
              <Link to="/shop">
                <Button fill type="ghost">
                  Открыть магазин
                </Button>
              </Link>
            </div>
          </Container>
        </section>
      ) : null}
    </>
  );
};

export default NewCollection;
