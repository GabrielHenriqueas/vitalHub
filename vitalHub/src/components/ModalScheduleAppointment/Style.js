import styled from "styled-components";
import { Button } from "../Button/Button";
import { ButtonLinkMediumCancel } from "../LinkMedium/LinkMedium";
import { Title } from "../Title/Title";

export const ModalTransparent = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.6);
`;

export const ModalScheduleQuery = styled.View`
  margin-top: 275px;
  align-items: center;
  justify-content: center;
  gap: 15px;
  width: 100%;
  height: 570px;
  background-color: #fbfbfb;
  border-top-right-radius: 15px;
  border-top-left-radius: 15px;
`;

export const QueryQuestions = styled.View`
  width: 90%;
  height: 85px;
  justify-content: center;
  align-items: center;
  /* border: 1px solid green; */
`;

export const Question = styled.Text`
  color: #000000;
  font-size: 14px;
  font-family: "Quicksand_600SemiBold";
  text-align: justify;
  width: 100%;
`;

export const QueryOptionsContainer = styled.View`
  flex-direction: row;
  width: 100%;
  height: 50px;
  justify-content: space-between;
  align-items: center;
  /* border: 1px red; */
`;

export const QueryOptions = styled.View`
  width: 90px;
  height: 40px;
  border-radius: 5px;
  border: 2px solid #60bfc5;
  justify-content: center;
  align-items: center;
`;

export const TextOption = styled.Text`
  font-size: 14px;
  font-family: MontserratAlternates_600SemiBold;
  color: #34898f;
`;

export const QueryInput = styled.TextInput`
  width: 100%;
  height: 55px;
  border-radius: 5px;
  border: 2px solid #60bfc5;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  font-family: MontserratAlternates_600SemiBold;
  color: #34898f;
  padding-left: 15px;
`;

export const QuestionContainer = styled.View`
  height: 25px;
  width: 100%;
`;

export const ButtonConfirmSchedule = styled(Button)`

`;

export const CancelButton = styled(ButtonLinkMediumCancel)`
  margin-top: 0;
`;

export const ModalTitle = styled(Title)`
  margin-top: -30px;
`;
