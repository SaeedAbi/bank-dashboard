import React from "react";
import { Pie } from "@ant-design/plots";
import { InventoryType, TransactionType } from "@/interfaces";
import { currentUserId } from "@/components/Autentication";

interface PropType {
  transactions?: TransactionType[];
  categories?: InventoryType[];
}

interface Category {
  type?: string;
  value?: number;
}

function ExpenseStatistics({ transactions = [], categories = [] }: PropType) {
  const myTransactions = transactions?.filter(
    (transaction) => transaction.userId === currentUserId
  );
  const myCategory = myTransactions.map((transaction) =>
    categories?.find((category) => category.id === transaction.category)
  );
  const category: Category = {};
  myCategory.forEach((txn) => {
    const label = txn["label"];
    category[label] = category[label] ? category[label] + 1 : 1;
  });
  const categoryResult: Category[] = Object.entries(category).map(
    ([type, value]) => ({
      type,
      value,
    })
  );
  console.log(categoryResult);
  const config = {
    data: categoryResult,
    angleField: "value",
    colorField: "type",
    label: {
      text: "value",
      style: {
        fontWeight: "bold",
      },
    },
    legend: {
      color: {
        title: false,
        position: "top",
        rowPadding: 5,
      },
    },
  };

  return (
    <div className="mt-6">
      <div className="text-3xl font-semibold text-primary">Expense Statics</div>
      <Pie
        className={"mt-5 rounded-[25px] bg-white"}
        width={350}
        height={322}
        {...config}
      />
    </div>
  );
}

export default ExpenseStatistics;
