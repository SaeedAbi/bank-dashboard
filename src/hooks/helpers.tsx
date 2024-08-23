'use client';

import * as React from 'react';
import { debounce, isServer } from '@/utils/helper';

export const MOBILE_BREAKPOINT = 800;
interface WindowSizeType {
  width: number;
  height: number;
  isMobile: boolean;
}

function calculateState() {
  return isServer()
    ? {
        height: 0,
        width: 0,
        isMobile: true,
      }
    : {
        height: window.innerHeight,
        width: window.innerWidth,
        isMobile: window.innerWidth < MOBILE_BREAKPOINT,
      };
}

export function useWindowSize(): WindowSizeType {
  const [state, setState] = React.useState<WindowSizeType>(() =>
    calculateState()
  );

  const debouncedCalculation = React.useMemo(
    () =>
      debounce(() => {
        const newState = calculateState();
        setState(newState);
      }, 500),
    []
  );

  React.useEffect(() => {
    window.addEventListener('resize', debouncedCalculation);

    return () => {
      window.removeEventListener('resize', debouncedCalculation);
    };
  }, [debouncedCalculation]);

  return state;
}
