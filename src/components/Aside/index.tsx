"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { IoSettingsSharp } from "react-icons/io5";

import { useWindowSize } from "@/hooks/useWindowSize";
import {
  FaCoins,
  FaCreditCard,
  FaHandHoldingDollar,
  FaHouse,
  FaMoneyBillTransfer,
  FaRegUser,
  FaToolbox,
} from "react-icons/fa6";
import logo from "../../../public/Logo.png";
import styles from "./styles.module.scss";
import { PRIVATE_ROUTES } from "@/routes";
import { usePathname, useRouter } from "next/navigation";
import classNames from "classnames";

const links = [
  {
    label: "Dashboard",
    icon: <FaHouse />,
    href: PRIVATE_ROUTES.dashboard,
  },
  {
    label: "Transactions",
    icon: <FaMoneyBillTransfer />,
    href: PRIVATE_ROUTES.transactions,
  },
  {
    label: "Accounts",
    icon: <FaRegUser />,
    href: PRIVATE_ROUTES.accounts,
  },
  {
    label: "Investments",
    icon: <FaCoins />,
    href: PRIVATE_ROUTES.investments,
  },
  {
    label: "Credit Cards",
    icon: <FaCreditCard />,
    href: PRIVATE_ROUTES.cards,
  },
  {
    label: "Loans",
    icon: <FaHandHoldingDollar />,
    href: PRIVATE_ROUTES.loans,
  },
  {
    label: "Services",
    icon: <FaToolbox />,
    href: PRIVATE_ROUTES.services,
  },
  {
    label: "Setting",
    icon: <IoSettingsSharp />,
    href: PRIVATE_ROUTES.settings,
  },
];

function Aside() {
  const { isMobile } = useWindowSize();
  const router = useRouter();
  const pathName = usePathname();

  return isMobile ? null : (
    <aside className={styles.container}>
      <div className={styles.firstRow}>
        <Image
          src={logo}
          alt="logo image"
          width={183}
          height={36}
          onClick={() => router.push(PRIVATE_ROUTES.dashboard)}
        />
      </div>
      <nav className={styles.secondRow}>
        <ul className="flex flex-col">
          {links.map((link) => {
            let isActive: boolean;
            if (link.href === PRIVATE_ROUTES.dashboard) {
              isActive = pathName === PRIVATE_ROUTES.dashboard;
            } else {
              isActive = pathName.startsWith(link.href);
            }
            return (
              <li key={link.label}>
                <Link
                  className={classNames(styles.link, {
                    [styles.active]: isActive,
                  })}
                  href={link.href}
                >
                  {link.icon}
                  <span>{link.label}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
}

export default Aside;
