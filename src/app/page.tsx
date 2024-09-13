"use client";

import * as React from "react";

import MyCards from "@/components/Main/Overview/MyCards";
import RecentTransactions from "@/components/Main/Overview/RecentTransactions";
import WeeklyActivities from "@/components/Main/Overview/WeeklyActivities";
import ExpenseStatistics from "@/components/Main/Overview/ExpenseStatistics";
import QuickTransfer from "@/components/Main/Overview/QuickTransfer";
import BalanceHistory from "@/components/Main/Overview/BalanceHistory";
import { useCards, useTransactions, useUsers } from "@/hooks/queries";

export default function Home() {
  const { data: cardData } = useCards();
  const { data: userData } = useUsers();
  const { data: transactionData } = useTransactions();

  return (
    <>
      <div className={"flex flex-wrap gap-[30px]"}>
        <MyCards cards={cardData} users={userData} />
        <RecentTransactions transactions={transactionData} />
      </div>
      <div className={"flex flex-wrap gap-[30px]"}>
        <WeeklyActivities transactions={transactionData} />
        <ExpenseStatistics />
      </div>
      <div className={"flex flex-wrap gap-[30px]"}>
        <QuickTransfer />
        <BalanceHistory />
      </div>
    </>
  );
}
