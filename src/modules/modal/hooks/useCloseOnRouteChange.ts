import { useRouter } from "next/router";
import { useEffect } from "react";

export const useCloseOnRouteChange = (shouldClose: boolean, onClose: () => void) => {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = () => {
      if (shouldClose) onClose();
    };

    router.events.on("routeChangeStart", handleRouteChange);
    return () => router.events.off("routeChangeStart", handleRouteChange);
  }, [router.events, shouldClose, onClose]);
};
