import { Button, ButtonTitle } from "../../components/Button/Button";
import { Container, ContainerUser } from "../../components/Container/Container";
import {
  InputUserEdit,
  InputUserEditSmall,
} from "../../components/Input/Input";
import {
  InfoBox,
  InfoBox2,
  InfoBoxSmall,
  InfoTitle,
} from "../../components/UserInfo/UserInfo";
import {
  UserName,
  UserNameBox,
  UserNameEmail,
} from "../../components/UserName/UserName";
import { UserPhoto } from "../../components/UserPhoto/UserPhoto";

export const UserScreenEdit = ({ navigation }) => {
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
          <InputUserEdit placeholder="04/05/1999" />
        </InfoBox>
        <InfoBox>
          <InfoTitle>CPF</InfoTitle>
          <InputUserEdit placeholder="859********" />
        </InfoBox>
        <InfoBox>
          <InfoTitle>Endereço</InfoTitle>
          <InputUserEdit placeholder="Rua Vicenso Silva, 987" />
        </InfoBox>

        <InfoBox2>
          <InfoBoxSmall>
            <InfoTitle>CEP</InfoTitle>
            <InputUserEditSmall placeholder="06548-909" />
          </InfoBoxSmall>
          <InfoBoxSmall>
            <InfoTitle>Cidade</InfoTitle>
            <InputUserEditSmall placeholder="Moema-SP" />
          </InfoBoxSmall>
        </InfoBox2>

        <Button onPress={() => navigation.navigate("UserScreen")}>
            <ButtonTitle>Salvar</ButtonTitle>
        </Button>
      </Container>
    </ContainerUser>

  );
};
