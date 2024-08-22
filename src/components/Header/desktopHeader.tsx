import React from 'react';
import Search from '@/components/Header/Search';
import { Avatar, Button, Space } from 'antd';
import { BellOutlined, SettingOutlined, UserOutlined } from '@ant-design/icons';

function DesktopHeader() {
  return (
    <header
      className={`flex min-h-[85px] flex-shrink-0 flex-grow-0 flex-wrap items-center justify-between px-[25px] py-[20px]`}
    >
      <div className='flex-shrink-0 justify-self-center text-[25px] font-semibold capitalize text-primary'>
        overview
      </div>
      <div className='flex items-center gap-[20px]'>
        <Search />
        <Button
          shape={'circle'}
          icon={<SettingOutlined style={{ color: '#718EBF' }} />}
        />
        <Button
          shape={'circle'}
          icon={<BellOutlined style={{ color: '#FE5C73' }} />}
        />
        <Space wrap size={16}>
          <Avatar size={64} icon={<UserOutlined />} />
        </Space>
      </div>
    </header>
  );
}

export default DesktopHeader;