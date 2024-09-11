"use client";

import * as React from "react";

import Aside from "@/components/Aside";
import Header from "@/components/Header";
import styles from "./styles.module.scss";
import { usePathname } from "next/navigation";
import { PUBLIC_ROUTES } from "@/routes";
import { useWindowSize } from "@/hooks/useWindowSize";

function Content({ children }: React.PropsWithChildren) {
  const { height } = useWindowSize();
  const sanitizedHeight = height > 100 ? height - 100 : 0;
  const pathname = usePathname();
  // it`s `false` for public routes otherwise `true`
  const isFullScreen: boolean = Object.values(PUBLIC_ROUTES).some(
    (route) => route === pathname
  );

  return (
    <div className="flex max-h-[100vh] overflow-hidden">
      {isFullScreen ? null : <Aside />}
      <div className="flex flex-col">
        {isFullScreen ? null : <Header />}
        <div className={styles.container}>
          <main
            className="bg-mainBg"
            style={{
              height: sanitizedHeight,
            }}
          >
            <div className="p-4 md:p-6 flex flex-wrap h-full overflow-auto">
              {children}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default Content;
