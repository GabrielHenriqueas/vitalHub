import { Button, ButtonTitle } from "../../components/Button/Button";
import { ModalText2 } from "../../components/CancelattionModal/Style";
import { Container, ContainerUser } from "../../components/Container/Container";
import { Input, InputBig } from "../../components/Input/Input";
import { ButtonLinkMediumCancel, LinkMedium } from "../../components/LinkMedium/LinkMedium";
import { YearEmailBox } from "../../components/MedicalRecordModal/Style";
import { Title } from "../../components/Title/Title";
import {
  InfoBox,
  InfoBox3,
  InfoTitle,
} from "../../components/UserInfo/UserInfo";
import { UserPhoto } from "../../components/UserPhoto/UserPhoto";
import { InfoBoxMedicalRecord } from "./Style";

export const MedicalRecordScreen = () => {
  return (
    <ContainerUser>
      <Container>
        <UserPhoto source={require("../../assets/UserPhoto.png")} />
        <InfoBoxMedicalRecord>
          <Title>Richard Kosta</Title>

          <YearEmailBox>
            {/* Reutilizando código pois é exatamente igualmente */}
            <ModalText2> 22 anos </ModalText2>
            <ModalText2>richard.kosta@gmail.com</ModalText2>
          </YearEmailBox>
        </InfoBoxMedicalRecord>

        <InfoBox3>
          <InfoTitle>Descrição da consulta</InfoTitle>
          <InputBig placeholder="Descrição" />
        </InfoBox3>

        <InfoBox>
          <InfoTitle>Diagnóstico do paciente</InfoTitle>
          <Input placeholder="Diagnóstico" />
        </InfoBox>

        <InfoBox3>
            <InfoTitle>Prescrição médica</InfoTitle>
            <InputBig placeholder="Prescrição médica"/>
        </InfoBox3>

        <Button>
            <ButtonTitle>Salvar</ButtonTitle>
        </Button>

        <ButtonLinkMediumCancel>
            <LinkMedium>Cancelar</LinkMedium>
        </ButtonLinkMediumCancel>
      </Container>
    </ContainerUser>
  );
};
