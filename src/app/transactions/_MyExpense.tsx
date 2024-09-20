import React from "react";
import { Column } from "@ant-design/plots";

const expense = [
  { date: "A", amount: 2200 },
  { date: "B", amount: 1600 },
  { date: "C", amount: 1700 },
  { date: "D", amount: 20 },
  { date: "E", amount: 900 },
  { date: "F", amount: 690 },
  { date: "G", amount: 0 },
];

function MyExpense() {
  const config = {
    data: {
      value: expense,
    },
    xField: "date",
    yField: "amount",
    label: {
      textBaseline: "bottom",
    },
    xAxis: {
      line: { style: { lineWidth: 0 } },
      tickLine: { style: { display: "none" } },
      label: "none",
    },
    yAxis: {
      label: null, // Hides the Y-axis labels
      line: null, // Hides the Y-axis line

      grid: { line: { style: { lineWidth: 0 } } },
    },
    columnStyle: {
      fillOpacity: 0.7,
    },
    style: {
      radius: 7,
    },
  };
  return (
    <div className="overflow-auto">
      <div className="mb-[20px] mt-[25px] text-3xl font-semibold text-primary">
        My Expense
      </div>
      <Column
        className={"bg-white rounded-[25px]"}
        width={350}
        height={245}
        {...config}
      />
    </div>
  );
}

export default MyExpense;
