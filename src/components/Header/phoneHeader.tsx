import React from 'react';
import { Avatar, Button, Space } from 'antd';
import { MenuOutlined, UserOutlined } from '@ant-design/icons';
import Search from '@/components/Header/Search';

function PhoneHeader() {
  return (
    <header
      className={
        'flex h-[140px] flex-col items-center justify-center gap-[25px]'
      }
    >
      <div className='flex items-center justify-between gap-[89px]'>
        <Button
          type='text'
          shape={'circle'}
          icon={<MenuOutlined style={{ color: '#343C6A' }} />}
        />
        <span className='justify-self-center text-[20px] font-semibold uppercase text-primary'>
          overview
        </span>
        <Space size={16} wrap className='items-stretch'>
          <Avatar icon={<UserOutlined />} />
        </Space>
      </div>

      <Search />
    </header>
  );
}

export default PhoneHeader;
