import { useScrollLock } from "@/modules/_base";
import type { Keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import { FocusTrap } from "focus-trap-react";
import type { KeyboardEventHandler, PropsWithChildren } from "react";
import { MODAL_ANIMATION_DURATION } from "../constants";
import { modalAnimation } from "../styles";
import type { ModalProps } from "../types";

type Props = PropsWithChildren<ModalProps>;

/**
 * @param lockScroll default "true"
 * @param closeOnEscape default "false"
 * @param closeOnOverlayClick default "false"
 */
export const ModalBase = ({ state, onClose, children, overrideStyles, ...configs }: Props) => {
  const { lockScroll = true, closeOnEscape = false, closeOnOverlayClick = false } = configs;

  const overlayAnimation = modalAnimation.overlay[state];
  const wrapperAnimation = modalAnimation.wrapper[state];

  const animate = (keyframe: Keyframes) => `${keyframe} ${MODAL_ANIMATION_DURATION}ms ease-out`;

  const handleOverlayClickClose = () => {
    if (state === "open" && closeOnOverlayClick) onClose();
  };

  const handleKeyDown: KeyboardEventHandler<HTMLDivElement> = (e) => {
    if (e.key === "Escape" && state === "open" && closeOnEscape) onClose();
  };

  useScrollLock(state === "open" && lockScroll);

  return (
    <FocusTrap
      focusTrapOptions={{ initialFocus: 'div[role="dialog"]', returnFocusOnDeactivate: false }}
    >
      <StyledOverlay
        onClick={handleOverlayClickClose}
        css={[{ animation: animate(overlayAnimation) }, overrideStyles?.overlay]}
      >
        <StyledWrapper
          tabIndex={-1}
          role="dialog"
          aria-modal="true"
          onKeyDown={handleKeyDown}
          onClick={(e) => e.stopPropagation()}
          css={[{ animation: animate(wrapperAnimation) }, overrideStyles?.wrapper]}
        >
          {children}
        </StyledWrapper>
      </StyledOverlay>
    </FocusTrap>
  );
};

const StyledOverlay = styled.div`
  position: fixed;
  inset: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: rgba(16, 16, 16, 0.6);
`;

const StyledWrapper = styled.div`
  width: 328px;
  padding: 32px 24px;

  outline: none;
  border-radius: 24px;
  background-color: #fff;
`;
