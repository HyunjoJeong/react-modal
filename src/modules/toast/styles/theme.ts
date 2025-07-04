import { colors } from "@/global/styles";
import { css } from "@emotion/react";

export const toastTheme = {
  white: css`
    color: ${colors.gray[950]};
    background-color: ${colors.gray[0]};

    box-shadow: 0px 4px 9px 0px rgba(0, 0, 0, 0.1);
  `,

  black: css`
    color: ${colors.gray[0]};
    background-color: ${colors.gray[950]};

    box-shadow: 0px 4px 9px 0px rgba(0, 0, 0, 0.1);
  `,
};
