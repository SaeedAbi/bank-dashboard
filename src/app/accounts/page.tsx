"use client";

import * as React from "react";

import TotalSummery from "@/app/accounts/_TotalSummery";
import LastTransactions from "@/app/accounts/_LastTransactions";
import {
  useCards,
  useCategories,
  useTransactions,
  useUsers,
} from "@/hooks/queries";
import SingleCard from "@/app/accounts/_SingleCard";

function Accounts() {
  const { data: cardsData } = useCards();
  const { data: transactionsData } = useTransactions();
  const { data: categoriesData } = useCategories();
  const { data: usersData } = useUsers();
  return (
    <div className={"w-full"}>
      <TotalSummery cards={cardsData} transactions={transactionsData} />
      <div className={"flex gap-[30px] w-full"}>
        <LastTransactions
          transactions={transactionsData}
          categories={categoriesData}
        />
        <SingleCard users={usersData} cards={cardsData} />
      </div>
    </div>
  );
}

export default Accounts;
