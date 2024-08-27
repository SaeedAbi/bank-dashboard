import { useQueries } from '@tanstack/react-query';
import {
  getAllBanks,
  getAllCategories,
  getAllCreditCards,
  getAllCurrencies,
  getAllLoans,
  getAllPositions,
  getAllServices,
  getAllStocks,
} from '@/services/inventories';

const commonQuery = {
  staleTime: Infinity,
  cacheTime: Infinity,
};
const positionQuery = {
  queryKey: ['positions'],
  queryFn: getAllPositions,
  ...commonQuery,
};
const currencyQuery = {
  queryKey: ['currencies'],
  queryFn: getAllCurrencies,
  ...commonQuery,
};
const bankQuery = {
  queryKey: ['banks'],
  queryFn: getAllBanks,
  ...commonQuery,
};
const categoryQuery = {
  queryKey: ['categories'],
  queryFn: getAllCategories,
  ...commonQuery,
};
const creditCardQuery = {
  queryKey: ['creditCards'],
  queryFn: getAllCreditCards,
  ...commonQuery,
};
const serviceQuery = {
  queryKey: ['services'],
  queryFn: getAllServices,
  ...commonQuery,
};
const loanQuery = {
  queryKey: ['loans'],
  queryFn: getAllLoans,
  ...commonQuery,
};
const stockQuery = {
  queryKey: ['stock'],
  queryFn: getAllStocks,
  ...commonQuery,
};

export default function useInventory(enabled: boolean) {
  return useQueries({
    queries: [
      { enabled, ...positionQuery },
      { enabled, ...currencyQuery },
      { enabled, ...categoryQuery },
      { enabled, ...bankQuery },
      { enabled, ...creditCardQuery },
      { enabled, ...serviceQuery },
      { enabled, ...loanQuery },
      { enabled, ...stockQuery },
    ],
  });
}
