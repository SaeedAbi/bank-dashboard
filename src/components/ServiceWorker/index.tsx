import React from "react";
import { initMocks } from "@/mocks";

function ServiceWorker({ children }: React.PropsWithChildren) {
  const [shouldAppHydrate, setShouldAppHydrate] = React.useState(false);

  React.useEffect(() => {
    initMocks().then(() => setShouldAppHydrate(true));
  }, []);

  return shouldAppHydrate ? <>{children}</> : null;
}

export default ServiceWorker;
