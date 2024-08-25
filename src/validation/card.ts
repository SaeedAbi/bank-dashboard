import * as Yup from 'yup';

// validation schema for CardType
export const cardSchema = Yup.object().shape({
  cardNumber: Yup.string().length(19).required(),
  balance: Yup.number().min(100).max(5000).required(),
  holder: Yup.number().integer().min(0).required(),
  type: Yup.number().integer().min(0).required(),
  bank: Yup.number().integer().min(0).required(),
  expireDate: Yup.string()
    .matches(/^\d{4}-\d{2}-\d{2}$/, 'Expire date must be in YYYY-MM-DD format.')
    .required(),
});
