import styled, { css } from "styled-components";

export const ButtonTabsStyle = styled.TouchableHighlight`
  /* padding: 12px 14px; */
  width: 100px;
  height: 35px;
  border-radius: 5px;
  justify-content: center;
  align-items: center;

  /* validação botão*/
  ${(props) =>
    props.clickButton
      ? css`
          background-color: #496bba;
        `
      : css`
          background-color: transparent;
          border: 2px solid #607ec5;
        `}
`;

export const ButtonTextStyle = styled.Text`
  font-size: 12px;
  font-family: "MontserratAlternates_600SemiBold";

  /* validação do texto do botão */
  ${(props) =>
    props.clickButton
      ? css`
          color: #fbfbfb;
        `
      : css`
          color: #607ec5;
        `}
`;

export const ButtonFilterBox = styled.View`
  width: 90%;
  height: 35px;
  flex-direction: row;
  justify-content: space-between;
`;
