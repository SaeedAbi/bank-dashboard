import React from "react";
import { Pie } from "@ant-design/plots";
import { InventoryType, TransactionType } from "@/interfaces";
import { currentUserId } from "@/components/Autentication";

interface PropType {
  transactions?: TransactionType[];
  categories?: InventoryType[];
}

function ExpenseStatistics({ transactions = [], categories = [] }: PropType) {
  const myTransactions = transactions?.filter(
    (transaction) => transaction.userId === currentUserId
  );
  const myCategories = myTransactions.reduce<InventoryType[]>((prev, cur) => {
    const foundedCategory = categories?.find(
      (category) => category.id === cur.category
    );

    if (foundedCategory) {
      return [...prev, foundedCategory];
    }
    return prev;
  }, []);
  const categoryResult: Record<string, number> = {};

  myCategories.forEach((category) => {
    if (category.label in categoryResult) {
      categoryResult[category.label] = categoryResult[category.label] + 1;
    } else {
      categoryResult[category.label] = 1;
    }
  });

  const config = {
    data: Object.entries(categoryResult).map(([type, value]) => ({
      type,
      value,
    })),
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
