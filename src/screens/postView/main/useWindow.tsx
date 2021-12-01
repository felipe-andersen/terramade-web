
import React, { useEffect, useState } from 'react';

interface UseWindowResult {
  isPageAtTop: boolean;
}

export default function useWindow(): UseWindowResult {
  const [isPageAtTop, setPageAtTop] = useState(() => window.pageYOffset <= 0);

  const handleScroll = (): void => {
    setPageAtTop(window.pageYOffset <= 0);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, false);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return { isPageAtTop };
}


