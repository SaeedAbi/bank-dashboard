"use client";

import * as React from "react";
import { useCards, useUsers } from "@/hooks/queries";
import { currentUserId } from "@/components/Autentication";
import Image from "next/image";
import chipCard from "../../../public/Chip_Card.png";
import { formatToMMYY } from "@/utils/helper";
import bankLogo from "../../../public/bankLogo.png";

function Cards() {
  const { data: users } = useUsers();
  const { data: cards } = useCards();

  const currCards = cards?.filter((card) => card.holder === currentUserId);
  const currUser = users?.find((user) => user.id === currentUserId);

  return (
    <div className={"flex gap-8 flex-wrap items-start"}>
      {currCards?.map((card) => {
        return (
          <div
            key={card.cardNumber}
            className="flex flex-shrink-0 flex-col rounded-[25px] bg-gradient-to-br from-[#4C49ED] to-[#0A06F4]"
          >
            <div className="flex items-center justify-between gap-[202px] px-[25px] pt-[24px] text-white">
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
            <div className="flex justify-start pb-[20px] pl-[26px] pt-[33px] text-white gap">
              <div>
                <div className="text-xs font-normal uppercase">card holder</div>
                <div className="text-sm font-semibold capitalize">
                  {currUser?.fullName ? currUser.fullName : "-"}
                </div>
              </div>
              <div className="ml-[67px]">
                <div className="text-xs font-normal uppercase">valid thru</div>
                <div className="text-sm font-semibold">
                  {formatToMMYY(card.expireDate)}
                </div>
              </div>
            </div>
            <div className="flex justify-between justify-self-center rounded-b-[25px] bg-gradient-to-br from-[#4C49ED] to-[#0A06F4] py-[22px] pl-[16px] pr-[24px] text-white">
              <div className="text-3xl font-semibold">{card.cardNumber}</div>
              <Image src={bankLogo} alt={"bank logo"} width={44} height={30} />
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Cards;
