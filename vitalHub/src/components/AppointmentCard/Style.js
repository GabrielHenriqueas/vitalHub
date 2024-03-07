import styled from "styled-components";
import { Title } from "../Title/Title";

export const ContainerCardsList = styled.View`
  width: 90%;
  margin: 0px auto;
  margin-bottom: 12px;
  padding: 10px 10px;
  border-radius: 5px;
  flex-direction: row;
  gap: 10px;
  background-color: #fff;
  box-shadow: 4px 4px 15px rgba(0, 0, 0, 0.08);
`;
export const ProfileImage = styled.Image`
  width: 77px;
  height: 80px;
  border-radius: 5px;
`;

export const ContentCard = styled.View`
  width: 70%;
  gap: 11px;
`;

export const DataProfileCard = styled.View`
  gap: 6px;
`;
export const ProfileName = styled(Title)`
  font-size: 16px;
`;
export const ProfileData = styled.View`
  flex-direction: row;
  gap: 15px;
`;
export const TextAge = styled.Text`
  font-size: 14px;
  font-family: "Quicksand_400Regular";
`;
export const TextBold = styled.Text`
  font-family: "Quicksand_600SemiBold";
  font-size: 14px;
  color: ${(props) => (props.situacao == "pendente" ? "#49B3BA" : "#8C8A97")};
`;
export const ViewRow = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
export const ClockCard = styled.View`
  flex-direction: row;
  gap: 6px;
  padding: 4px 23px;
  border-radius: 5px;
  align-items: center;
  background-color: ${(props) =>
    props.situacao == "pendente" ? "#E8FCFD" : "#F1F0F5"};
`;
export const ButtonCard = styled.TouchableOpacity``;
export const ButtonText = styled.Text`
  font-size: 12px;
  font-family: "MontserratAlternates_500Medium";
  color: ${(props) => (props.situacao == "pendente" ? "#C81D25" : "#344F8F")};
`;
