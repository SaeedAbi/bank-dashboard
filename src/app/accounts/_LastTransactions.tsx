import React from "react";
import { DownSquareOutlined, UpSquareOutlined } from "@ant-design/icons";
import {
  ActionType,
  InventoryType,
  TransactionStatus,
  TransactionType,
} from "@/interfaces";
import { currentUserId } from "@/components/Autentication";
import { formatDateTOYYYYMMDD } from "@/utils/date";

interface PropType {
  transactions?: TransactionType[];
  categories?: InventoryType[];
}

interface ExtendedTransactionType extends TransactionType {
  categoryName?: string;
}

function LastTransactions({ transactions, categories }: PropType) {
  const myTransactions = transactions?.filter(
    (transaction) => transaction.userId === currentUserId
  );

  const filteredTransactions = myTransactions?.reduce<
    ExtendedTransactionType[]
  >((prev, curr) => {
    const dataCategory = categories?.find(
      (category) => category.id === curr.category
    );
    return [
      ...prev,
      {
        ...curr,
        categoryName: dataCategory ? dataCategory.label : "-",
      },
    ];
  }, []);
  const threeLastTransaction = filteredTransactions?.slice(0, 3);
  return (
    <div>
      <div className="mb-[20px] mt-[25px] overflow-auto w-2/3">
        <div className="mb-5 text-3xl font-semibold text-primary">
          Last Transaction
        </div>
        <div className={"flex flex-col gap-6 bg-white rounded-3xl p-6"}>
          {threeLastTransaction?.map((transaction) => (
            <div
              key={transaction.id}
              className={"flex items-center justify-between"}
            >
              {transaction.type === ActionType.withdraw ? (
                <UpSquareOutlined
                  style={{
                    fontSize: "27px",
                    color: "red",
                  }}
                />
              ) : (
                <DownSquareOutlined
                  style={{
                    fontSize: "27px",
                    color: "green",
                  }}
                />
              )}
              <div className={"pl-6 flex flex-col gap-2"}>
                <div className={"text-base text-black font-medium"}>
                  {transaction.description}
                </div>
                <div className={"text-textBlue text-sm font-normal"}>
                  {formatDateTOYYYYMMDD(transaction.date)}
                </div>
              </div>
              <div className={"text-textBlue text-base font-normal"}>
                {transaction.categoryName}
              </div>
              <div className={"text-textBlue text-base font-normal"}>
                {transaction.destinationCardNumber}
              </div>
              <div className={"text-textBlue text-base font-normal"}>
                {transaction.status === TransactionStatus.complete && (
                  <div className={"text-green-500"}>Complete</div>
                )}
                {transaction.status === TransactionStatus.pending && (
                  <div className={"text-yellow-500"}>Pending</div>
                )}
                {transaction.status === TransactionStatus.rejected && (
                  <div className={"text-red-500"}>Rejected</div>
                )}
              </div>
              <div className={"text-textBlue text-base font-normal"}>
                {transaction.amount}$
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default LastTransactions;
