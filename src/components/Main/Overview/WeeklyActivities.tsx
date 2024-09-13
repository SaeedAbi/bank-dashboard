"use client";

import React from "react";
import { Column } from "@ant-design/plots";
import { ActionType, TransactionType } from "@/interfaces";
import { isAfter, isBefore, subDays } from "date-fns";
import {
  formatDateTOYYYYMMDD,
  formatToWeekDay,
  getDatesArray,
} from "@/utils/date";

import { currentUserId, today } from "@/components/Autentication";

interface PropType {
  transactions?: TransactionType[];
}

function WeeklyActivities({ transactions = [] }: PropType) {
  const sevenDaysAgo = subDays(new Date(today), 7);
  const lastSevenDays = getDatesArray(sevenDaysAgo, 7);

  const myTransactions = transactions.filter(
    (transaction) => transaction.userId === currentUserId
  );

  const lastWeekTransactions = myTransactions.filter((transaction) => {
    const date = new Date(transaction.date);
    console.log(sevenDaysAgo);
    return isAfter(date, sevenDaysAgo) && isBefore(date, today);
  });
  const value: unknown[] = [];

  // console.log(lastSevenDays); // 6 to 12

  lastSevenDays.forEach((day) => {
    const weekDay = formatToWeekDay(day);
    let withdrawAmount = 0;
    let depositAmount = 0;

    lastWeekTransactions.forEach((transaction) => {
      const formattedDate = formatDateTOYYYYMMDD(transaction.date);

      if (formattedDate === day) {
        if (transaction.type === ActionType.withdraw) {
          withdrawAmount += transaction.amount;
        } else if (transaction.type === ActionType.deposit) {
          depositAmount += transaction.amount;
        }
      }
    });

    value.push({
      name: "Withdraw",
      weekDay,
      amount: withdrawAmount,
    });
    value.push({
      name: "Deposit",
      weekDay,
      amount: depositAmount,
    });
  });
  const config = {
    data: {
      value,
    },
    xField: "weekDay",
    yField: "amount",
    colorField: "name",
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
    <div className="mt-6">
      <div className="text-3xl font-semibold text-primary">
        Weekly Activities
      </div>
      <Column
        className={"mt-5 rounded-[25px] bg-white"}
        width={730}
        height={322}
        {...config}
      />
    </div>
  );
}

export default WeeklyActivities;
