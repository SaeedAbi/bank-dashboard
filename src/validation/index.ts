import * as Yup from 'yup';

// Validation schema for CardType
export const cardSchema = Yup.object().shape({
    cardNumber: Yup.string()
        .length(19, 'Card number must be exactly 19 characters long.')
        .required('Card number is required.'),
    balance: Yup.number()
        .min(100, 'Balance must be at least 100.')
        .max(5000, 'Balance must be at most 5000.')
        .required('Balance is required.'),
    holder: Yup.number()
        .integer('Holder ID must be an integer.')
        .min(0, 'Holder ID must be at least 0.')
        .required('Holder ID is required.'),
    type: Yup.number()
        .integer('Type ID must be an integer.')
        .min(0, 'Type ID must be at least 0.')
        .required('Type ID is required.'),
    bank: Yup.number()
        .integer('Bank ID must be an integer.')
        .min(0, 'Bank ID must be at least 0.')
        .required('Bank ID is required.'),
    expireDate: Yup.string()
        .matches(/^\d{4}-\d{2}-\d{2}$/, 'Expire date must be in YYYY-MM-DD format.')
        .required('Expire date is required.')
});
