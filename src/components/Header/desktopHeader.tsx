import * as React from "react";
import { Avatar, Button, Space } from "antd";
import { BellOutlined, SettingOutlined, UserOutlined } from "@ant-design/icons";
import Search from "@/components/Header/search";

function DesktopHeader() {
  return (
    <header
      className={`flex max-h-[100px] flex-shrink-0 flex-grow-0 flex-wrap items-center justify-between px-[25px] py-[20px]`}
    >
      <div className="h-[34px] w-[129px] flex-shrink-0 text-[25px] font-semibold capitalize text-primary">
        overview
      </div>
      <div className="flex items-center gap-[20px]">
        <Search height={"50px"} width={"255px"} />
        <Button
          style={{ height: "50px", width: "50px" }}
          shape={"circle"}
          icon={<SettingOutlined style={{ color: "#718EBF" }} />}
        />
        <Button
          style={{ height: "50px", width: "50px" }}
          shape={"circle"}
          icon={<BellOutlined style={{ color: "#FE5C73" }} />}
        />
        <Space wrap>
          <Avatar
            style={{ height: "60px", width: "60px" }}
            icon={<UserOutlined />}
          />
        </Space>
      </div>
    </header>
  );
}

export default DesktopHeader;
