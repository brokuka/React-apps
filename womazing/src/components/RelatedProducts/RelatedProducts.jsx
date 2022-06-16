import React from "react";
import Cards from "../Cards/Cards";
import axios from "axios";
import { Link } from "react-router-dom";

/* Style */
import styles from "./RelatedProducts.module.scss";

const RelatedProducts = ({ product }) => {
  const [relatedProducts, setRelatedProducts] = React.useState();
  const [newProduct, setNewProduct] = React.useState();

  const relateProductsPath = product?.related?.id
    .map((id) => `id=${id}`)
    .join("&");

  const getRelatedProducts = async (path) => {
    try {
      if (newProduct?.related?.id) {
        const { data } = await axios.get(
          `http://localhost:3005/products/?${path}`
        );
        setRelatedProducts(data);
      }
    } catch (error) {
      console.log("Произошла ошибка при загрузке связанных товаров");
    }
  };

  React.useEffect(() => {
    setNewProduct(product);
  }, []);

  React.useEffect(() => {
    if (newProduct !== product) {
      getRelatedProducts(relateProductsPath);
    }
  }, [product]);

  return (
    <>
      {relateProductsPath ? (
        <div className={styles.root}>
          <h2 className={styles.title}>Связанные товары</h2>
          <Cards collection={relatedProducts} />
        </div>
      ) : null}
    </>
  );
};

export default RelatedProducts;
