import { Modal } from "react-native";
import {
  ModalContent,
  ModalText2,
  PatientModal,
} from "../CancelattionModal/Style";
import { ModalUserPhoto, YearEmailBox } from "../MedicalRecordModal/Style";
import { Title } from "../Title/Title";
import { Button, ButtonTitle } from "../Button/Button";
import { ButtonLinkMediumCancel, LinkMedium } from "../LinkMedium/LinkMedium";

export const DoctorOverview = ({ navigation, setShowDoctorOverview, visible, ...rest }) => {
  return (
    <Modal {...rest} visible={visible} transparent={true} animationType="fade">
      {/* Reutilizando código de outros componentes */}
      <PatientModal>
        <ModalContent>
          <ModalUserPhoto
            source={require("../../assets/doctor_image_medium.png")}
          />
          <Title>Dr. Claudio</Title>
          <YearEmailBox>
            <ModalText2>22 anos</ModalText2>
            <ModalText2>niccole.sarga@gmail.com</ModalText2>
          </YearEmailBox>

          <Button onPress={() => navigation.navigate("ConsultationLocation")}>
            <ButtonTitle>Ver Local da consulta</ButtonTitle>
          </Button>

          <ButtonLinkMediumCancel onPress={() => setShowDoctorOverview(false)}>
            <LinkMedium>Cancelar</LinkMedium>
          </ButtonLinkMediumCancel>
        </ModalContent>
      </PatientModal>
    </Modal>
  );
};
