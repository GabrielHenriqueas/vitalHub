import styled from "styled-components";
import { Title } from "../../components/Title/Title";
import { Button } from "../../components/Button/Button";

export const SelectDataTitle = styled(Title)`
  margin-top: 20px;
`;

export const SelectDataSelectHourBox = styled.View`
  margin-top: 20px;
  width: 90%;
`;

export const SelectHourTitle = styled.Text`
  font-size: 14px;
  font-family: "Quicksand_600SemiBold";
  color: black;
  margin-bottom: 10px;
`;

export const SelectHour = styled.TouchableOpacity`
  width: 100%;
  align-items: center;
  justify-content: space-between;
  border: 2px solid #60bfc5;
  border-radius: 5px;
  height: 53px;
  flex-direction: row;
  padding-left: 15px;
  padding-right: 15px;
`;

export const SelectHourButtonTitle = styled.Text`
  font-size: 14px;
  font-family: "MontserratAlternates_600SemiBold";
  color: #34898f;
`;

