import { Modal } from "react-native";
import { Title } from "../Title/Title";
import { Button, ButtonTitle } from "../Button/Button";
import { ButtonLinkMediumCancel, LinkMedium } from "../LinkMedium/LinkMedium";
import { ModalContent, ModalText, PatientModal } from "./Style";

//importar os recursos do expo-notifications
import * as Notifications from "expo-notifications";

//solicita permissões de notificação ao iniciar o app
Notifications.requestPermissionsAsync();

//define como as notificações devem ser tratadas quando recebidas
Notifications.setNotificationHandler({
  handleNotification: async () => ({

    //mostrar o alerta quando a notificação for recebida
    shouldShowAlert: true,

    //reproduz som ao receber notificação
    shouldPlaySound: true,

    //número de notificações no ícone do app
    shouldSetBadge: false,
  })
})

export const CancelattionModal = ({ visible, setShowModalCancel, ...rest }) => {
  
  //função para lidar com chamada de notificação
  const handleCallNotifications = async () => {

    //obtém o status da permissão 
    const { status } = await Notifications.getPermissionsAsync();

    //verifica se o usuário concedeu permissão
    if (status !== "granted") {
      alert("Você não deixou as notificações ativas!")
      return;
    }

    //agenda uma notificação
    await Notifications.scheduleNotificationAsync({
      content: {
        title: "Bem-vindo ao SENAI!",
        body: "Notificação recebida.",
      },
      trigger: null
    })
  }
  
  return (
    <Modal {...rest} visible={visible} transparent={true} animationType="fade">
      <PatientModal>
        <ModalContent>
          <Title>Cancelar consulta</Title>

          <ModalText>
            Ao cancelar essa consulta, abrirá uma possível disponibilidade no
            seu horário, deseja mesmo cancelar essa consulta?
          </ModalText>

          <Button onPress={handleCallNotifications}>
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
