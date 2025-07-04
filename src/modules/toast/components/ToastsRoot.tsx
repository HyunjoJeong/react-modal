import { getZIndex } from "@/global/utils/zIndex";
import styled from "@emotion/styled";
import { useStore } from "zustand";
import { toastStore } from "../store";
import Toast from "./Toast";

export const ToastsRoot = () => {
  const toasts = useStore(toastStore, ({ toasts }) => toasts);

  return (
    <StyledRoot className="toasts-root">
      {toasts.map((props) => (
        <Toast key={props.id} {...props} />
      ))}
    </StyledRoot>
  );
};

const StyledRoot = styled.div`
  width: 100%;
  height: 0;

  z-index: ${getZIndex("top")};
  position: fixed;
  top: 0px;
  left: 0px;

  display: flex;
  justify-content: center;
`;
