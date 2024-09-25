import React from "react";
import styles from "./styles.module.scss";

function RecentTransactions() {
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
                Type
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
            <tr>
              <td className="py-4 px-6">Spotify Subscription</td>
              <td className="py-4 px-6">#12548796</td>
              <td className="py-4 px-6">Shopping</td>
              <td className="py-4 px-6">1234 ****</td>
              <td className="py-4 px-6">28 Jan, 12.30 AM</td>
              <td className="py-4 px-6">-&#8364;2,500</td>
              <td className="py-4 px-6">Download</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default RecentTransactions;
