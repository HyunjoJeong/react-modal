import { keyframes } from "@emotion/react";

export const toastAnimation = {
  open: keyframes`
    from { 
      opacity: 0;
      transform: translateY(10px);
    }
    to { 
      opacity: 88%;
      transform: translateY(0) ;
    }
  `,

  close: keyframes`
    from { 
      opacity: 88%;
      transform: translateY(0);
    }
    to { 
      opacity: 0;
      transform: translateY(-10px) ;
    }
  `,
};
