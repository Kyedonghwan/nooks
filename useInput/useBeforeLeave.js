import { useEffect } from 'react';

const useBeforeLeave = (onBefore) => {
    if (!onBefore || typeof onBefore !== "function") {
      return;
    }
    const handle = (e) => {
      const { clientY } = e;
      if (clientY <= 0) {
        onBefore();
      }
    };
  
    useEffect(() => {
      document.addEventListener("mouseleave", handle);
      return () => document.removeEventListener("mouseleave", handle);
    }, []);
  };