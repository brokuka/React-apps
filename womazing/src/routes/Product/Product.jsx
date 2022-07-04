import React from "react";
import Breadcrumb from "../../components/Breadcrumbs/Breadcrumb";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import Main from "../../components/Main/Main";
import { useParams } from "react-router-dom";
import Button from "../../components/Button/Button";
import Row from "./../../components/Row/Row";
import Col from "./../../components/Col/Col";
import { useSelector, useDispatch } from "react-redux";
import RelatedProducts from "../../components/RelatedProducts/RelatedProducts";
import {
  setProduct,
  changeProductCount,
} from "../../store/slices/productsSlice";

/* Style */
import styles from "./Product.module.scss";
import Icon from "../../components/Icon/Icon";

const Product = () => {
  const [productCount, setProductCount] = React.useState(1);

  const dispatch = useDispatch();
  const { items, current } = useSelector((state) => state.products);
  const { categoryId } = useSelector((state) => state.filter);
  const { product, count } = current;
  const { id } = useParams();

  React.useEffect(() => {
    const getProduct = items?.find((item) => item.id === +id);
    const getProductRelates = items?.filter((item) =>
      getProduct?.related?.id.includes(item.id)
    );

    dispatch(setProduct({ item: getProduct, related: getProductRelates }));
    setProductCount(1);
    window.scrollTo(0, 0);
  }, [items, id, dispatch]);

  const changeCount = (action) => {
    switch (action) {
      case "increase":
        setProductCount(productCount + 1);
        break;
      case "decrease":
        if (productCount > 1) {
          setProductCount(productCount - 1);
        }
        break;
      default:
        return productCount;
    }
  };

  const addToCart = () => {
    dispatch(changeProductCount(count + productCount));
    setProductCount(1);
  };

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
                    <div className={styles.item_count}>
                      <Button onClick={() => changeCount("decrease")}>
                        <Icon href="minus" name="minus" size={32} />
                      </Button>

                      <Button type="count" tabIndex="-1">
                        {productCount}
                      </Button>

                      <Button onClick={() => changeCount("increase")}>
                        <Icon href="plus" name="plus" size={32} />
                      </Button>
                    </div>
                    <Button fill onClick={addToCart}>
                      Добавить в корзину
                    </Button>
                  </div>
                </div>
              </Col>
            </Row>
          </div>

          <RelatedProducts />
        </>
      ) : (
        "Продукт не найден"
      )}
    </Main>
  );
};

export default Product;
