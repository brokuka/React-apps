import React from "react";
import Breadcrumb from "../../components/Breadcrumbs/Breadcrumb";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import Main from "../../components/Main/Main";
import { useParams } from "react-router-dom";
import axios from "axios";
import Button from "../../components/Button/Button";
import Row from "./../../components/Row/Row";
import Col from "./../../components/Col/Col";
import { useSelector } from "react-redux";
import RelatedProducts from "../../components/RelatedProducts/RelatedProducts";

/* Style */
import styles from "./Product.module.scss";

const Product = () => {
  const [product, setProduct] = React.useState();
  const { categoryId } = useSelector((state) => state.filter);
  const { id } = useParams();

  const getProduct = async () => {
    try {
      const { data } = await axios.get(`http://localhost:3005/products/${id}`);
      setProduct(data);

      window.scrollTo(0, 0);
    } catch (error) {
      console.log("Произошла ошибка при загрузке товара");
    }
  };

  React.useEffect(() => {
    getProduct();
  }, [id]);

  return (
    <Main block>
      {product ? (
        <>
          <Breadcrumbs title={product.title}>
            {categoryId ? (
              <Breadcrumb title={product.category} href="../shop" />
            ) : (
              <Breadcrumb title="Магазин" href="../shop" />
            )}
            <Breadcrumb title={product.title} href={2} />
          </Breadcrumbs>

          <div className={styles.root}>
            <Row className={styles.content}>
              <Col def={6} sd={6} mb={8}>
                <picture>
                  <source
                    srcSet={`${product.img.src}.webp`}
                    type="image/webp"
                  />
                  <img
                    className="img"
                    src={`${product.img.src}.jpg`}
                    alt={product.img.alt}
                    width={536}
                    height={729}
                  />
                </picture>
              </Col>

              <Col def="auto" tb={12}>
                <div className={styles.prices}>
                  <span className={styles.price}>{product.prices.price}</span>
                  {product.prices.oldPrice ? (
                    <span className={styles.old_price}>
                      {product.prices.oldPrice}
                    </span>
                  ) : null}
                </div>

                <div className={styles.size}>
                  <h4 className={styles.size_title}>Выберите размер</h4>

                  <div className={styles.btn_group}>
                    {product.sizes.map((size, index) => (
                      <Button type="size" key={index}>
                        {size}
                      </Button>
                    ))}
                  </div>
                </div>

                <div className={styles.color}>
                  <h4 className={styles.color_title}>Выберите цвет</h4>
                  <div className={styles.btn_group}>
                    {product.colors.map((color, index) => (
                      <Button color={color} type="colors" key={index} />
                    ))}
                  </div>
                </div>

                <div className={styles.count_cart}>
                  <div className={styles.btn_group}>
                    <Button type="count">1</Button>
                    <Button fill>Добавить в корзину</Button>
                  </div>
                </div>
              </Col>
            </Row>
          </div>

          <RelatedProducts product={product} />
        </>
      ) : (
        "Продукт не найден"
      )}
    </Main>
  );
};

export default Product;
