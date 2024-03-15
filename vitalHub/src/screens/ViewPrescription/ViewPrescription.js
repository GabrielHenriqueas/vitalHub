import { MaterialCommunityIcons, SimpleLineIcons } from "@expo/vector-icons";
import { Container, ContainerUser } from "../../components/Container/Container";
import {
  CancelButton,
  CancelButtonText,
  DoctorImageBig,
  DoctorPrescriptionBox,
  DoctorPrescriptionBoxImages,
  DoctorPrescriptionBoxSmall,
  DoctorPrescriptionContainer,
  DoctorPrescriptionText,
  DoctorPrescriptionTitle,
  InfoDoctorBox,
  InfoDoctorText,
  SendButton,
  SendButtonText,
  SendCancelButtonContainer,
  TitleViewPrescription,
} from "./Style";
import {
  ButtonLinkMediumCancel,
  LinkMedium,
} from "../../components/LinkMedium/LinkMedium";

import CameraModal from "../../components/CameraModal/CameraModal"
import { useEffect, useState } from "react";

export const ViewPrescription = ({navigation}) => {

  const [uriCameraCapture, setUriCameraCapture] = useState(false)
  const [showCameraModal, setShowCameraModal] = useState(false)

  useEffect(() => {

  }, [showCameraModal])

  return (
    <ContainerUser>
      <Container>
        <DoctorImageBig source={require("../../assets/DoctorImageBig.png")} />

        <TitleViewPrescription>Dr. Claudio</TitleViewPrescription>

        <InfoDoctorBox>
          <InfoDoctorText>Clinico geral</InfoDoctorText>
          <InfoDoctorText>CRM-15286 </InfoDoctorText>
        </InfoDoctorBox>

        <DoctorPrescriptionContainer>
          <DoctorPrescriptionTitle>
            Descrição da consulta
          </DoctorPrescriptionTitle>
          <DoctorPrescriptionBox>
            <DoctorPrescriptionText>
              O paciente possuí uma infecção no ouvido. Necessário repouse de 2
              dias e acompanhamento médico constante
            </DoctorPrescriptionText>
          </DoctorPrescriptionBox>
        </DoctorPrescriptionContainer>

        <DoctorPrescriptionContainer>
          <DoctorPrescriptionTitle>
            Diagnóstico do paciente
          </DoctorPrescriptionTitle>
          <DoctorPrescriptionBoxSmall>
            <DoctorPrescriptionText>Infecção no ouvido</DoctorPrescriptionText>
          </DoctorPrescriptionBoxSmall>
        </DoctorPrescriptionContainer>

        <DoctorPrescriptionContainer>
          <DoctorPrescriptionTitle>Prescrição médica</DoctorPrescriptionTitle>
          <DoctorPrescriptionBox>
            <DoctorPrescriptionText>Medicamento: Advil</DoctorPrescriptionText>
            <DoctorPrescriptionText>Dosagem: 50 mg</DoctorPrescriptionText>
            <DoctorPrescriptionText>
              Frequência: 3 vezes ao dia
            </DoctorPrescriptionText>
            <DoctorPrescriptionText>Duração: 3 dias </DoctorPrescriptionText>
          </DoctorPrescriptionBox>
        </DoctorPrescriptionContainer>

        <DoctorPrescriptionContainer>
          <DoctorPrescriptionTitle>Exames médicos</DoctorPrescriptionTitle>
          <DoctorPrescriptionBoxImages>
            <SimpleLineIcons name="exclamation" size={24} color={"#4E4B59"} />
            <DoctorPrescriptionText>
              Nenhuma foto informada
            </DoctorPrescriptionText>
          </DoctorPrescriptionBoxImages>
        </DoctorPrescriptionContainer>

        <SendCancelButtonContainer>
          <SendButton onPress={() => navigation.replace("Camera")}>
            <MaterialCommunityIcons
              name="camera-plus-outline"
              color={"#ffffff"}
              size={24}
            />
            <SendButtonText>Enviar</SendButtonText>
          </SendButton>
          <CancelButton>
            <CancelButtonText>Cancelar</CancelButtonText>
          </CancelButton>
        </SendCancelButtonContainer>
        <DoctorPrescriptionContainer>
          <DoctorPrescriptionBox>
            <DoctorPrescriptionText>
              Resultado do exame de sangue : tudo normal
            </DoctorPrescriptionText>
          </DoctorPrescriptionBox>
        </DoctorPrescriptionContainer>
        <ButtonLinkMediumCancel onPress={() => navigation.replace("HomeScreen_Patient")}>
          <LinkMedium>Voltar</LinkMedium>
        </ButtonLinkMediumCancel>
      </Container>

      <CameraModal
        viseble={showCameraModal}
        setUriCameraCapture={setUriCameraCapture}
        setShowCameraModal={setShowCameraModal}
      />
    </ContainerUser>
  );
};
