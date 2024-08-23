import * as React from 'react';
import Aside from '@/components/Aside';
import Header from '@/components/Header';

function NotFullScreen({ children }: React.PropsWithChildren) {
  return (
    <body className='mx-auto flex max-w-[1440px]'>
      <Aside />
      <div className='flex flex-shrink flex-grow flex-col'>
        <Header />
        {children}
      </div>
    </body>
  );
}

export default NotFullScreen;
