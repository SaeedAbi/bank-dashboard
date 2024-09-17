import React from "react";
import { Area } from "@ant-design/plots";
import { TransactionType } from "@/interfaces";
import { currentUserId } from "@/components/Autentication";
import { formatToMMMM } from "@/utils/date";

interface PropTypes {
  transactions?: TransactionType[];
}

function BalanceHistory({ transactions = [] }: PropTypes) {
  const myTransactions = transactions?.filter(
    (transaction) => transaction.userId === currentUserId
  );
  const formatTransaction = myTransactions?.map((transaction) => {
    return {
      date: formatToMMMM(transaction.date),
      amount: transaction.amount,
    };
  });
  const config = {
    data: {
      value: formatTransaction,
    },
    xField: "date",
    yField: "amount",
    style: {
      fill: "linear-gradient(-90deg, white 0%,#0A06F4 100%)",
    },
    axis: {
      y: { labelFormatter: "~s" },
    },
    line: {
      style: {
        stroke: "#0A06F4",
        strokeWidth: 3,
      },
    },
  };
  return (
    <div className="mt-6">
      <div className="text-3xl font-semibold text-primary">Balance History</div>
      <Area
        className={"mt-5 rounded-[25px] bg-white"}
        width={635}
        height={276}
        {...config}
      />
      ;
    </div>
  );
}

export default BalanceHistory;
