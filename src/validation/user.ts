import * as Yup from 'yup';
import { cardNumberValidation } from '@/validation/common';

// validation schema for UserType
export const userSchema = Yup.object().shape({
  id: Yup.number().integer().required(),
  avatar: Yup.string().nullable(),
  fullName: Yup.string().min(3).max(30).required(),
  position: Yup.number().integer().min(1).max(20).required(),
  cards: Yup.array().of(cardNumberValidation),
});
