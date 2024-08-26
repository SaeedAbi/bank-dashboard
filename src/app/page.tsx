import * as React from 'react';
import MyCards from '@/components/Main/Overview/MyCards';
import RecentTransactions from '@/components/Main/Overview/RecentTransactions';

export default function Home() {
  return (
    <main className='h-[923px] max-w-[1190px] overflow-auto bg-mainBg'>
      <section className='mx-[40px]'>
        <div className='flex gap-[30px]'>
          <MyCards />
          <RecentTransactions />
        </div>
      </section>
    </main>
  );
}
