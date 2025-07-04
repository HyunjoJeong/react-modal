import { css } from "@emotion/react";

export type Font = keyof typeof fonts;
export const fonts = {
  // * Headline

  headline1: css`
    font-size: 28px;
    font-weight: 600;
    line-height: 32px;
    font-style: normal;
  `,

  headline2: css`
    font-size: 22px;
    font-weight: 600;
    line-height: 26px;
    font-style: normal;
  `,

  headline3: css`
    font-size: 30px;
    font-weight: 700;
    line-height: 36px;
    letter-spacing: -1px;
    font-style: normal;
  `,

  headline4: css`
    font-size: 35px;
    font-weight: 700;
    line-height: normal;
    letter-spacing: -1px;
    font-style: normal;
  `,

  headline5: css`
    font-size: 24px;
    font-weight: 700;
    line-height: normal;
    letter-spacing: -1px;
    font-style: normal;
  `,

  // * Subtitle

  subtitle1: css`
    font-size: 20px;
    font-weight: 600;
    line-height: normal;
    font-style: normal;
  `,

  subtitle2: css`
    font-size: 18px;
    font-weight: 600;
    line-height: normal;
    font-style: normal;
  `,

  subtitle3: css`
    font-size: 15px;
    font-weight: 600;
    line-height: 16px;
    font-style: normal;
  `,

  subtitle4: css`
    font-size: 18px;
    font-weight: 700;
    line-height: normal;
    font-style: normal;
  `,

  subtitle5: css`
    font-size: 26px;
    font-weight: 600;
    line-height: 31px;
    font-style: normal;
  `,

  subtitle6: css`
    font-size: 16px;
    font-weight: 700;
    line-height: normal;
    font-style: normal;
  `,

  // * Body

  body1: css`
    font-size: 18px;
    font-weight: 400;
    line-height: normal;
    font-style: normal;
  `,

  body2: css`
    font-size: 15px;
    font-weight: 500;
    line-height: normal;
    font-style: normal;
  `,

  body3: css`
    font-size: 17px;
    font-weight: 500;
    line-height: normal;
    font-style: normal;
  `,

  body4: css`
    font-size: 18px;
    font-weight: 500;
    line-height: normal;
    font-style: normal;
  `,

  body5: css`
    font-size: 17px;
    font-weight: 400;
    line-height: normal;
    font-style: normal;
  `,

  body6: css`
    font-size: 20px;
    font-weight: 500;
    line-height: normal;
    font-style: normal;
  `,

  body7: css`
    font-size: 15px;
    font-weight: 600;
    line-height: normal;
    font-style: normal;
  `,

  // * Button

  button1: css`
    font-size: 17px;
    font-weight: 600;
    line-height: normal;
    letter-spacing: -0.4px;
    font-style: normal;
  `,

  button2: css`
    font-size: 13px;
    font-weight: 500;
    line-height: normal;
    letter-spacing: -0.25px;
    font-style: normal;
  `,

  button3: css`
    font-size: 13px;
    font-weight: 600;
    line-height: normal;
    letter-spacing: -0.25px;
    font-style: normal;
  `,

  button4: css`
    font-size: 15px;
    font-weight: 600;
    line-height: normal;
    letter-spacing: -0.25px;
    font-style: normal;
  `,

  // * Caption

  caption1: css`
    font-size: 15px;
    font-weight: 400;
    line-height: normal;
    font-style: normal;
  `,

  caption2: css`
    font-size: 13px;
    font-weight: 400;
    line-height: normal;
    font-style: normal;
  `,

  caption3: css`
    font-size: 14px;
    font-weight: 600;
    line-height: normal;
    font-style: normal;
  `,

  caption4: css`
    font-size: 14px;
    font-weight: 600;
    line-height: 18px;
    letter-spacing: 0.28px;
    font-style: normal;
  `,

  caption5: css`
    font-size: 14px;
    font-weight: 400;
    line-height: 18px;
    letter-spacing: 0.28px;
    font-style: normal;
  `,

  caption6: css`
    font-size: 13px;
    font-weight: 500;
    line-height: 14px;
    font-style: normal;
  `,

  caption7: css`
    font-size: 12px;
    font-weight: 600;
    line-height: 16px;
    font-style: normal;
  `,

  caption8: css`
    font-size: 12px;
    font-weight: 400;
    line-height: 16px;
    font-style: normal;
  `,

  caption9: css`
    font-size: 12px;
    font-weight: 500;
    line-height: 16px;
    font-style: normal;
  `,

  caption10: css`
    font-size: 14px;
    font-weight: 500;
    line-height: 14px;
    font-style: normal;
  `,

  caption11: css`
    font-size: 11px;
    font-weight: 400;
    line-height: 13px;
    font-style: normal;
  `,

  caption12: css`
    font-size: 11px;
    font-weight: 500;
    line-height: 13px;
    font-style: normal;
  `,
};
