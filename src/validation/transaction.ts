import * as Yup from 'yup';
import { ActionType, TransactionMethod, TransactionStatus } from '@/interfaces';

// validation schema for TransactionType
export const cardSchema = Yup.object().shape({
  id: Yup.string().min(6).required(),
  label: Yup.string().min(3).required(),
  date: Yup.string()
    .matches(
      /^\d{4}-\d{2}-\d{2}$/,
      'Transaction date must be in YYYY-MM-DD format.'
    )
    .required(),
  amount: Yup.number().required(),
  type: Yup.mixed()
    .oneOf(
      [ActionType.withdraw, ActionType.deposit],
      'Invalid transaction type'
    )
    .required(),
  method: Yup.mixed()
    .oneOf(
      [TransactionMethod.physical, TransactionMethod.paypal],
      'Invalid transaction method'
    )
    .required(),
  description: Yup.string().nullable(),
  category: Yup.number().integer().required(),
  status: Yup.mixed()
    .oneOf(
      [
        TransactionStatus.pending,
        TransactionStatus.complete,
        TransactionStatus.rejected,
      ],
      'Invalid transaction status'
    )
    .required(),
  destinationCardNumber: Yup.string().length(19).required(),
});
