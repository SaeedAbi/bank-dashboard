import React from 'react';

import useInventory from '@/hooks/useInventory';
import { hideLoading, registerLoading } from '@/utils/loading';

interface Props {
  isPublicRoute: boolean;
  isAuthenticated: boolean;
}

function Inventory({
  children,
  isAuthenticated,
  isPublicRoute,
}: React.PropsWithChildren<Props>) {
  const results = useInventory(isAuthenticated && !isPublicRoute);
  const loading = results.some(({ isLoading }) => isLoading);

  // TBD
  const error = results.some(({ isError }) => isError);

  React.useEffect(() => {
    if (loading) {
      registerLoading();
    } else {
      hideLoading();
    }
  }, [loading]);

  return children;
}

export default Inventory;
