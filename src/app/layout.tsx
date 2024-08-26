'use client';

import * as React from 'react';
import { AntdRegistry } from '@ant-design/nextjs-registry';

import './global.css';
import { usePathname } from 'next/navigation';
import { PUBLIC_ROUTES } from '@/routes';
import FullScreen from '@/components/FullScreen/FullScreen';
import NotFullScreen from '@/components/NotFullScreen/NotFullScreen';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  // it`s `false` for public routes otherwise `true`
  const isFullScreen: boolean = Object.values(PUBLIC_ROUTES).some(
    (route) => route === pathname
  );

  return (
    <AntdRegistry>
      <html lang='en'>
        {isFullScreen ? (
          <FullScreen />
        ) : (
          <NotFullScreen>{children}</NotFullScreen>
        )}
      </html>
    </AntdRegistry>
  );
}
