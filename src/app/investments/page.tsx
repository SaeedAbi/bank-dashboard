"use client";

import * as React from "react";
import InvestmentSummery from "@/app/investments/_InvestmentSummery";
import MonthlyRev from "@/app/investments/_MontlyRev";
import DailyRev from "@/app/investments/_DailyRev";
import MyInvestment from "@/app/investments/_MyInvestment";
import TrendingStock from "@/app/investments/_TrendingStock";
import { useStocks } from "@/hooks/queries";

function Investment() {
  const { data: stocksData } = useStocks();
  return (
    <div className={"w-full"}>
      <InvestmentSummery stocks={stocksData} />
      {/*<div>*/}
      {/*  <MonthlyRev stocks={stocksData} />*/}
      {/*  <DailyRev />*/}
      {/*</div>*/}
      <div className={"flex gap-[30px]"}>
        <MyInvestment stocks={stocksData} />
        <TrendingStock stocks={stocksData} />
      </div>
    </div>
  );
}

export default Investment;
