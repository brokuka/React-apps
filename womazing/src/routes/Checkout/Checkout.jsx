import React from "react";
import Main from "../../components/Main/Main";
import Breadcrumbs from "./../../components/ui/Breadcrumbs/Breadcrumbs";
import Breadcrumb from "../../components/ui/Breadcrumbs/components/Breadcrumb";
import { AppRoute } from "../../utils/constants";
import Row from "../../components/Row/Row";
import Col from "../../components/Col/Col";
import Button from "../../components/ui/Button/Button";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { checkoutFormSchema } from "../../utils/form-schemas";
import { useSelector } from "react-redux";
import ProductParams from "../../components/ui/ProductParams/ProductParams";
import Input from "../../components/Form/components/Input/Input";
import TextArea from "../../components/Form/components/TextArea/TextArea";
import ModalLayout from "../../components/ui/Modals/Modal-Layout/ModalLayout";
import { setModal } from "../../store/slices/modalSlice";
import { useDispatch } from "react-redux/es/exports";
import { useNavigate } from "react-router-dom";
import { clearCart } from "../../store/slices/cartSlice";

/* Style */
import styles from "./Checkout.module.scss";

const userDataInputGroup = [
  {
    name: "name",
    placeholder: "Имя",
    type: "text",
  },
  {
    name: "email",
    placeholder: "E-mail",
    type: "email",
  },
  {
    name: "tel",
    placeholder: "Телефон",
    type: "tel",
  },
];

const recipientInputGroup = [
  {
    name: "country",
    placeholder: "Страна",
    type: "text",
  },
  {
    name: "city",
    placeholder: "Город",
    type: "text",
  },
  {
    name: "street",
    placeholder: "Улица",
    type: "text",
  },
  {
    name: "house",
    placeholder: "Дом",
    type: "text",
  },
  {
    name: "flat",
    placeholder: "Квартира",
    type: "text",
  },
];

const Checkout = () => {
  const { items, price } = useSelector((state) => state.cart);
  const {
    handleSubmit,
    control,
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(checkoutFormSchema),
  });
  const dispatch = useDispatch();
  const [active, setActive] = React.useState(false);
  const navigate = useNavigate();

  const onSubmit = (data) => {
    setActive(!active);
    dispatch(setModal(true));
    console.log("Ваш заказ: ", items);
  };

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Main header block>
        <Breadcrumbs title="Оформление заказа">
          <Breadcrumb href={AppRoute.CART} title="Корзина" />
          <Breadcrumb href={1} title="Оформление заказа" />
        </Breadcrumbs>

        <form onSubmit={handleSubmit(onSubmit)}>
          <Row className={styles.root} wrap>
            <Col def={4} sd={12}>
              <Row className={styles.first_col}>
                <div className={styles.user_data}>
                  <h3 className={styles.block_title}>Данные покупателя</h3>

                  <Row className={styles.input_group}>
                    {userDataInputGroup.map(
                      ({ name, placeholder, type }, index) => (
                        <Input
                          name={name}
                          placeholder={placeholder}
                          control={control}
                          error={errors?.name?.message}
                          type={type}
                          key={index}
                        />
                      )
                    )}
                  </Row>
                </div>

                <div className={styles.recipient}>
                  <div className={styles.block_title}>Адрес получателя</div>
                  <Row className={styles.input_group}>
                    {recipientInputGroup.map(
                      ({ name, placeholder, type, ...props }, index) => (
                        <Input
                          name={name}
                          placeholder={placeholder}
                          control={control}
                          error={errors?.name?.message}
                          type={type}
                          key={index}
                          {...props}
                        />
                      )
                    )}
                  </Row>
                </div>

                <div className={styles.user_comment}>
                  <div className={styles.block_title}>Комментарии</div>
                  <TextArea
                    name="comment"
                    control={control}
                    placeholder="Комментарий о заказе"
                  />
                </div>
              </Row>
            </Col>

            <Col def={3} sd={12}>
              <Row className={styles.second_col}>
                <div className={styles.order}>
                  <div className={styles.block_title}>Ваш заказ</div>

                  <Row className={styles.order_group} wrap justifyContent="sb">
                    <Row className={styles.title_group}>
                      <Col def={7}>
                        <h4 className={styles.col_title}>Товар</h4>
                      </Col>

                      <Col def={4}>
                        <h4 className={styles.col_title}>Всего</h4>
                      </Col>
                    </Row>

                    <Row className={styles.product} wrap>
                      {items.map((item, index) => (
                        <React.Fragment key={index}>
                          <Col def={7}>
                            <div className={styles.product_name}>
                              {item.title}

                              <ProductParams
                                type="all"
                                size={item.size}
                                color={item.color}
                              />
                            </div>
                          </Col>

                          <Col def={4}>
                            <div className={styles.cost}>
                              {item.totalPrice}
                              <br />({item.count}шт)
                            </div>
                          </Col>
                        </React.Fragment>
                      ))}
                    </Row>

                    <Row className={styles.pre_cost}>
                      <Col def={7}>Подытог:</Col>
                      <Col def={4} className={styles.cost}>
                        {price}
                      </Col>
                    </Row>
                  </Row>

                  <Row className={styles.total}>
                    <Col def={4} sd={12}>
                      <h4>Итого:</h4>
                    </Col>

                    <Col def={4} sd={12}>
                      <h4 className={styles.cost}>{price}</h4>
                    </Col>
                  </Row>
                </div>

                <div className={styles.payment}>
                  <h3 className={styles.block_title}>Способы оплаты</h3>
                  <label>
                    <input
                      className={styles.checkbox}
                      type="checkbox"
                      defaultChecked
                    />
                    Оплата наличными
                  </label>
                  <Button fill disabled={!isValid}>
                    Разместить заказ
                  </Button>
                </div>
              </Row>
            </Col>
          </Row>
        </form>
      </Main>
      {active && (
        <ModalLayout
          title="finished"
          onExit={() => {
            setActive(false);
            dispatch(clearCart());
            navigate(AppRoute.SHOP, { replace: true });
          }}
          usedComponent
        >
          Finished
        </ModalLayout>
      )}
    </>
  );
};

export default Checkout;
