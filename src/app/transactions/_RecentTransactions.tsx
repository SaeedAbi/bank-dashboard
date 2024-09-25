import React from "react";
import styles from "./styles.module.scss";
import { InventoryType, TransactionType } from "@/interfaces";
import { currentUserId } from "@/components/Autentication";
import { formatToddMMMhh } from "@/utils/date";

interface PropTypes {
  transactions?: TransactionType[];
  categories?: InventoryType[];
}

function RecentTransactions({ transactions = [], categories = [] }: PropTypes) {
  const myTransactions = transactions?.filter(
    (transaction) => (transaction.userId = currentUserId)
  );

  return (
    <div className={"flex flex-col flex-shrink flex-grow"}>
      <div className="mb-7 mt-[25px] text-3xl font-semibold text-primary">
        Recent Transactions
      </div>
      <div className={"flex gap-[82px]"}>
        <button className={styles.link}>All Transactions</button>
        <button className={styles.link}>Income</button>
        <button className={styles.link}>Expense</button>
      </div>
      <div className={"pt-6 border-t-2 border-b-borderGrey"}>
        <table className="w-full border-collapse border-gray-200 bg-white rounded-3xl	">
          <thead>
            <tr className={"border-b-borderGrey border-b-2"}>
              <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Description
              </th>
              <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Transaction ID
              </th>
              <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Category
              </th>
              <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Card
              </th>
              <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Date
              </th>
              <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Amount
              </th>
              <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Receipt
              </th>
            </tr>
          </thead>
          <tbody>
            {myTransactions.map((transaction) => {
              const dataCategory = categories?.find(
                (category) => category.id === transaction.category
              );
              return (
                <tr>
                  <td className="py-4 px-6">{transaction.description}</td>
                  <td className="py-4 px-6">{transaction.id}</td>
                  <td className="py-4 px-6">{dataCategory?.label}</td>
                  <td className="py-4 px-6">
                    {transaction.destinationCardNumber}
                  </td>
                  <td className="py-4 px-6">
                    {formatToddMMMhh(transaction.date)}
                  </td>
                  <td className="py-4 px-6">${transaction.amount}</td>
                  <td className="py-4 px-6">download</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default RecentTransactions;
