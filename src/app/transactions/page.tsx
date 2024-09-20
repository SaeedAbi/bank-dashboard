"use client";

import * as React from "react";
import MyCards from "@/components/Main/Overview/MyCards";
import { useCards, useUsers } from "@/hooks/queries";
import _MyExpense from "@/app/transactions/_MyExpense";

function Transaction() {
  const { data: cardData } = useCards();
  const { data: userData } = useUsers();
  return (
    <div>
      <div className={"flex flex-wrap gap-8"}>
        <MyCards cards={cardData} users={userData} />
        <_MyExpense />
      </div>
    </div>
  );
}

export default Transaction;
