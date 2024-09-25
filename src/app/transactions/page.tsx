"use client";

import * as React from "react";

import MyCards from "@/components/Main/Overview/MyCards";
import { useCards, useTransactions, useUsers } from "@/hooks/queries";
import MyExpense from "@/app/transactions/_MyExpense";
import RecentTransactions from "@/app/transactions/_RecentTransactions";

function Transaction() {
  const { data: cardData } = useCards();
  const { data: userData } = useUsers();
  const { data: transactionData } = useTransactions();
  return (
    <div>
      <div className={"flex flex-wrap gap-8"}>
        <MyCards cards={cardData} users={userData} />
        <MyExpense transactions={transactionData} />
      </div>
      <RecentTransactions />
    </div>
  );
}

export default Transaction;
