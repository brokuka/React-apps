import React from "react";
import Container from "../../../Container/Container";
import { Link } from "react-router-dom";
import Cards from "../../../Cards/Cards";
import Button from "../../../Button/Button";
import { useSelector, useDispatch } from "react-redux/es/exports";
import axios from "axios";

/* Style */
import styles from "./NewCollection.module.scss";

const NewCollection = ({ root, title }) => {
  const [products, setProducts] = React.useState();

  const getProducts = async () => {
    try {
      const { data } = await axios.get(
        `http://localhost:3005/products/?newCollection=true`
      );
      setProducts(data);
    } catch (error) {
      console.log("Произошла ошибка при загрузке товаров из новой коллекции");
    }

    window.scrollTo(0, 0);
  };

  React.useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      {products ? (
        <section className={root} id="new_collection">
          <Container>
            <h2 className={title}>Новая коллекция</h2>
            <Cards collection={products} />

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
