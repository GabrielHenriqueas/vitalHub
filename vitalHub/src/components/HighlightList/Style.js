import styled, { css } from "styled-components";
import { Button } from "../Button/Button";

export const HighLightListContainer = styled.View`
  justify-content: center;
  align-items: center;
  gap: 12px;
  width: 90%;
`;

export const HighLightListBox = styled.TouchableOpacity`
  width: 100%;
  height: 84px;
  border-radius: 8px;
  justify-content: space-between;
  /* align-items: center; */
  background-color: white;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 15px;
  flex-direction: row;
  margin-top: 20px;

  ${(props) =>
    props.clickButton
      ? css`
          border: 2px solid #496bba;
        `
      : css`
          border: 1px solid white;
        `}
`;

export const HighLightListContainerText = styled.View`
  /* width: 130px; */
  height: 47px;
  gap: 10px;
`;

export const HighLightListTitle = styled.Text`
  font-size: 16px;
  font-family: "MontserratAlternates_600SemiBold";
  color: #33303e;
`;

export const HighLightListSubtitle = styled.Text`
  font-size: 14px;
  font-family: "Quicksand_600SemiBold";
  color: #4e4b59;
`;

export const HighLightListContainerIcons = styled.View`
  width: 100px;
  gap: 10px;
  justify-content: end;
`;

export const Stars = styled.View`
  width: 42px;
  height: 20px;
  flex-direction: row;
  gap: 5px;
  align-self: flex-end;
`;
export const StarsText = styled.Text`
  font-size: 14px;
  color: #f9a620;
  font-family: "Quicksand_600SemiBold";
`;

export const Days = styled.View`
  align-items: center;
  justify-content: center;
  flex-direction: row;
  width: 100px;
  height: 26px;
  background-color: #e8fcfd;
  border-radius: 5px;
`;

export const DaysText = styled.Text`
  font-size: 14px;
  color: #49b3ba;
  font-family: "Quicksand_600SemiBold";
`;


export const ButtonContinue = styled(Button)`
  margin-top: 50px;
`;