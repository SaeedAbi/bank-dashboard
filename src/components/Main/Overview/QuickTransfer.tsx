import React from 'react';
import { Avatar, Button, Input, Space } from 'antd';
import { RightOutlined, SendOutlined, UserOutlined } from '@ant-design/icons';

const contacts = [
  {
    avatarImage: <UserOutlined />,
    name: 'Livia Bator',
    title: 'CEO',
  },
  {
    avatarImage: <UserOutlined />,
    name: 'Randy Press',
    title: 'Director',
  },
  {
    avatarImage: <UserOutlined />,
    name: 'Workman',
    title: 'Designer',
  },
];

function QuickTransfer() {
  return (
    <div className={'mt-6'}>
      <div className='text-3xl font-semibold text-primary'>
        Recent Transactions
      </div>
      <div className={"mt-5 flex h-[276px] w-[445px] flex-shrink-0 flex-col justify-center rounded-[25px] bg-white px-[26px] py-[30px]"}>
        <div className={'flex items-center gap-7'}>
          {contacts.map((contact) => (
            <div
              key={contact.name}
              className={'flex flex-col items-center pb-7'}
            >
              <Space wrap style={{ paddingBottom: '15px' }}>
                <Avatar
                  style={{ height: '60px', width: '60px' }}
                  icon={contact.avatarImage}
                />
              </Space>
              <div className={'pb-1 text-base font-normal text-black'}>
                {contact.name}
              </div>
              <div className={'text-sm font-normal text-textBlue'}>
                {contact.title}
              </div>
            </div>
          ))}
          <Button
            style={{ height: '50px', width: '50px' }}
            shape={'circle'}
            icon={<RightOutlined style={{ color: '#718EBF' }} />}
          />
        </div>
        <div className={'flex items-center justify-between gap-7'}>
          <span className={'text-base font-normal text-textBlue'}>
            Write Amount
          </span>
          <Space.Compact
            style={{ width: 265, height: 50, borderRadius: '50px' }}
          >
            <Input defaultValue='5200' style={{ height: 50, width: 140 }} />
            <Button
              className={
                'border-spacing-10 text-base font-normal text-textBlue'
              }
              type='primary'
              icon={<SendOutlined />}
              style={{ height: 50, width: 125, borderRadius: '50px' }}
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
