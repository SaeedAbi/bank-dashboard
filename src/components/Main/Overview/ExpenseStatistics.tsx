import React from 'react';
import { Pie } from '@ant-design/plots';

function ExpenseStatistics() {
  const config = {
    data: [
      { type: 'Entertainment', value: 27 },
      { type: 'Investment', value: 25 },
      { type: 'Bill Expense', value: 18 },
      { type: 'Other', value: 15 },
    ],
    angleField: 'value',
    colorField: 'type',
    label: {
      text: 'value',
      style: {
        fontWeight: 'bold',
      },
    },
    legend: false,
  };

  return (
    <div className='mt-6'>
      <div className='text-3xl font-semibold text-primary'>Expense Statics</div>
      <Pie
        className={'mt-5 rounded-[25px] bg-white'}
        width={350}
        height={322}
        {...config}
      />
    </div>
  );
}

export default ExpenseStatistics;
