import React from 'react';

import useInventory from '@/hooks/useInventory';

interface Props {
  isPublicRoute: boolean;
  isAuthenticated: boolean;
}

function Inventory({
  children,
  isAuthenticated,
  isPublicRoute,
}: React.PropsWithChildren<Props>) {
  useInventory(isAuthenticated && !isPublicRoute);

  return children;
}

export default Inventory;
