import * as React from "react";

import Image from "next/image";
import chipCard from "../../../../public/Chip_Card.png";
import bankLogo from "../../../../public/bankLogo.png";
import { formatToMMYY } from "@/utils/helper";

const currCards = [
  {
    balance: 5200,
    cardNumber: 123232323232323,
    expireDate: "2024-01-15T00:00:00Z",
  },
];

function MyCards() {
  return (
    <div>
      <div className="mb-[20px] mt-[25px] flex justify-between overflow-auto">
        <span className="text-3xl font-semibold text-primary">my cards</span>
        <button className="text-base font-semibold text-primary">
          see all
        </button>
      </div>
      <div className="flex flex-wrap gap-[30px]">
        {currCards?.map((card) => {
          return (
            <div
              key={card.cardNumber}
              className="flex h-[235px] w-[350px] flex-shrink-0 flex-col rounded-[25px] bg-gradient-to-br from-[#4C49ED] to-[#0A06F4]"
            >
              <div className="flex items-center justify-between px-[25px] pt-[24px] text-white">
                <div className="flex flex-col">
                  <div className="text-xs font-normal capitalize">balance</div>
                  <div className="text-2xl font-semibold">${card.balance}</div>
                </div>
                <Image
                  src={chipCard}
                  alt={"chip card image"}
                  width={35}
                  height={35}
                />
              </div>
              <div className="flex justify-start pb-[20px] pl-[26px] pt-[33px] text-white">
                <div>
                  <div className="text-xs font-normal uppercase">
                    card holder
                  </div>
                  <div className="text-sm font-semibold capitalize">
                    saeed abdary
                  </div>
                </div>
                <div className="ml-[67px]">
                  <div className="text-xs font-normal uppercase">
                    valid thru
                  </div>
                  <div className="text-sm font-semibold">
                    {formatToMMYY(card.expireDate)}
                  </div>
                </div>
              </div>
              <div className="flex justify-between justify-self-center rounded-b-[25px] bg-gradient-to-br from-[#4C49ED] to-[#0A06F4] py-[22px] pl-[16px] pr-[24px] text-white">
                <div className="text-3xl font-semibold">{card.cardNumber}</div>
                <Image
                  src={bankLogo}
                  alt={"bank logo"}
                  width={44}
                  height={30}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default MyCards;
