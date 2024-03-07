import { Container } from "../../components/Container/Container";
import { ButtonLinkMediumCancel, LinkMedium } from "../../components/LinkMedium/LinkMedium";
import { Title } from "../../components/Title/Title";
import {
  InfoBox2,
  InfoBoxSmall,
  InfoSmall,
  InfoText,
  InfoTitle,
} from "../../components/UserInfo/UserInfo";
import {
    naoseimaisnomeparacomponente,
  LocationInfoBox,
  LocationInfoInput,
  LocationInfoInputSmall,
  LocationInfoSubtitle,
  LocationInfoTextInputBox,
  LocationInfoTitleInput,
  MapsImage,
} from "./Style";

export const ConsultationLocation = ({navigation}) => {
  return (
    <Container>
      <MapsImage source={require("../../assets/mapsImage.png")} />

      <LocationInfoBox>
        <Title>Clínica Natureh</Title>
        <LocationInfoSubtitle>São Paulo, Brasil</LocationInfoSubtitle>

        <LocationInfoTextInputBox>
          <LocationInfoTitleInput>Endereço</LocationInfoTitleInput>
          <LocationInfoInput placeholder="Rua Vicenso Silva, 987" />
        </LocationInfoTextInputBox>

        <InfoBox2>
          <InfoBoxSmall>
            <InfoTitle>Numero</InfoTitle>
            <LocationInfoInputSmall placeholder="578" />
            
          </InfoBoxSmall>
          <InfoBoxSmall>
            <InfoTitle>Cidade</InfoTitle>
            <LocationInfoInputSmall placeholder="Moema-SP" />
          </InfoBoxSmall>
        </InfoBox2>

        <ButtonLinkMediumCancel onPress={() => navigation.replace("HomeScreen_Patient")}>
            <LinkMedium>Voltar</LinkMedium>
        </ButtonLinkMediumCancel>
      </LocationInfoBox>
    </Container>
  );
};
