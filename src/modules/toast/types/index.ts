import type { Interpolation, Theme } from "@emotion/react";
import type { CSSProperties, ReactNode } from "react";
import { toastAnimation, toastTheme } from "../styles";

export type ToastAnimationState = keyof typeof toastAnimation;

export type ToastTheme = keyof typeof toastTheme;

export type ToastProps = {
  id: number;
  message: ReactNode;
  options?: {
    top?: CSSProperties["top"];
    duration?: number;
    theme?: ToastTheme;
    cssOverrides?: Interpolation<Theme>;
  };
};
