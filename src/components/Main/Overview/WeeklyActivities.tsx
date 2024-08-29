import React from 'react';
import { Column } from '@ant-design/plots';

function WeeklyActivities() {
  const config = {
    data: {
      value: [
        {
          name: 'Withdraw',
          weekDay: 'Mon',
          amount: 200,
        },
        {
          name: 'Withdraw',
          weekDay: 'Tue',
          amount: 500,
        },
        {
          name: 'Withdraw',
          weekDay: 'Wed',
          amount: 100,
        },
        {
          name: 'Withdraw',
          weekDay: 'Thu',
          amount: 300,
        },
        {
          name: 'Withdraw',
          weekDay: 'Fri',
          amount: 400,
        },
        {
          name: 'Withdraw',
          weekDay: 'Sat',
          amount: 160,
        },
        {
          name: 'Withdraw',
          weekDay: 'Sun',
          amount: 400,
        },
        {
          name: 'Deposit',
          weekDay: 'Mon',
          amount: 200,
        },
        {
          name: 'Deposit',
          weekDay: 'Tue',
          amount: 200,
        },
        {
          name: 'Deposit',
          weekDay: 'Wed',
          amount: 700,
        },
        {
          name: 'Deposit',
          weekDay: 'Thu',
          amount: 800,
        },
        {
          name: 'Deposit',
          weekDay: 'Fri',
          amount: 200,
        },
        {
          name: 'Deposit',
          weekDay: 'Sat',
          amount: 200,
        },
        {
          name: 'Deposit',
          weekDay: 'Sun',
          amount: 900,
        },
      ],
    },
    xField: 'weekDay',
    yField: 'amount',
    colorField: 'name',
    group: true,
    style: {
      inset: 0,
      // insetLeft:5,
      // insetRight:20,
      // insetBottom:10
      // insetTop:10
    },
  };
  return (
    <div className='mt-6'>
      <div className='text-3xl font-semibold text-primary'>
        Weekly Activities
      </div>
      <Column className={"mt-5 rounded-[25px] bg-white"} width={730} height={322} {...config} />
    </div>
  );
}

export default WeeklyActivities;
