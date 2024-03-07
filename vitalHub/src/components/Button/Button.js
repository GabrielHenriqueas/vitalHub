import styled from "styled-components";

// botões de login da pagina login
export const Button = styled.TouchableOpacity`
  background-color: #496bba;
  width: 90%;
  height: 53px;
  margin-top: 20px;
  margin-bottom: 5px;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  border: 1px solid #496bba;
`;
export const ButtonTitle = styled.Text`
  color: #ffff;
  font-size: 14px;
  font-family: "MontserratAlternates_700Bold";
  text-transform: uppercase;
`;

export const ButtonGoogle = styled.TouchableOpacity`
  width: 90%;
  background-color: #fafafa;
  border: 1px solid #496bba;
  height: 53px;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  flex-direction: row;
  gap: 10px;
`;

export const ButtonTitleGoogle = styled.Text`
  font-family: "MontserratAlternates_700Bold";
  color: #496bba;
  font-size: 14px;
  text-transform: uppercase;

`;
