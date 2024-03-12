import styled from "styled-components";
import { Subtitle } from "../../components/Subtitle/Subtitle";
import { ButtonLinkMediumCancel } from "../../components/LinkMedium/LinkMedium";

export const MapsImageView = styled.View`
  width: 100%;
  height: 47%;
`;

export const MapsImage = styled.Image`
  width: 100%;
  height: 47%;
`;

export const LocationInfoSubtitle = styled(Subtitle)`
  font-size: 14px;
  font-family: "Quicksand_600SemiBold";
  color: #4e4b59;
`;

export const LocationInfoBox = styled.View`
  width: 100%;
  height: 53%;

  justify-content: center;
  align-items: center;

  background-color: white;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
`;

export const LocationInfoTextInputBox = styled.View`
  height: auto;
  width: 90%;
  gap: 10px;
`;

export const LocationInfoTitleInput = styled.Text`
  width: auto;
  height: auto;
  font-size: 16px;
  color: #33303e;
  font-family: "Quicksand_600SemiBold";
`;

export const LocationInfoInput = styled.TextInput.attrs({
  placeholderTextColor: "#33303E",
})`
  width: 100%;
  height: 53px;
  background-color: #f5f3f3;
  color: #33303e;
  border-radius: 5px;
  padding-left: 10px;
`;
export const LocationInfoInputSmall = styled.TextInput.attrs({
  placeholderTextColor: "#33303E",
})`
  width: 100%;
  height: 53px;
  background-color: #f5f3f3;
  color: #33303e;
  border-radius: 5px;
  padding-left: 10px;
`;

export const naoseimaisnomeparacomponente = styled(ButtonLinkMediumCancel)`
  margin-top: 20px;
`;
