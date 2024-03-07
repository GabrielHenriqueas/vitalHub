import styled from "styled-components";

export const Input = styled.TextInput.attrs({
  placeholderTextColor: "#34898f",
})`
  width: 90%;
  height: 53px;
  margin-top: 15px;
  padding: 16px;
  border: 2px solid #49b3ba;
  border-radius: 5px;
  font-size: 16px;
  font-family: "MontserratAlternates_600SemiBold";
  color: #34898f;
`;

export const InputCodeBox = styled.View`
  width: 90%;
  height: 62px;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  gap: 10px;

  margin-top: 50px;
  margin-bottom: 20px;
`;

export const InputCode = styled.TextInput.attrs({
  placeholderTextColor: "#33303E",
})`
  font-family: "Quicksand_600SemiBold";
  font-size: 40px;
  width: 62px;
  height: 62px;
  border: 2px solid #77cacf;
  border-radius: 5px;
  padding-left: 20px;
  color: #34898f;
`;

export const InputUserEdit = styled.TextInput.attrs({
  placeholderTextColor: "#33303E",
})`
  width: 100%;
  height: 53px;

  background-color: #f5f3f3;
  color: #33303e;

  font-size: 14px;
  font-family: "MontserratAlternates_500Medium";

  border-radius: 5px;
  padding-left: 20px;
`;
export const InputUserEditSmall = styled.TextInput.attrs({
  placeholderTextColor: "#33303E",
})`
  width: 100%;
  height: 53px;

  background-color: #f5f3f3;
  color: #33303e;

  font-size: 14px;
  font-family: "MontserratAlternates_500Medium";

  border-radius: 5px;
  padding-left: 20px;
`;
export const InputBig = styled.TextInput.attrs({
  placeholderTextColor: "#34898F",
})`
  width: 100%;
  height: 121px;

  /* background-color: #f5f3f3; */
  color: #34898f;

  font-size: 14px;
  font-family: "MontserratAlternates_600SemiBold";

  border-radius: 5px;
  padding-left: 20px;
  /* padding-top: -100px; */
  padding-bottom: 80px;

  border: 2px solid #49b3ba;
`;
