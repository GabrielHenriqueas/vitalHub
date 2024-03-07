import styled from "styled-components";
import { LinearGradient } from "expo-linear-gradient";

export const BlueGradientHeader = styled(LinearGradient).attrs({
  colors: ["#60bfc5", "#496bba"],
  start: { x: 0, y: 0 },
  end: { x: 1, y: 1 },
})`
  width: 100%;
  height: 115px;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  flex-direction: row;
  align-items: center;

  justify-content: space-between;
  padding-left: 20px;
  padding-right: 20px;
`;

export const DoctorInfoBoxHeader = styled.View`
  width: 163px;
  height: 60px;
  flex-direction: row;
  gap: 10px;
`;
export const DoctorInfoBoxTextHeader = styled.View`
  /* width: 93px; */
  height: 41px;
  padding-top: 10px;
`;

export const DoctorImageHeader = styled.Image`
  width: 60px;
  height: 60px;
  border-radius: 5px;
`;

export const Welcome = styled.Text`
  width: 90px;
  height: 18px;
  font-size: 14px;
  font-family: "Quicksand_500Medium";
  color: #4e4b59;
`;

export const DoctorNameHeader = styled.Text`
  /* width: 103px; */
  height: 20px;
  font-size: 16px;
  font-family: "MontserratAlternates_600SemiBold";
  color: #fbfbfb;
`;
