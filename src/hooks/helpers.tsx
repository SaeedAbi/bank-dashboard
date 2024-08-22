'use client';

import * as React from 'react';
import { debounce } from '@/utils/helper';

export const MOBILE_BREAKPOINT = 800;
interface WindowSizeType {
  width: number;
  height: number;
  isMobile: boolean;
}
export function useWindowSize(): WindowSizeType {
  const [state, setState] = React.useState<WindowSizeType>({
    height: window.innerHeight,
    width: window.innerWidth,
    isMobile: window.innerWidth < MOBILE_BREAKPOINT,
  });

  function calculateState() {
    setState({
      height: window.innerHeight,
      width: window.innerWidth,
      isMobile: window.innerWidth < MOBILE_BREAKPOINT,
    });
  }
  const debouncedCalculation = React.useMemo(
    () => debounce(calculateState, 300),
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
