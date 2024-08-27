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

//=============================================
// Keys
//=============================================
export const POSITIONS_KEY = 'POSITIONS_KEY';
export const CURRENCIES_KEY = 'CURRENCIES_KEY';
export const BANKS_KEY = 'BANKS_KEY';
export const CATEGORIES_KEY = 'CATEGORIES_KEY';
export const CREDIT_CARDS_KEY = 'CREDIT_CARDS_KEY';
export const SERVICES_KEY = 'SERVICES_KEY';
export const LOANS_KEY = 'LOANS_KEY';
export const STOCKS_KEY = 'STOCKS_KEY';

//=============================================
// Queries
//=============================================
const commonQuery = {
  staleTime: Infinity,
  cacheTime: Infinity,
};
const positionsQuery = {
  queryKey: [POSITIONS_KEY],
  queryFn: getAllPositions,
  ...commonQuery,
};
const currenciesQuery = {
  queryKey: [CURRENCIES_KEY],
  queryFn: getAllCurrencies,
  ...commonQuery,
};
const banksQuery = {
  queryKey: [BANKS_KEY],
  queryFn: getAllBanks,
  ...commonQuery,
};
const categoriesQuery = {
  queryKey: [CATEGORIES_KEY],
  queryFn: getAllCategories,
  ...commonQuery,
};
const creditCardsQuery = {
  queryKey: [CREDIT_CARDS_KEY],
  queryFn: getAllCreditCards,
  ...commonQuery,
};
const servicesQuery = {
  queryKey: [SERVICES_KEY],
  queryFn: getAllServices,
  ...commonQuery,
};
const loansQuery = {
  queryKey: [LOANS_KEY],
  queryFn: getAllLoans,
  ...commonQuery,
};
const stocksQuery = {
  queryKey: [STOCKS_KEY],
  queryFn: getAllStocks,
  ...commonQuery,
};

export default function useInventory(enabled: boolean) {
  return useQueries({
    queries: [
      { enabled, ...positionsQuery },
      { enabled, ...currenciesQuery },
      { enabled, ...categoriesQuery },
      { enabled, ...banksQuery },
      { enabled, ...creditCardsQuery },
      { enabled, ...servicesQuery },
      { enabled, ...loansQuery },
      { enabled, ...stocksQuery },
    ],
  });
}
