import React from "react";
import Row from "../Row/Row";
import Col from "../Col/Col";
import Button from "../ui/Button/Button";
import Icon from "../ui/Icon/Icon";

/* Style */
import styles from "./CartItem.module.scss";
import { useSelector, useDispatch } from "react-redux";
import ButtonCounter from "../ui/Button/components/ButtonCounter/ButtonCounter";
import { removeCartItem } from "../../store/slices/cartSlice";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";

const CartItem = React.memo(() => {
  const dispatch = useDispatch();
  const { items } = useSelector((state) => state.cart);

  const onClickRemove = React.useCallback(
    (item) => {
      if (window.confirm("Вы точно хотите удалить товар?")) {
        dispatch(removeCartItem(item));
      }
    },
    [dispatch]
  );

  return (
    <>
      <AnimatePresence>
        {items.map((item, index) => (
          <motion.div
            className={styles.root}
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
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

                <div className={styles.params}>
                  <span>{`${item.title} (${item.size}) `}</span>
                  <span
                    className={styles.color}
                    style={{ backgroundColor: item.color }}
                  >
                    {item.color}
                  </span>
                </div>
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
          </motion.div>
        ))}
      </AnimatePresence>
    </>
  );
});

export default CartItem;
