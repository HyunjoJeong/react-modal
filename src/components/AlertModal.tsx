import { colors, fonts } from "@/global/styles";
import { Button, Modal, ModalProps } from "@/modules";
import styled from "@emotion/styled";

type Props = ModalProps<{
  message: string;
}>;

const AlertModal = ({ message, ...modalProps }: Props) => {
  return (
    <Modal {...modalProps}>
      <StyledText>{message}</StyledText>
      <Modal.Buttons>
        <Button variant="filledGray" onClick={modalProps.onClose}>
          닫기
        </Button>
      </Modal.Buttons>
    </Modal>
  );
};

export default AlertModal;

const StyledText = styled.p`
  margin-bottom: 20px;

  text-align: center;
  color: ${colors.gray[800]};
  ${fonts.body4};
`;
