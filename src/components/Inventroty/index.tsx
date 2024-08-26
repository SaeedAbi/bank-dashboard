import React from 'react';
import { CurrencyType } from '@/interfaces';
import { getAllCurrencies } from '@/services/inventories';

interface Props {
  isPublicRoute: boolean;
  isAuthenticated: boolean;
}

function Inventory({
  children,
  isAuthenticated,
  isPublicRoute,
}: React.PropsWithChildren<Props>) {
  const [currencies, setCurrencies] = React.useState<CurrencyType[]>();
  const [error, setError] = React.useState<string>('');

  React.useEffect(() => {
    if (isAuthenticated && !isPublicRoute) {
      getAllCurrencies()
        .then((data) => setCurrencies(data))
        .catch((error) => {
          if (typeof error === 'string') {
            setError(error);
          }
        })
        .finally(() => {
          // remove loading
        });
    }
  }, [isAuthenticated, isPublicRoute]);

  if (isAuthenticated && !isPublicRoute) {
    /**
     * use `useQueries` from react query
     * getAllCurrencies
     * getAllPositions
     * getAllCategories
     * getAllBanks
     * getAllCreditCards
     * getAllServices
     * getAllLoans
     * getAllStocks
     */
  }

  return children;
}

export default Inventory;
