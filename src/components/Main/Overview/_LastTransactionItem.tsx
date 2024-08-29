import React from "react";
import { Avatar, Space } from "antd";
import { MdCardTravel } from "react-icons/md";

function LastTransactionItem() {
  return (
    <div className="ml-[25px] mr-[24px] mt-[25px] flex">
      <Space className="mr-[17px]">
        <Avatar
          style={{ height: "55px", width: "55px" }}
          icon={<MdCardTravel />}
        />
      </Space>
      <div>
        <div className="text-base font-medium text-black">
          Deposit from my Card
        </div>
        <div className="text-sm font-normal text-textBlue">25 jan 2022</div>
      </div>
      <div className="text-base font-medium text-deposit">$5,000</div>
    </div>
  );
}

export default LastTransactionItem;
