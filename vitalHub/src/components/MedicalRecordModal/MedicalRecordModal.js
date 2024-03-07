import { Modal } from "react-native";
import { Button, ButtonTitle } from "../Button/Button";
import {
  ModalContent,
  ModalText2,
  PatientModal,
} from "../CancelattionModal/Style";
import { ButtonLinkMediumCancel, LinkMedium } from "../LinkMedium/LinkMedium";
import { Title } from "../Title/Title";
import { ModalUserPhoto, YearEmailBox } from "./Style";

export const MedicalRecordModal = ({
  navigation,
  setshowModalAppointment,
  visible,
  ...rest
}) => {
  return (
    <Modal {...rest} visible={visible} transparent={true} animationType="fade">
      <PatientModal>
        <ModalContent>
          <ModalUserPhoto source={require("../../assets/ModalUserPhoto.png")} />

          <Title>Niccole Sarga</Title>

          <YearEmailBox>
            <ModalText2>22 anos</ModalText2>
            <ModalText2>niccole.sarga@gmail.com</ModalText2>
          </YearEmailBox>

          <Button onPress={() => navigation.replace("ViewPrescription")}>
            <ButtonTitle>Inserir prontuario</ButtonTitle>
          </Button>

          <ButtonLinkMediumCancel
            onPress={() => setshowModalAppointment(false)}
          >
            <LinkMedium>Cancelar</LinkMedium>
          </ButtonLinkMediumCancel>
        </ModalContent>
      </PatientModal>
    </Modal>
  );
};
