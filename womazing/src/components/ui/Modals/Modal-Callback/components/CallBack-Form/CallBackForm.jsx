import React from "react";
import Button from "../../../../Button/Button";
import Input from "../../../../../Form/components/Input/Input";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { modalFormSchema } from "./../../../../../../utils/form-schemas";

/* Style */
import styles from "./CallBackForm.module.scss";

const CallbackForm = ({ onClickButton }) => {
  const {
    handleSubmit,
    control,
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(modalFormSchema),
  });

  const onSubmit = (data) => {
    console.log(data);
    onClickButton();
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.root}>
        <Input
          name="name"
          placeholder="Имя"
          control={control}
          error={errors?.name?.message}
        />

        <Input
          name="email"
          placeholder="E-mail"
          control={control}
          error={errors?.email?.message}
        />

        <Input
          name="tel"
          placeholder="Телефон"
          control={control}
          error={errors?.tel?.message}
        />

        <Button fill cover disabled={!isValid}>
          Заказать звонок
        </Button>
      </form>
    </>
  );
};

export default CallbackForm;
