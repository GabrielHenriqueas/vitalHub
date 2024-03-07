import { Modal } from "react-native";
import { Title } from "../Title/Title";
import { Button, ButtonTitle } from "../Button/Button";
import { ButtonLinkMediumCancel, LinkMedium } from "../LinkMedium/LinkMedium";
import { ModalContent, ModalText, PatientModal } from "./Style";

export const CancelattionModal = ({ visible, setShowModalCancel, ...rest }) => {
  return (
    <Modal {...rest} visible={visible} transparent={true} animationType="fade">
      <PatientModal>
        <ModalContent>
          <Title>Cancelar consulta</Title>

          <ModalText>
            Ao cancelar essa consulta, abrirá uma possível disponibilidade no
            seu horário, deseja mesmo cancelar essa consulta?
          </ModalText>

          <Button onPress={() => setShowModalCancel(false)}>
            <ButtonTitle>Confirmar</ButtonTitle>
          </Button>

          <ButtonLinkMediumCancel onPress={() => setShowModalCancel(false)}>
            <LinkMedium>Cancelar</LinkMedium>
          </ButtonLinkMediumCancel>
        </ModalContent>
      </PatientModal>
    </Modal>
  );
};
