"use client";

import * as React from "react";
import TotalSummery from "@/app/accounts/_TotalSummery";
import { useCards, useTransactions } from "@/hooks/queries";

function Accounts() {
  const { data: cardsData } = useCards();
  const { data: transactionsData } = useTransactions();
  return (
    <div className={"w-full"}>
      <TotalSummery cards={cardsData} transactions={transactionsData} />
    </div>
  );
}

export default Accounts;
