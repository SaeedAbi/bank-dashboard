'use client';

import * as React from 'react';

import MyCards from '@/components/Main/Overview/MyCards';
import RecentTransactions from '@/components/Main/Overview/RecentTransactions';
import WeeklyActivities from '@/components/Main/Overview/WeeklyActivities';
import ExpenseStatistics from '@/components/Main/Overview/ExpenseStatistics';
import QuickTransfer from '@/components/Main/Overview/QuickTransfer';
import BalanceHistory from '@/components/Main/Overview/BalanceHistory';

export default function Home() {
  return (
    <main className='bg-mainBg'>
      <div className='mx-10 flex flex-wrap overflow-auto'>
        <div className={'flex flex-wrap gap-[30px]'}>
          <MyCards />
          <RecentTransactions />
        </div>
        <div className={'flex flex-wrap gap-[30px]'}>
          <WeeklyActivities />
          <ExpenseStatistics />
        </div>
        <div className={'flex flex-wrap gap-[30px]'}>
          <QuickTransfer />
          <BalanceHistory />
        </div>
      </div>
    </main>
  );
}
