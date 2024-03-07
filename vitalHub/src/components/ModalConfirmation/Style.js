import styled from "styled-components";
import { Subtitle } from "../Subtitle/Subtitle";

export const ModalQueryInfo = styled.View`
  margin: 43px 12px;
  align-items: center;
  justify-content: center;
  gap: 20px;
  width: 90%;
  height: 85%;
  background-color: white;
  border-radius: 8px;
`;

export const InfoQueryBox = styled.View`
  gap: 17px;
`;

export const ModalConfirmationSubtitle = styled(Subtitle)`
  margin-bottom: 20px;
  width: 279px;
  height: auto;
`;

export const ModalInfoBox = styled.View`
  width: 90%;
  height: auto;
`;

export const ModalInfoBoxTitle = styled.Text`
  font-size: 16px;
  font-family: "Quicksand_600SemiBold";
  color: #33303e;
`;

export const ModalInfoBoxSubtitle = styled.Text`
  font-size: 14px;
  font-family: "Quicksand_500Medium";
  color: #4e4b59;
`;
