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
import { setProduct } from "../../store/slices/productsSlice";
import {
  addItemToCart,
  increaseProductCart,
} from "../../store/slices/cartSlice";
import cn from "classnames";

/* Style */
import styles from "./Product.module.scss";
import ButtonCounter from "../../components/Button/components/ButtonCounter/ButtonCounter";

const Product = React.memo(() => {
  const [productCount, setProductCount] = React.useState(1);
  const [productSize, setProductSize] = React.useState(null);
  const [productColor, setProductColor] = React.useState(null);

  const dispatch = useDispatch();
  const { items, current } = useSelector((state) => state.products);
  const { categoryId } = useSelector((state) => state.filter);
  const cart = useSelector((state) => state.cart);
  const { product } = current;
  const { id } = useParams();

  React.useEffect(() => {
    const getProduct = items?.find((item) => item.id === +id);
    const getProductRelates = items?.filter((item) =>
      getProduct?.related?.id.includes(item.id)
    );

    dispatch(setProduct({ item: getProduct, related: getProductRelates }));
    setProductCount(1);
    setProductColor(null);
    setProductSize(null);
    window.scrollTo(0, 0);
  }, [items, id, dispatch]);

  const addToCart = () => {
    const productParams = {
      id: product.id,
      title: product.title,
      img: product.img,
      size: productSize,
      color: productColor,
      price: product.prices.price,
      count: productCount,
      totalPrice: productCount * product.prices.price,
    };

    console.log(
      `Product | totalPrice: ${productParams.totalPrice}, count: ${productParams.count}`
    );

    const match = cart.items.find(
      (obj) =>
        obj.id === productParams.id &&
        (obj.size || obj.color) === (productParams.size || productParams.color)
    );

    match
      ? dispatch(increaseProductCart(productParams))
      : dispatch(addItemToCart(productParams));

    setProductCount(1);
    setProductColor(null);
    setProductSize(null);
  };

  const onClickColor = React.useCallback(
    (color) => {
      if (productColor === color) return setProductColor(null);

      setProductColor(color);
    },
    [productColor]
  );

  const onClickSize = React.useCallback(
    (size) => {
      if (productSize === size) return setProductSize(null);

      setProductSize(size);
    },
    [productSize]
  );

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
                      <Button
                        type="size"
                        key={index}
                        className={cn({
                          [styles.choosed_size]: size === productSize,
                        })}
                        onClick={() => onClickSize(size)}
                      >
                        {size}
                      </Button>
                    ))}
                  </div>
                </div>

                <div className={styles.color}>
                  <h4 className={styles.color_title}>Выберите цвет</h4>
                  <div className={styles.btn_group}>
                    {product.colors.map((color, index) => (
                      <Button
                        color={color}
                        type="colors"
                        key={index}
                        className={cn({
                          [styles.choosed_color]: color === productColor,
                        })}
                        onClick={() => onClickColor(color)}
                      />
                    ))}
                  </div>
                </div>

                <div className={styles.count_cart}>
                  <div className={styles.btn_group}>
                    <ButtonCounter
                      state={productCount}
                      onChange={setProductCount}
                      size="68px"
                      iconSize="32px"
                    />

                    <Button
                      fill
                      onClick={addToCart}
                      disabled={!productColor || !productSize}
                    >
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
});

export default Product;
