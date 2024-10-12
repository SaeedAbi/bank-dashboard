import React from "react";
import { Column } from "@ant-design/plots";
import { StockType } from "@/interfaces";

interface PropTypes {
  stocks?: StockType[];
}

function MonthlyRev({ stocks }: PropTypes) {
  const formatedStocks=stocks?.map(stocks=>{
    return {
date:,
      amount:stocks.amount
    }
  })

  const config = {
    data: {
      value:formatedStocks,
    },
    xField: "date",
    yField: "amount",
    colorField: "name",
    group: true,
    style: {
      inset: 0,
      // insetLeft:5,
      // insetRight:20,
      // insetBottom:10
      // insetTop:10
    },
  };
  return (
    <div className="mt-6">
      <div className="text-3xl font-semibold text-primary">
        Weekly Activities
      </div>
      <Column
        className={"mt-5 rounded-[25px] bg-white"}
        width={540}
        height={282}
        {...config}
      />
    </div>
  );
}

export default MonthlyRev;
