import { getZIndex } from "@/global/utils";
import styled from "@emotion/styled";
import { useStore } from "zustand";
import { modalStore } from "../store";

export const ModalsRoot = () => {
  const mountedServices = useStore(modalStore, ({ mountedServices }) => mountedServices);

  return (
    <StyledRoot className="modals-root">
      {mountedServices.map(({ Component, id, props }) => (
        <Component key={id} {...props} />
      ))}
    </StyledRoot>
  );
};

const StyledRoot = styled.div`
  width: 100%;
  height: 0;

  position: fixed;
  top: 0px;
  left: 0px;
  z-index: ${getZIndex("top")};

  display: flex;
  justify-content: center;
`;
