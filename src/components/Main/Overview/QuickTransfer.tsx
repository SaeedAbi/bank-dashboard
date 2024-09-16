import React from "react";
import { Avatar, Button, Input, Space } from "antd";
import { RightOutlined, SendOutlined, UserOutlined } from "@ant-design/icons";
import { InventoryType, UserType } from "@/interfaces";
import { currentUserId } from "@/components/Autentication";

interface PropType {
  users?: UserType[];
  positions?: InventoryType[];
}

function QuickTransfer({ users = [], positions = [] }: PropType) {
  const userFriends = users.filter((user) => user.id !== currentUserId);
  const positionMap = new Map(positions.map((p) => [p.id, p.label]));
  userFriends.forEach((user) => {
    user.position = positionMap.get(user.position);
    console.log(userFriends);
  });
  return (
    <div className={"mt-6"}>
      <div className="text-3xl font-semibold text-primary">
        Recent Transactions
      </div>
      <div
        className={
          "mt-5 flex h-[276px] w-[445px] flex-shrink-0 flex-col justify-center rounded-[25px] bg-white px-[26px] py-[30px]"
        }
      >
        <div className={"flex items-center gap-7"}>
          {userFriends.map((contact) => (
            <div key={contact.id} className={"flex flex-col items-center pb-7"}>
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
              <div className={"text-sm font-normal text-textBlue"}>title</div>
            </div>
          ))}
          <Button
            style={{ height: "50px", width: "50px" }}
            shape={"circle"}
            icon={<RightOutlined style={{ color: "#718EBF" }} />}
          />
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
