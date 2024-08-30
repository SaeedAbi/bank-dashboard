import React from "react";
import { Area } from "@ant-design/plots";

function BalanceHistory() {
  const config = {
    data: {
      value: [
        { symbol: "GOOG", date: "Jan 1", amount: 195.62 },
        { symbol: "GOOG", date: "Feb 1", amount: 187.99 },
        { symbol: "GOOG", date: "Mar 1", amount: 180.51 },
        { symbol: "GOOG", date: "Apr 1", amount: 220 },
        { symbol: "GOOG", date: "May 1", amount: 277.27 },
        { symbol: "GOOG", date: "Jun 1", amount: 294.15 },
        { symbol: "GOOG", date: "Jul 1", amount: 287.76 },
        { symbol: "GOOG", date: "Aug 1", amount: 286 },
        { symbol: "GOOG", date: "Sep 1", amount: 316.46 },
        { symbol: "GOOG", date: "Oct 1", amount: 372.14 },
        { symbol: "GOOG", date: "Nov 1", amount: 404.91 },
        { symbol: "GOOG", date: "Dec 1", amount: 414.86 },
      ],
      transform: [
        {
          type: "filter",
          callback: (d: { symbol: string }) => d.symbol === "GOOG",
        },
      ],
    },
    xField: (d: { date: Date }) => new Date(d.date),
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
