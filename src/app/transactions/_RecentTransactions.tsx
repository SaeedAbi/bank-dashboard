import React from "react";
import styles from "./styles.module.scss";
import { DownOutlined, UpOutlined } from "@ant-design/icons";
import { Button, Pagination, PaginationProps } from "antd";

import { currentUserId } from "@/components/Autentication";
import { ActionType, InventoryType, TransactionType } from "@/interfaces";
import { formatToddMMMhh } from "@/utils/date";

interface PropTypes {
  transactions?: TransactionType[];
  categories?: InventoryType[];
}

interface ExtendedTransactionType extends TransactionType {
  categoryName?: string;
}

const PAGE_SIZE = 5;

function RecentTransactions({ transactions = [], categories = [] }: PropTypes) {
  const [currentIndex, setCurrentIndex] = React.useState(1);
  const myTransactions = React.useMemo(()=>{
    return transactions?.filter(
      (transaction) => transaction.userId === currentUserId
    )
  },[transactions]);

  const filteredTransactions = myTransactions.reduce<ExtendedTransactionType[]>(
    (prev, curr, index) => {
      const dataCategory = categories?.find(
        (category) => category.id === curr.category
      );
      const lowerLimit = (currentIndex - 1) * PAGE_SIZE;
      const higherLimit = lowerLimit + PAGE_SIZE - 1;

      if (index >= lowerLimit && index <= higherLimit) {
        return [
          ...prev,
          {
            ...curr,
            categoryName: dataCategory ? dataCategory.label : "-",
          },
        ];
      }
      return prev;
    },
    []
  );
  console.log(myTransactions);

  const onChange: PaginationProps["onChange"] = (page) => {
    setCurrentIndex(page);
  };
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
        <table className="w-full border-collapse border-gray-200 bg-white rounded-3xl">
          <thead>
            <tr
              className={
                "border-b-borderGrey border-b-2 text-textBlue text-base"
              }
            >
              <th className="py-3 px-6 text-left tracking-wider font-medium">
                Description
              </th>
              <th className="py-3 px-6 text-left tracking-wider font-medium">
                Transaction ID
              </th>
              <th className="py-3 px-6 text-left tracking-wider font-medium">
                Category
              </th>
              <th className="py-3 px-6 text-left tracking-wider font-medium">
                Card
              </th>
              <th className="py-3 px-6 text-left tracking-wider font-medium">
                Date
              </th>
              <th className="py-3 px-6 text-left tracking-wider font-medium">
                Amount
              </th>
              <th className="py-3 px-6 text-left tracking-wider font-medium">
                Receipt
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredTransactions.map((transaction) => (
              <tr key={transaction.id}>
                <td className="py-4 px-6 text-black text-base font-normal">
                  <span className={"pr-1"}>
                    {transaction.type === ActionType.withdraw ? (
                      <UpOutlined style={{ color: "red" }} />
                    ) : (
                      <DownOutlined style={{ color: "green" }} />
                    )}
                  </span>
                  <span>{transaction.description}</span>
                </td>
                <td className="py-4 px-6 text-black text-base font-normal">
                  {transaction.id}
                </td>
                <td className="py-4 px-6 text-black text-base font-normal">
                  {transaction.categoryName}
                </td>
                <td className="py-4 px-6 text-black text-base font-normal">
                  {transaction.destinationCardNumber}
                </td>
                <td className="py-4 px-6 text-black text-base font-normal">
                  {formatToddMMMhh(transaction.date)}
                </td>
                <td className="py-4 px-6 text-black text-base font-normal">
                  ${transaction.amount}
                </td>
                <td className="py-4 px-6 text-black text-base font-normal">
                  <Button>download</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className={"pt-6 justify-self-end self-end "}>
        <Pagination
          current={currentIndex}
          onChange={onChange}
          total={myTransactions.length}
          defaultPageSize={PAGE_SIZE}
        />
      </div>
    </div>
  );
}

export default RecentTransactions;
