import React from "react";
import Button from "../../../../Button/Button";
import Input from "../../../../Form/components/Input/Input";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";

const CallbackForm = ({ onClickButton }) => {
  const [data, setData] = React.useState(false);

  const schema = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().email().required(),
    tel: yup.number().positive().integer().max(15),
  });

  const {
    handleSubmit,
    register,
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange",
    // resolver: yupResolver(schema),
  });

  return (
    <>
      {/* <Input type="text" placeholder="Имя" autoFocus />
      <input className="modal_input" type="email" placeholder="E-mail" />
      <input className="modal_input" type="tel" placeholder="Телефон" />

      <Button fill cover onClick={onClickButton} disabled={!isValid}>
        Заказать звонок
      </Button> */}
      <form onSubmit={handleSubmit(() => setData(true))}>
        <Input
          type="text"
          placeholder="Имя"
          autoFocus
          name="name"
          {...register("name")}
        />
        {/* <input
          className="modal_input"
          type="email"
          placeholder="E-mail"
          {...register("email")}
        />
        <input
          className="modal_input"
          type="tel"
          placeholder="Телефон"
          {...register("tel")}
        /> */}
        <Input />

        <Button fill cover onClick={onClickButton} disabled={!isValid}>
          Заказать звонок
        </Button>
      </form>
    </>
  );
};

export default CallbackForm;
