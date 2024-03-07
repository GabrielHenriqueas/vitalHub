import styled, { css } from "styled-components";

export const HighlightListDoctorBox = styled.TouchableOpacity`
  width: 100%;
  height: 102px;
  border-radius: 8px;
  align-items: center;
  /* justify-content: center; */
  gap: 10px;
  flex-direction: row;
  margin-top: 20px;
  padding-left: 20px;

  ${(props) =>
    props.clickButton
      ? css`
          border: 2px solid #496bba;
        `
      : css`
          border: 1px solid white;
        `}
`;

export const HighLightListDoctorsPhoto = styled.Image`
  width: 77px;
  height: 80px;
  border-radius: 5px;
`;
export const HighLightListDoctorsName = styled.Text`
  font-size: 16px;
  font-family: "MontserratAlternates_600SemiBold";
  color: #33303e;
`;
export const HighLightListDoctorsSpecialization = styled.Text`
  font-size: 14px;
  font-family: "Quicksand_600SemiBold";
  color: #4e4b59;
`;
