'use client';

import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { IoSettingsSharp } from 'react-icons/io5';

import { useWindowSize } from '@/hooks/helpers';
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
import logo from '../../../public/Logo.png';
import styles from './styles.module.scss';

function Aside() {
  const { isMobile } = useWindowSize();

  return isMobile ? null : (
    <aside className={styles.container}>
      <div className={styles.firstRow}>
        <Image src={logo} alt='logo image' width={183} height={36} />
      </div>
      <nav className={styles.secondRow}>
        <ul className='flex flex-col gap-[42px]'>
          <li>
            <Link
              className='text-secondary flex items-center gap-[26px] text-lg font-medium hover:text-primary'
              href='#'
            >
              <FaHouse />
              <span>Dashboard</span>
            </Link>
          </li>
          <li>
            <Link
              className='text-secondary flex items-center gap-[26px] text-lg font-medium hover:text-primary'
              href='#'
            >
              <FaMoneyBillTransfer />
              <span>Transactions</span>
            </Link>
          </li>
          <li>
            <Link
              className='text-secondary flex items-center gap-[26px] text-lg font-medium hover:text-primary'
              href='#'
            >
              <FaRegUser />
              <span>Accounts</span>
            </Link>
          </li>
          <li>
            <Link
              className='text-secondary flex items-center gap-[26px] text-lg font-medium hover:text-primary'
              href='#'
            >
              <FaCoins />
              <span>Investments</span>
            </Link>
          </li>
          <li>
            <Link
              className='text-secondary flex items-center gap-[26px] text-lg font-medium hover:text-primary'
              href='#'
            >
              <FaCreditCard />
              <span>Credit Cards</span>
            </Link>
          </li>
          <li>
            <Link
              className='text-secondary flex items-center gap-[26px] text-lg font-medium hover:text-primary'
              href='#'
            >
              <FaHandHoldingDollar />
              <span>Loans</span>
            </Link>
          </li>
          <li>
            <Link
              className='text-secondary flex items-center gap-[26px] text-lg font-medium hover:text-primary'
              href='#'
            >
              <FaToolbox />
              <span>Services</span>
            </Link>
          </li>
          <li>
            <Link
              className='text-secondary flex items-center gap-[26px] text-lg font-medium hover:text-primary'
              href='#'
            >
              <FaCircleDollarToSlot />
              <span>My Privileges</span>
            </Link>
          </li>
          <li>
            <Link
              className='text-secondary flex items-center gap-[26px] text-lg font-medium hover:text-primary'
              href='#'
            >
              <IoSettingsSharp height={25} width={25} />
              <span>Setting</span>
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
}

export default Aside;
