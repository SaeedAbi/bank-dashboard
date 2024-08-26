import * as React from 'react';

import Aside from '@/components/Aside';
import Header from '@/components/Header';
import styles from './styles.module.scss';

function Content({ children }: React.PropsWithChildren) {
  return (
    <div className='flex'>
      <Aside />
      <div className='flex flex-shrink flex-grow flex-col'>
        <Header />
        <div className={styles.container}>{children}</div>
      </div>
    </div>
  );
}

export default Content;
