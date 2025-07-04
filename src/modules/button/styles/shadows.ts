import { css, Interpolation, Theme } from "@emotion/react";

export type ButtonShadow = "none" | "primary";

export const buttonShadows: Record<ButtonShadow, Interpolation<Theme>> = {
  none: css`
    box-shadow: none;
  `,

  primary: () => css`
    :not(:disabled) {
      box-shadow: 4px 4px 8px 0px rgba(167, 17, 68, 0.2);
    }
  `,
};
