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
          icon={
            <MenuOutlined
              style={{ color: '#343C6A', backgroundColor: '#F5F7FA' }}
            />
          }
        />
        <span className='h-[24px] w-[93px] justify-self-center text-[20px] font-semibold uppercase text-primary'>
          overview
        </span>
        <Space wrap>
          <Avatar
            style={{ height: '35px', width: '35px' }}
            icon={<UserOutlined />}
          />
        </Space>
      </div>

      <Search width='325px' height='40px' />
    </header>
  );
}

export default PhoneHeader;
