"use client";

import * as React from "react";

import MyCards from "@/components/Main/Overview/MyCards";
import {
  useCards,
  useCategories,
  useTransactions,
  useUsers,
} from "@/hooks/queries";
import MyExpense from "@/app/transactions/_MyExpense";
import RecentTransactions from "@/app/transactions/_RecentTransactions";

function Transaction() {
  const { data: cardData } = useCards();
  const { data: userData } = useUsers();
  const { data: transactionData } = useTransactions();
  const { data: categoriesData } = useCategories();
  return (
    <>
      <div className={"flex flex-wrap gap-8 w-full"}>
        <MyCards cards={cardData} users={userData} />
        <MyExpense transactions={transactionData} />
      </div>
      <RecentTransactions
        transactions={transactionData}
        categories={categoriesData}
      />
    </>
  );
}

export default Transaction;
