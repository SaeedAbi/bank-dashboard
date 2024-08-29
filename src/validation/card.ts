import * as Yup from "yup";
import { cardNumberValidation, dateValidation } from "@/validation/common";

// validation schema for CardType
export const cardSchema = Yup.object().shape({
  cardNumber: cardNumberValidation,
  balance: Yup.number().min(100).max(5000).required(),
  holder: Yup.number().integer().min(0).required(),
  type: Yup.number().integer().min(0).required(),
  bank: Yup.number().integer().min(0).required(),
  expireDate: dateValidation,
});
