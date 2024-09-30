"use client";

import * as React from "react";
import TotalSummery from "@/app/accounts/_TotalSummery";
import LastTransactions from "@/app/accounts/_LastTransactions";
import { useCards, useCategories, useTransactions } from "@/hooks/queries";

function Accounts() {
  const { data: cardsData } = useCards();
  const { data: transactionsData } = useTransactions();
  const { data: categoriesData } = useCategories();
  return (
    <div className={"w-full"}>
      <TotalSummery cards={cardsData} transactions={transactionsData} />
      <div>
        <LastTransactions
          transactions={transactionsData}
          categories={categoriesData}
        />
      </div>
    </div>
  );
}

export default Accounts;
