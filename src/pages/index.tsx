import AlertModal from "@/components/AlertModal";
import LoginModal from "@/components/LoginModal";
import { Button, ModalService, toast, useModal } from "@/modules";
import styled from "@emotion/styled";
import Head from "next/head";

const loginModal = new ModalService(LoginModal);
const alertModal = new ModalService(AlertModal);
const fortuneModal = new ModalService(AlertModal, {
  closeOnEscape: true,
  closeOnOverlayClick: true,
});

export default function Home() {
  const hookedLoginModal = useModal(LoginModal);

  return (
    <>
      <Head>
        <title>Functional Modal</title>
        <meta name="description" content="모달 state 없이 function으로 모달 open하기" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <StyledMain>
        <div>
          <StyledButton onClick={() => toast("토스트 메시지입니다")}>토스트</StyledButton>
          <StyledButton variant="filledPrimary" onClick={() => hookedLoginModal.open({})}>
            로그인 모달 열기 (hook 사용)
          </StyledButton>
          <StyledButton variant="outlinePrimary" onClick={() => loginModal.open({})}>
            로그인 모달 열기 (단일 인스턴스)
          </StyledButton>
          <StyledButton variant="filledGray" onClick={() => alertModal.open({ message: "실패!" })}>
            Alert 모달
          </StyledButton>
          <StyledButton
            variant="filledBlack"
            onClick={() => fortuneModal.open({ message: "하늘에서 떨어지는 똥을 조심하세요." })}
          >
            오늘의 운세
          </StyledButton>
        </div>
      </StyledMain>
    </>
  );
}

const StyledMain = styled.main`
  padding: 200px 20px;

  display: flex;
  align-items: center;
  justify-content: center;

  > div {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
`;

const StyledButton = styled(Button)`
  height: 48px;
`;
