import styled from '@emotion/styled';
import type { ReactNode } from 'react';

type Props = {
  children?: ReactNode;
};

export const ModalButtons = ({ children }: Props) => {
  return <StyledWrapper className="modal-buttons-wrapper">{children}</StyledWrapper>;
};

const StyledWrapper = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;
  gap: 8px;

  > button {
    flex: 1 0;
    height: 64px;
  }
`;
