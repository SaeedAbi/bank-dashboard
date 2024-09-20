import React from "react";

function RecentTransactions() {
  return (
    <div className={"flex flex-col flex-shrink flex-grow"}>
      <div className="mb-7 mt-[25px] text-3xl font-semibold text-primary">
        Recent Transactions
      </div>
      <div className={"flex gap-[82px] border-b-[1px] border-b-borderGrey"}>
        <button
          className={
            "font-medium text-base text-textBlue border-b-2 border-b-mainBg"
          }
        >
          All Transactions
        </button>
        <button
          className={
            "font-medium text-base text-textBlue border-b-2 border-b-mainBg hover:border-b-"
          }
        >
          Income
        </button>
        <button
          className={
            "font-medium text-base text-textBlue border-b-2 border-b-mainBg"
          }
        >
          Expense
        </button>
      </div>
      <div>ss</div>
    </div>
  );
}

export default RecentTransactions;
