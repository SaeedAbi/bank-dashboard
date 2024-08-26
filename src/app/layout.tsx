'use client';

import * as React from 'react';
import { AntdRegistry } from '@ant-design/nextjs-registry';
import { usePathname } from 'next/navigation';

import './global.css';
import { PUBLIC_ROUTES } from '@/routes';
import Content from '@/components/Content';
import Authentication from '@/components/Autentication';
import Inventory from '@/components/Inventroty';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body>
        <AntdRegistry>
          <Authentication>
            <Content>{children}</Content>
          </Authentication>
        </AntdRegistry>
      </body>
    </html>
  );
}
