"use client";

import * as React from "react";
import { useWindowSize } from "@/hooks/useWindowSize";

import DesktopHeader from "@/components/Header/desktopHeader";
import PhoneHeader from "@/components/Header/phoneHeader";

function Header() {
  const { isMobile } = useWindowSize();

  return isMobile ? <PhoneHeader /> : <DesktopHeader />;
}

export default Header;
