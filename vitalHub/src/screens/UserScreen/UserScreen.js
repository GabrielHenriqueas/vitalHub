import { Button, ButtonTitle } from "../../components/Button/Button";
import { Container, ContainerUser } from "../../components/Container/Container";
import {
  Info,
  InfoBox,
  InfoBox2,
  InfoBoxSmall,
  InfoSmall,
  InfoText,
  InfoTitle,
} from "../../components/UserInfo/UserInfo";
import {
  UserName,
  UserNameBox,
  UserNameEmail,
} from "../../components/UserName/UserName";
import { UserPhoto } from "../../components/UserPhoto/UserPhoto";

export const UserScreen = ({ navigation }) => {
  return (
    <ContainerUser>
      <Container>
        <UserPhoto source={require("../../assets/UserPhoto.png")} />
        <UserNameBox>
          <UserName>Richard Kosta</UserName>
          <UserNameEmail>richard.kosta@gmail.com</UserNameEmail>
        </UserNameBox>

        <InfoBox>
          <InfoTitle>Data de Nascimento</InfoTitle>
          <Info>
            <InfoText>04/05/1999</InfoText>
          </Info>
        </InfoBox>
        <InfoBox>
          <InfoTitle>CPF</InfoTitle>
          <Info>
            <InfoText>859********</InfoText>
          </Info>
        </InfoBox>
        <InfoBox>
          <InfoTitle>Endereço</InfoTitle>
          <Info>
            <InfoText>Rua Vicenso Silva, 987</InfoText>
          </Info>
        </InfoBox>

        <InfoBox2>
          <InfoBoxSmall>
            <InfoTitle>CEP</InfoTitle>
            <InfoSmall>
              <InfoText>06548-909</InfoText>
            </InfoSmall>
          </InfoBoxSmall>
          <InfoBoxSmall>
            <InfoTitle>Cidade</InfoTitle>
            <InfoSmall>
              <InfoText>Moema-SP</InfoText>
            </InfoSmall>
          </InfoBoxSmall>
        </InfoBox2>

        <Button>
          <ButtonTitle>Salvar</ButtonTitle>
        </Button>
        <Button onPress={() => navigation.navigate("UserScreenEdit")}>
          <ButtonTitle>Editar</ButtonTitle>
        </Button>
      </Container>
    </ContainerUser>
  );
};
