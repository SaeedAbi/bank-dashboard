import * as Yup from "yup";

export const cardNumberValidation = Yup.string().length(19).required();
export const dateValidation = Yup.string()
  .matches(/^\d{4}-\d{2}-\d{2}$/, "Expire date must be in YYYY-MM-DD format.")
  .required();
