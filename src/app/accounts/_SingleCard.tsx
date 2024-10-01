import React from "react";
import Link from "next/link";
import Image from "next/image";

import { PRIVATE_ROUTES } from "@/routes";
import chipCard from "../../../public/Chip_Card.png";
import bankLogo from "../../../public/bankLogo.png";
import { CardType, UserType } from "@/interfaces";
import { currentUserId } from "@/components/Autentication";
import { formatToMMYY } from "@/utils/date";

interface PropType {
  users?: UserType[];
  cards?: CardType[];
}

function SingleCard({ users, cards }: PropType) {
  const myCards = cards?.filter((card) => card.holder === currentUserId);
  const firstCard = myCards?.slice(0, 1);
  const card = firstCard[0];
  const noCard = firstCard?.length === 0;
  const myProfile = users?.find((user) => user.id === currentUserId);
  //=============================================
  // Subcomponents
  //=============================================
  const cardComp = (
    <div className="flex flex-shrink-0 flex-grow-0 flex-col rounded-[25px] bg-gradient-to-br from-[#4C49ED] to-[#0A06F4]">
      <div className="flex items-center justify-between gap-[202px] px-[25px] pt-[24px] text-white">
        <div className="flex flex-col">
          <div className="text-xs font-normal capitalize">balance</div>
          <div className="text-2xl font-semibold">${card?.balance}</div>
        </div>
        <Image src={chipCard} alt={"chip card image"} width={35} height={35} />
      </div>
      <div className="flex justify-start pb-[20px] pl-[26px] pt-[33px] text-white gap">
        <div>
          <div className="text-xs font-normal uppercase">card holder</div>
          <div className="text-sm font-semibold capitalize">
            {myProfile?.fullName ? myProfile.fullName : "-"}
          </div>
        </div>
        <div className="ml-[67px]">
          <div className="text-xs font-normal uppercase">valid thru</div>
          <div className="text-sm font-semibold">
            {formatToMMYY(card?.expireDate)}
          </div>
        </div>
      </div>
      <div className="flex justify-between justify-self-center rounded-b-[25px] bg-gradient-to-br from-[#4C49ED] to-[#0A06F4] py-[22px] pl-[16px] pr-[24px] text-white">
        <div className="text-3xl font-semibold">{card?.cardNumber}</div>
        <Image src={bankLogo} alt={"bank logo"} width={44} height={30} />
      </div>
    </div>
  );
  //=============================================
  // Render
  //=============================================
  return (
    <div className={"w-1/3 flex-shrink-0 flex-grow-0"}>
      <div className="mb-[20px] mt-[25px] flex justify-between overflow-auto">
        <div className="text-3xl font-semibold text-primary">My cards</div>
        {myCards?.length > 1 ? (
          <Link
            href={PRIVATE_ROUTES.cards.root}
            className={"text-base font-semibold text-primary"}
          >
            See All
          </Link>
        ) : null}
      </div>
      {noCard ? (
        <>
          <div className="flex justify-center items-center text-2xl font-bold flex-shrink-0 rounded-[25px] bg-gray-400">
            There is no Card to display
          </div>
          <div className="flex justify-center items-center text-2xl font-bold flex-shrink-0 rounded-[25px] bg-gray-400">
            There is no Card to display
          </div>
        </>
      ) : (
        cardComp
      )}
    </div>
  );
}

export default SingleCard;
