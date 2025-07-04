import { colors, fonts } from "@/global/styles";
import styled from "@emotion/styled";
import type { HTMLAttributes } from "react";

type Props = HTMLAttributes<HTMLHeadingElement>;

export const ModalTitle = (props: Props) => {
  return <StyledHeading {...props} />;
};

const StyledHeading = styled.h3`
  margin-bottom: 12px;
  text-align: center;

  color: ${colors.gray[800]};
  ${fonts.subtitle1};
`;
