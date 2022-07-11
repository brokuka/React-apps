import React from "react";
import Breadcrumb from "../../components/Breadcrumbs/Breadcrumb";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import Col from "../../components/Col/Col";
import Main from "../../components/Main/Main";
import Row from "../../components/Row/Row";
import { useSelector } from "react-redux";

/* Style */
import styles from "./Cart.module.scss";
import Button from "./../../components/Button/Button";
import { Link } from "react-router-dom";
import CartItem from "../../components/CartItem/CartItem";

const Cart = React.memo(() => {
  const { items, price } = useSelector((state) => state.cart);

  const CouponAndRefresh = React.useCallback(
    () => (
      <>
        <Col def={6} sd={12} className="col-6 col-sd-12">
          <div className={styles.group}>
            <input type="text" placeholder="Введите купон" />
            <Button type="ghostCoupon">Применить купон</Button>
          </div>
        </Col>

        <Col def={3} sd={12}>
          <Button type="cartRefreshGhost">Обновить корзину</Button>
        </Col>
      </>
    ),
    []
  );

  return (
    <Main block header>
      <Breadcrumbs title="Корзина">
        <Breadcrumb href={1} title="Корзина" />
      </Breadcrumbs>

      {items.length ? (
        <>
          <Row className={styles.header}>
            <Col def={5}>Товар</Col>

            <Col def={1} tb="auto">
              Цена
            </Col>

            <Col def={2} tb="auto">
              Количество
            </Col>

            <Col def={1} tb="auto">
              Всего
            </Col>
          </Row>

          <div className={styles.content}>
            <CartItem />
          </div>

          <Row className={styles.footer} wrap>
            <Col def={12}>
              <Row className={styles["first-col"]} wrap>
                <CouponAndRefresh />
              </Row>
            </Col>

            <Col def={6} sd={12}>
              <Row className={styles["last-col"]}>
                <div className={styles["text-group"]}>
                  Подытог: <span className={styles.price}>{price}</span>
                </div>

                <div className={styles.group}>
                  <Row className={styles.total}>
                    <Col def={4} sd={12}>
                      Итого:
                    </Col>

                    <Col def="auto">
                      <span className={styles.price}>{price}</span>
                    </Col>
                  </Row>

                  <Link to="/cart">
                    <Button fill height="100%" fullWidth>
                      Оформить заказ
                    </Button>
                  </Link>
                </div>
              </Row>
            </Col>
          </Row>
        </>
      ) : (
        <p>Нету продуктов</p>
      )}
    </Main>
  );
});

export default Cart;
