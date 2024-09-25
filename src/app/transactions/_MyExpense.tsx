"use client";

import React from "react";
import { Column } from "@ant-design/plots";
import { TransactionType } from "@/interfaces";
import { isAfter, isBefore, subDays } from "date-fns";
import { currentUserId, today } from "@/components/Autentication";
import {
  formatDateTOYYYYMMDD,
  formatToWeekDay,
  getDatesArray,
} from "@/utils/date";

interface Proptypes {
  transactions?: TransactionType[];
}

const expense = [
  { date: "A", amount: 2200 },
  { date: "B", amount: 1600 },
  { date: "C", amount: 1700 },
  { date: "D", amount: 20 },
  { date: "E", amount: 900 },
  { date: "F", amount: 690 },
  { date: "G", amount: 0 },
];

function MyExpense({ transactions = [] }: Proptypes) {
  const sevenDaysAgo = subDays(new Date(today), 7);
  const lastSevenDays = getDatesArray(sevenDaysAgo, 7);

  const myTransactions = transactions.filter(
    (transaction) => transaction.userId === currentUserId
  );
  const withdrawTransactions = myTransactions?.filter(
    (transaction) => transaction.type === 0
  );
  const weeklyExpense = withdrawTransactions?.filter((transaction) => {
    const date = new Date(transaction.date);
    return isAfter(date, sevenDaysAgo) && isBefore(date, today);
  });
  const value: unknown[] = [];
  lastSevenDays.forEach((day) => {
    const weekDay = formatToWeekDay(day);
    let withdrawAmount = 0;

    weeklyExpense.forEach((transaction) => {
      const formattedDate = formatDateTOYYYYMMDD(transaction.date);
      if (formattedDate === day) {
        withdrawAmount += transaction.amount;
      }
    });
    value.push({
      weekDay,
      amount: withdrawAmount,
    });
  });
  const config = {
    data: {
      value,
    },
    xField: "weekDay",
    yField: "amount",
    label: {
      textBaseline: "bottom",
    },
    xAxis: {
      line: { style: { lineWidth: 0 } },
      tickLine: { style: { display: "none" } },
      label: "none",
    },
    yAxis: {
      label: null, // Hides the Y-axis labels
      line: null, // Hides the Y-axis line

      grid: { line: { style: { lineWidth: 0 } } },
    },
    columnStyle: {
      fillOpacity: 0.7,
    },
    style: {
      radius: 7,
    },
  };
  return (
    <div className="overflow-auto">
      <div className="mb-[20px] mt-[25px] text-3xl font-semibold text-primary">
        My Expense
      </div>
      <Column
        className={"bg-white rounded-[25px]"}
        width={350}
        height={245}
        {...config}
      />
    </div>
  );
}

export default MyExpense;
