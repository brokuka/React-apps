import * as yup from "yup";
import { modalInputHelper } from "./constants";

export const modalFormSchema = yup.object().shape({
  name: yup.string().required(modalInputHelper.REQUIRED),
  email: yup
    .string()
    .email(modalInputHelper.EMAIL)
    .required(modalInputHelper.REQUIRED),
  tel: yup
    .number()
    .typeError(modalInputHelper.NUMBER)
    .positive(modalInputHelper.NUMBER)
    .integer(modalInputHelper.NUMBER)
    .required(modalInputHelper.REQUIRED),
});
