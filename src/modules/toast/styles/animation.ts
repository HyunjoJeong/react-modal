import { keyframes } from '@emotion/react';

export const toastOpenAnimation = keyframes`
  from { 
    opacity: 0;
    transform: translateY(10px);
  }
  to { 
    opacity: 88%;
    transform: translateY(0) ;
  }
`;

export const toastCloseAnimation = keyframes`
  from { 
    opacity: 88%;
    transform: translateY(0);
  }
  to { 
    opacity: 0;
    transform: translateY(-10px) ;
  }
`;
