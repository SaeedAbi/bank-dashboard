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
        <div id={'initial-loading'}>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            preserveAspectRatio='xMidYMid'
            viewBox='0 0 100 100'
          >
            <g>
              <path
                fill='none'
                stroke='#e15b64'
                strokeWidth='12'
                d='M50 15a35 35 0 1024.749 10.251'
              />
              <path fill='#e15b64' d='M49 3v24l12-12L49 3' />
              <animateTransform
                attributeName='transform'
                dur='1s'
                keyTimes='0;1'
                repeatCount='indefinite'
                type='rotate'
                values='0 50 50;360 50 50'
              />
            </g>
          </svg>
        </div>
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
