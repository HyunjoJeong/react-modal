import { useEffect } from "react";

export const useScrollLock = (isLockCondition: boolean) => {
  useEffect(() => {
    if (isLockCondition) {
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isLockCondition]);
};
