import { fonts } from "@/global/styles/fonts";
import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { toastStore } from "../store";
import { toastAnimation, toastTheme } from "../styles";
import type { ToastAnimationState, ToastProps } from "../types";

const Toast = ({ id, message, options }: ToastProps) => {
  const [animationState, setAnimationState] = useState<ToastAnimationState>("open");

  const { top = 100, duration = 2500, theme = "white", cssOverrides } = options ?? {};
  const animation = `${toastAnimation[animationState]} 0.3s ease`;

  useEffect(() => {
    const removeToast = () =>
      toastStore.setState(({ toasts }) => ({ toasts: toasts.filter((toast) => toast.id !== id) }));

    const hideTimer = setTimeout(() => setAnimationState("close"), duration - 250);
    const removeTimer = setTimeout(removeToast, duration);

    return () => {
      clearTimeout(hideTimer);
      clearTimeout(removeTimer);
    };
  }, [id, duration]);

  return (
    <StyledWrapper css={[{ top, animation }, toastTheme[theme], cssOverrides]}>
      {message}
    </StyledWrapper>
  );
};

export default Toast;

const StyledWrapper = styled.div`
  margin: auto;
  padding: 16px 24px;
  width: fit-content;
  max-width: calc(100% - 40px);
  border-radius: 100px;

  text-align: center;
  word-break: keep-all;

  position: absolute;

  ${fonts.body2};
`;
