'use client';

import * as React from 'react';

import Aside from '@/components/Aside';
import Header from '@/components/Header';
import styles from './styles.module.scss';
import { usePathname } from 'next/navigation';
import { PUBLIC_ROUTES } from '@/routes';

function Content({ children }: React.PropsWithChildren) {
  const pathname = usePathname();
  // it`s `false` for public routes otherwise `true`
  const isFullScreen: boolean = Object.values(PUBLIC_ROUTES).some(
    (route) => route === pathname
  );

  return (
    <div className='flex max-h-[100vh] overflow-hidden'>
      {isFullScreen ? null : <Aside />}
      <div className='flex flex-col'>
        {isFullScreen ? null : <Header />}
        <div className={styles.container}>{children}</div>
      </div>
    </div>
  );
}

export default Content;
