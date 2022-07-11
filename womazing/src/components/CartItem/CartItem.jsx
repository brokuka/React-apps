import React from "react";
import Row from "../Row/Row";
import Col from "../Col/Col";
import Button from "../Button/Button";
import Icon from "../Icon/Icon";

/* Style */
import styles from "./CartItem.module.scss";
import { useSelector, useDispatch } from "react-redux";
import ButtonCounter from "../Button/components/ButtonCounter/ButtonCounter";
import { removeItemFromCart } from "../../store/slices/cartSlice";

const CartItem = () => {
  const dispatch = useDispatch();
  const { items } = useSelector((state) => state.cart);

  const onClickRemove = (item) => {
    if (window.confirm("Вы точно хотите удалить товар?")) {
      dispatch(removeItemFromCart(item));
    }
  };

  return (
    <>
      {items.map((item, index) => (
        <Row className={styles.root} key={index}>
          <Col def={5} tb={12} className="col-5 col-tb-12">
            <Row className={styles.group}>
              <div className={styles.thumbnail}>
                <Button
                  type="cartItemRemove"
                  onClick={() => onClickRemove(item)}
                >
                  <Icon name="x" href="x" />
                </Button>

                <picture>
                  <source srcSet={`${item.img.src}.webp`} type="image/webp" />
                  <img
                    className="img"
                    src={`${item.img.src}.jpg`}
                    alt={item.img.alt}
                    width={125}
                    height={179}
                  />
                </picture>
              </div>

              <span>{`${item.title} (${item.size})`}</span>
            </Row>
          </Col>

          <Col def={1} tb="auto">
            <span className={styles.price}>{item.price}</span>
          </Col>

          <Col def={2} tb="auto">
            {
              <ButtonCounter
                globalState={item.count}
                size="47px"
                iconSize="24px"
                filterItem={item}
              />
            }
          </Col>

          <Col def={1} tb="auto">
            <span className={styles.total}>{item.totalPrice}</span>
          </Col>
        </Row>
      ))}
    </>
  );
};

export default CartItem;
