"use client";

import React from "react";
import { usePathname, useRouter } from "next/navigation";

import { PRIVATE_ROUTES, PUBLIC_ROUTES } from "@/routes";
import Inventory from "@/components/Inventroty";

export const currentUserId = 12;

export const today = "2024-09-13";

function Authentication({ children }: React.PropsWithChildren) {
  const pathname = usePathname();
  const router = useRouter();

  const isPublicRoute: boolean = Object.values(PUBLIC_ROUTES).some(
    (route) => route === pathname
  );
  // TBD
  const isAuthenticated = true;

  if (!isAuthenticated && !isPublicRoute) {
    router.push(PUBLIC_ROUTES.login);
    return null;
  } else if (isAuthenticated && isPublicRoute) {
    router.push(PRIVATE_ROUTES.dashboard);
    return null;
  }
  return (
    <Inventory isPublicRoute={isPublicRoute} isAuthenticated={isAuthenticated}>
      {children}
    </Inventory>
  );
}

export default Authentication;
