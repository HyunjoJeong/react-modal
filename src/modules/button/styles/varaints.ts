import { colors } from "@/global/styles";
import { css, Interpolation, Theme } from "@emotion/react";

export type ButtonVariant = "filledPrimary" | "filledGray" | "filledBlack" | "outlinePrimary";

export const buttonVariants: Record<ButtonVariant, Interpolation<Theme>> = {
  // * Filled

  filledPrimary: () => css`
    color: ${colors.gray[0]};
    background-color: ${colors.primary};

    :active {
      background-color: ${colors.primaryActive};
    }

    :disabled {
      color: ${colors.gray[400]};
      background-color: ${colors.gray[200]};
    }
  `,

  filledGray: () => css`
    color: ${colors.gray[750]};
    background-color: ${colors.gray[100]};

    :active {
      background-color: ${colors.gray[500]};
    }

    :disabled {
      color: ${colors.gray[400]};
      background-color: ${colors.gray[200]};
    }
  `,

  filledBlack: () => css`
    color: ${colors.gray[0]};
    background-color: ${colors.gray[800]};

    :active {
      background-color: ${colors.gray[600]};
    }

    :disabled {
      background-color: ${colors.gray[200]};
    }
  `,

  // * Outline

  outlinePrimary: () => css`
    color: ${colors.gray[950]};
    background-color: ${colors.gray[0]};
    border: 1px solid ${colors.primary};

    :active {
      color: ${colors.primaryActive};
    }

    :disabled {
      color: ${colors.gray[400]};
      border: 1px solid ${colors.gray[300]};
    }
  `,
};
