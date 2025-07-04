import { keyframes } from '@emotion/react';

export const modalAnimation = {
  overlay: {
    open: keyframes`
      from { opacity: 0; }
      to { opacity: 100%; }
    `,
    close: keyframes`
      from { opacity: 100%; }
      to { opacity: 0; }
    `,
  },

  wrapper: {
    open: keyframes`
      from { transform: scale(0.84); }
      to { transform: scale(1); }
    `,
    close: keyframes`
      from { transform: scale(1); }
      to { transform: scale(0.84); }
    `,
  },
};
