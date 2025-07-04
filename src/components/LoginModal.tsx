import { colors, fonts } from "@/global/styles";
import { Button, Modal, ModalProps, toast } from "@/modules";
import styled from "@emotion/styled";

const LoginModal = (modalProps: ModalProps) => {
  return (
    <Modal {...modalProps}>
      <StyledText>
        로그인 후 이용 가능합니다. <br />
        로그인 하시겠습니까?
      </StyledText>
      <Modal.Buttons>
        <Button variant="filledGray" onClick={modalProps.onClose}>
          닫기
        </Button>
        <Button onClick={() => toast("로그인 Clicked !!")}>로그인하기</Button>
      </Modal.Buttons>
    </Modal>
  );
};

export default LoginModal;

const StyledText = styled.p`
  margin-bottom: 20px;

  text-align: center;
  color: ${colors.gray[800]};
  ${fonts.body4};
`;
