import React from "react";
import chipCard from "../../../../public/Chip_Card.png";
import bankLogo from "../../../../public/bankLogo.png";
import Image from "next/image";

function Card() {
  return (
    <div className="flex h-[235px] w-[350px] flex-shrink-0 flex-col rounded-[25px] bg-gradient-to-br from-[#4C49ED] to-[#0A06F4]">
      <div className="flex items-center justify-between px-[25px] pt-[24px] text-white">
        <div className="flex flex-col">
          <div className="text-xs font-normal capitalize">balance</div>
          <div className="text-2xl font-semibold">$5222.74</div>
        </div>
        <Image src={chipCard} alt={"chip card image"} width={35} height={35} />
      </div>
      <div className="flex justify-start pb-[20px] pl-[26px] pt-[33px] text-white">
        <div>
          <div className="text-xs font-normal uppercase">card holder</div>
          <div className="text-sm font-semibold capitalize">eddy cusuma</div>
        </div>
        <div className="ml-[67px]">
          <div className="text-xs font-normal uppercase">valid thru</div>
          <div className="text-sm font-semibold">12/22</div>
        </div>
      </div>
      <div className="flex justify-between justify-self-center rounded-b-[25px] bg-gradient-to-br from-[#4C49ED] to-[#0A06F4] py-[22px] pl-[16px] pr-[24px] text-white">
        <div className="text-3xl font-semibold">3742 2314 1323 1554</div>
        <Image src={bankLogo} alt={"bank logo"} width={44} height={30} />
      </div>
    </div>
  );
}

export default Card;
