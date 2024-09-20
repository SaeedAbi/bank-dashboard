"use client";

import * as React from "react";
import MyCards from "@/components/Main/Overview/MyCards";
import { useCards, useUsers } from "@/hooks/queries";
import MyExpense from "@/app/transactions/_MyExpense";
import RecentTransactions from "@/app/transactions/_RecentTransactions";

function Transaction() {
  const { data: cardData } = useCards();
  const { data: userData } = useUsers();
  return (
    <div>
      <div className={"flex flex-wrap gap-8"}>
        <MyCards cards={cardData} users={userData} />
        <MyExpense />
      </div>
      <RecentTransactions />
    </div>
  );
}

export default Transaction;
