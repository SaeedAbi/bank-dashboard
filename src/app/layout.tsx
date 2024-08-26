'use client';

import * as React from 'react';
import { AntdRegistry } from '@ant-design/nextjs-registry';
import { usePathname } from 'next/navigation';

import './global.css';
import { PUBLIC_ROUTES } from '@/routes';
import Content from '@/components/Content';

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
    <html lang='en'>
      <body>
        <AntdRegistry>
          {isFullScreen ? <div /> : <Content>{children}</Content>}
        </AntdRegistry>
      </body>
    </html>
  );
}
