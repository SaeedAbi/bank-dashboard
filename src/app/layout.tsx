'use client';

import * as React from 'react';
import { AntdRegistry } from '@ant-design/nextjs-registry';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import './global.css';
import Content from '@/components/Content';
import Authentication from '@/components/Autentication';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const queryClient = new QueryClient();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body>
        <AntdRegistry>
          <QueryClientProvider client={queryClient}>
            <ReactQueryDevtools initialIsOpen={false} />
            <Authentication>
              <Content>{children}</Content>
            </Authentication>
          </QueryClientProvider>
        </AntdRegistry>
      </body>
    </html>
  );
}
