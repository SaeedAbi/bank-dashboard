'use client';

import * as React from 'react';

import MyCards from '@/components/Main/Overview/MyCards';
import RecentTransactions from '@/components/Main/Overview/RecentTransactions';
import WeeklyActivities from '@/components/Main/Overview/WeeklyActivities';
import ExpenseStatistics from '@/components/Main/Overview/ExpenseStatistics';

export default function Home() {
  return (
    <main className='mx-10'>
      <div className='flex flex-wrap gap-[30px] overflow-auto'>
        <MyCards />
        <RecentTransactions />
        <WeeklyActivities />
        <ExpenseStatistics />
      </div>
    </main>
  );
}
