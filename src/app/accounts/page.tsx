"use client";

import * as React from "react";
import TotalSummery from "@/app/accounts/_TotalSummery";
import { useCards } from "@/hooks/queries";

function Accounts() {
  const { data: cardsData } = useCards();
  return (
    <div className={"w-full"}>
      <TotalSummery cards={cardsData} />
    </div>
  );
}

export default Accounts;
