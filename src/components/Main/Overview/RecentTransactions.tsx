import React from 'react';
import LastTransactionItem from '@/components/Main/Overview/_LastTransactionItem';

function RecentTransactions() {
  return (
    <div className='mb-[20px] mt-[25px]'>
      <div className='text-3xl font-semibold text-primary'>
        Recent Transactions
      </div>
      <div className='mt-[20px] flex h-[235px] w-[350px] flex-shrink-0 flex-col rounded-[25px] bg-white pb-[30px]'>
        <LastTransactionItem />
        <LastTransactionItem />
        <LastTransactionItem />
      </div>
    </div>
  );
}

export default RecentTransactions;
