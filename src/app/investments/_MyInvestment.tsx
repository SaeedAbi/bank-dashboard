import React from "react";
import { ReturnType, StockType } from "@/interfaces";

interface PropTypes {
  stocks?: StockType[];
}

function MyInvestment({ stocks }: PropTypes) {
  const lastThreeStocks = stocks?.slice(0, 3);
  return (
    <div className={"flex flex-col gap-4 flex-shrink flex-grow"}>
      <div className="text-3xl font-semibold text-primary mt-[25px]">
        My Investment
      </div>
      {lastThreeStocks?.map((stock) => (
        <div
          key={stock.id}
          className={
            "p-3.5 bg-white flex justify-between items-center rounded-2xl"
          }
        >
          <div className={"flex gap-8 items-center"}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="60"
              height="60"
              viewBox="0 0 60 60"
              fill="none"
            >
              <rect width="60" height="60" rx="20" fill="#FFE0EB" />
              <path
                d="M39.6167 37.4826C39.2386 38.356 38.7911 39.16 38.2726 39.8992C37.5658 40.9069 36.9871 41.6044 36.5411 41.9917C35.8498 42.6275 35.1091 42.9531 34.3159 42.9716C33.7465 42.9716 33.0597 42.8096 32.2604 42.4809C31.4584 42.1537 30.7214 41.9917 30.0475 41.9917C29.3407 41.9917 28.5827 42.1537 27.772 42.4809C26.9599 42.8096 26.3058 42.9809 25.8056 42.9979C25.045 43.0303 24.2869 42.6954 23.5301 41.9917C23.0471 41.5704 22.443 40.8482 21.7192 39.8251C20.9427 38.7325 20.3043 37.4656 19.8041 36.0212C19.2685 34.4611 19 32.9503 19 31.4877C19 29.8123 19.362 28.3673 20.0872 27.1564C20.6571 26.1837 21.4152 25.4165 22.3641 24.8532C23.313 24.29 24.3383 24.0029 25.4424 23.9846C26.0466 23.9846 26.8388 24.1714 27.8233 24.5387C28.8051 24.9072 29.4355 25.0941 29.7119 25.0941C29.9185 25.0941 30.6188 24.8756 31.8059 24.44C32.9286 24.036 33.8761 23.8687 34.6523 23.9346C36.7556 24.1043 38.3358 24.9334 39.3867 26.4272C37.5056 27.567 36.5751 29.1634 36.5936 31.2113C36.6106 32.8065 37.1893 34.1339 38.3266 35.1879C38.842 35.6771 39.4176 36.0552 40.058 36.3237C39.9191 36.7264 39.7725 37.1123 39.6167 37.4826V37.4826ZM34.7927 18.5001C34.7927 19.7504 34.3359 20.9178 33.4255 21.9983C32.3268 23.2829 30.9978 24.0251 29.5566 23.908C29.5373 23.7508 29.5276 23.5926 29.5276 23.4342C29.5276 22.234 30.0501 20.9494 30.978 19.8992C31.4413 19.3674 32.0305 18.9252 32.7449 18.5725C33.4579 18.2251 34.1323 18.0329 34.7665 18C34.785 18.1671 34.7927 18.3343 34.7927 18.5001V18.5001Z"
                fill="#FF82AC"
              />
            </svg>
            <div className={"text-black text-base font-medium"}>
              {stock.label}
            </div>
          </div>
          <div className={"text-black text-base font-medium"}>
            {stock.amount}$
          </div>
          {stock.type === ReturnType.positive ? (
            <div className={"text-base font-medium text-green-500 "}>
              {stock.return}
            </div>
          ) : (
            <div className={"text-base font-medium text-red-500 "}>
              {stock.return}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default MyInvestment;
