import React from "react";
import { ReturnType, StockType } from "@/interfaces";

interface PropType {
  stocks?: StockType[];
}

function TrendingStock({ stocks }: PropType) {
  const lastFiveStocks = stocks?.slice(0, 5);
  return (
    <div className={"w-1/3 flex-grow-0 flex-shrink-0"}>
      <div className="text-3xl font-semibold text-primary mt-[25px] pb-5">
        Trending Stocks
      </div>
      <table className="w-full border-collapse border-gray-200 bg-white rounded-3xl border-t-2 border-b-borderGrey">
        <thead>
          <tr>
            <th
              className={
                "text-textBlue text-base font-medium py-3 px-6 text-left tracking-wider"
              }
            >
              SL No
            </th>
            <th
              className={
                "text-textBlue text-base font-medium py-3 px-6 text-left tracking-wider"
              }
            >
              Name
            </th>
            <th
              className={
                "text-textBlue text-base font-medium py-3 px-6 text-left tracking-wider"
              }
            >
              Price
            </th>
            <th
              className={
                "text-textBlue text-base font-medium py-3 px-6 text-left tracking-wider"
              }
            >
              Return
            </th>
          </tr>
        </thead>
        <tbody>
          {lastFiveStocks?.map((stock, index) => (
            <tr key={stock.id}>
              <td className="py-4 px-6 text-black text-base font-normal">
                {index}
              </td>
              <td className="py-4 px-6 text-black text-base font-normal">
                {stock.label}
              </td>
              <td className="py-4 px-6 text-black text-base font-normal">
                ${stock.amount}
              </td>
              {stock.type === ReturnType.positive ? (
                <td className="py-4 px-6 text-green-500 text-base font-normal">
                  {stock.return}
                </td>
              ) : (
                <td className="py-4 px-6 text-red-500 text-base font-normal">
                  {stock.return}
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TrendingStock;
