import React from "react";
import { Avatar, Button, Input, Space } from "antd";
import { RightOutlined, SendOutlined, UserOutlined } from "@ant-design/icons";

import { InventoryType, UserType } from "@/interfaces";
import { currentUserId } from "@/components/Autentication";

interface PropType {
  users?: UserType[];
  positions?: InventoryType[];
}

interface ContactType extends UserType {
  positionLabel?: string;
}

function QuickTransfer({ users = [], positions = [] }: PropType) {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const myUsers = users?.filter((user) => user.id !== currentUserId);
  const contacts = myUsers.reduce<ContactType[]>((prev, curr, index) => {
    const positionId = curr.position;
    const foundedPosition = positions?.find(
      (position) => position.id === positionId
    );
    const lowerLimit = currentIndex * 3;
    const higherLimit = lowerLimit + 2;

    if (index >= lowerLimit && index <= higherLimit) {
      return [
        ...prev,
        {
          ...curr,
          positionLabel: foundedPosition ? foundedPosition.label : "-",
        },
      ];
    }

    return prev;
  }, []);
  return (
    <div className={"mt-6"}>
      <div className="text-3xl font-semibold text-primary">
        Recent Transactions
      </div>
      <div
        className={
          "mt-5 flex flex-shrink-0 flex-col justify-center rounded-[25px] bg-white px-[26px] py-[30px]"
        }
      >
        <div className={"flex gap-7 justify-center items-center"}>
          {contacts.map((contact) => (
            <div
              key={contact.id}
              className={"flex flex-col items-center pb-7 pt-9"}
            >
              <Space wrap style={{ paddingBottom: "15px" }}>
                <Avatar
                  style={{ height: "60px", width: "60px" }}
                  icon={contact.avatar ? contact.avatar : <UserOutlined />}
                />
              </Space>
              <div
                className={
                  "pb-1 text-base font-normal text-black justify-self-center"
                }
              >
                {contact.fullName}
              </div>
              <div className={"text-sm font-normal text-textBlue"}>
                {contact.positionLabel}
              </div>
            </div>
          ))}
          {myUsers.length > (currentIndex + 1) * 3 && (
            <Button
              onClick={() => setCurrentIndex((prevState) => prevState + 1)}
              style={{ height: "50px", width: "50px" }}
              shape={"circle"}
              icon={<RightOutlined style={{ color: "#718EBF" }} />}
            />
          )}
        </div>
        <div>
          <div className={"text-base font-normal text-textBlue"}>
            Write Amount
          </div>
          <Space.Compact
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <Input defaultValue="5200" style={{ borderRadius: "50px" }} />
            <Button
              className={
                "border-spacing-10 text-base font-normal text-textBlue"
              }
              type="primary"
              icon={<SendOutlined />}
              style={{ height: 50, width: 125, borderRadius: "50px" }}
            >
              Send
            </Button>
          </Space.Compact>
        </div>
      </div>
    </div>
  );
}

export default QuickTransfer;
