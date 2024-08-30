import React from "react";
import LastTransactionItem from "@/components/Main/Overview/_LastTransactionItem";

function RecentTransactions() {
  return (
    <div className="mt-6">
      <div className="text-3xl font-semibold text-primary">
        Recent Transactions
      </div>
      <div className="mt-5 flex h-[235px] w-[350px] flex-col justify-center rounded-[25px] bg-white pb-[30px]">
        <LastTransactionItem />
        <LastTransactionItem />
        <LastTransactionItem />
      </div>
    </div>
  );
}

export default RecentTransactions;
