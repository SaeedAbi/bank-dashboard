import React from "react";
import { TransactionType } from "@/interfaces";
import { Avatar, Space } from "antd";
import { MdCardTravel } from "react-icons/md";
import { currentUserId } from "@/components/Autentication";
import { formatToMMYY } from "@/utils/date";
import classNames from "classnames";

interface Proptypes {
  transactions?: TransactionType[];
}

function RecentTransactions({ transactions = [] }: Proptypes) {
  const currTransactions = transactions?.filter(
    (transaction) => transaction.userId === currentUserId
  );
  const firstThreeTransactions = currTransactions?.slice(0, 3);

  return (
    <div className="mt-6">
      <div className="text-3xl font-semibold text-primary">
        Recent Transactions
      </div>
      <div className="mt-5 flex h-[243px] w-[350px] flex-col justify-center rounded-[25px] bg-white pb-[30px]">
        {firstThreeTransactions?.map((transaction) => {
          const isDeposit = transaction.type === 1;
          return (
            <div key={transaction.id} className="ml-[25px] mr-8 mt-[25px] flex">
              <Space className="mr-[17px]">
                <Avatar
                  style={
                    isDeposit
                      ? {
                          height: "55px",
                          width: "55px",
                          backgroundColor: "green",
                        }
                      : {
                          height: "55px",
                          width: "55px",
                          backgroundColor: "salmon",
                        }
                  }
                  icon={<MdCardTravel />}
                />
              </Space>
              <div className="self-center">
                <div className="text-base font-medium text-black">
                  {transaction.description}
                </div>
                <div className="text-sm font-normal text-textBlue">
                  {formatToMMYY(transaction.date)}
                </div>
              </div>
              <div
                className={classNames(
                  "text-base self-center font-medium text-withdraw pl-8",
                  {
                    "text-deposit": isDeposit,
                  }
                )}
              >
                ${transaction.amount}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default RecentTransactions;
