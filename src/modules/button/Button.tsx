import { Font, fonts } from "@/global/styles";
import { css, type Interpolation, type Theme } from "@emotion/react";
import type { ButtonHTMLAttributes } from "react";
import { buttonShadows, type ButtonShadow } from "./styles/shadows";
import { buttonVariants, type ButtonVariant } from "./styles/varaints";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  font?: Font;
  variant?: ButtonVariant;
  shadow?: ButtonShadow;
  css?: Interpolation<Theme>;
};

export const Button = ({
  font = "button1",
  variant = "filledPrimary",
  shadow = "none",
  css,
  ...props
}: ButtonProps) => {
  return (
    <button
      tabIndex={0}
      css={[baseStyle, fonts[font], buttonVariants[variant], buttonShadows[shadow], css]}
      {...props}
    />
  );
};

const baseStyle = css`
  padding: 8px 14px;
  border: none;
  border-radius: 100px;

  text-align: center;
  white-space: nowrap;
`;
