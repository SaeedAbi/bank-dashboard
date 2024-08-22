'use client';

import React from 'react';
import { useWindowSize } from '@/hooks/helpers';
import Link from 'next/link';
import {
  FaCircleDollarToSlot,
  FaCoins,
  FaCreditCard,
  FaHandHoldingDollar,
  FaHouse,
  FaMoneyBillTransfer,
  FaRegUser,
  FaToolbox,
} from 'react-icons/fa6';
import { IoSettingsSharp } from 'react-icons/io5';
import { Image } from 'antd';

function Aside() {
  const { isMobile } = useWindowSize();

  return isMobile ? null : (
    <aside className='w-[230px] flex-shrink-0 flex-grow-0 bg-blue-800'>
      <Image
        src='/../../../public/Logo.png'
        alt='logo image'
        width={183}
        height={36}
      />
      <nav>
        <ul className='flex flex-col'>
          <li>
            <Link className='flex items-center' href='#'>
              <FaHouse />
              <span>Dashboard</span>
            </Link>
          </li>
          <li>
            <Link className='flex items-center' href='#'>
              <FaMoneyBillTransfer />
              <span>Transactions</span>
            </Link>
          </li>
          <li>
            <Link className='flex items-center' href='#'>
              <FaRegUser />
              <span>Accounts</span>
            </Link>
          </li>
          <li>
            <Link className='flex items-center' href='#'>
              <FaCoins />
              <span>Investments</span>
            </Link>
          </li>
          <li>
            <Link className='flex items-center' href='#'>
              <FaCreditCard />
              <span>Credit Cards</span>
            </Link>
          </li>
          <li>
            <Link className='flex items-center' href='#'>
              <FaHandHoldingDollar />
              <span>Loans</span>
            </Link>
          </li>
          <li>
            <Link className='flex items-center' href='#'>
              <FaToolbox />
              <span>Services</span>
            </Link>
          </li>
          <li>
            <Link className='flex items-center' href='#'>
              <FaCircleDollarToSlot />
              <span>My Privileges</span>
            </Link>
          </li>
          <li>
            <Link className='flex items-center' href='#'>
              <IoSettingsSharp />
              <span>Setting</span>
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
}

export default Aside;
