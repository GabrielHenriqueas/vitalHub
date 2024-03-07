import { Modal } from "react-native";
import {
  ModalConfirmationSubtitle,
  ModalInfoBox,
  ModalInfoBoxSubtitle,
  ModalInfoBoxTitle,
  ModalQueryInfo,
} from "./Style";
import {
  ModalTitle,
  ModalTransparent,
} from "../ModalScheduleAppointment/Style";
import { useEffect } from "react";
import { Button, ButtonTitle } from "../Button/Button";
import { ButtonLinkMediumCancel, LinkMedium } from "../LinkMedium/LinkMedium";

export const ModalConfirmation = ({ navigation, visible, setShowModalQuery, ...rest }) => {
  // useEffect(() => {
  //   console.log(visible)
  // },[]);

  return (
    <Modal visible={visible} animationType="fade" transparent={true} {...rest}>
      <ModalTransparent>
        <ModalQueryInfo>
          <ModalTitle>Agendar consulta</ModalTitle>

          <ModalConfirmationSubtitle>
            Consulte os dados selecionados para a sua consulta
          </ModalConfirmationSubtitle>

          <ModalInfoBox>
            <ModalInfoBoxTitle>Data da consulta</ModalInfoBoxTitle>
            <ModalInfoBoxSubtitle>1 de Novembro de 2023</ModalInfoBoxSubtitle>
          </ModalInfoBox>
          <ModalInfoBox>
            <ModalInfoBoxTitle>Médico(a) da consulta</ModalInfoBoxTitle>
            <ModalInfoBoxSubtitle>Dra Alessandra</ModalInfoBoxSubtitle>
            <ModalInfoBoxSubtitle>
              Demartologa, Esteticista
            </ModalInfoBoxSubtitle>
          </ModalInfoBox>
          <ModalInfoBox>
            <ModalInfoBoxTitle>Local da consulta</ModalInfoBoxTitle>
            <ModalInfoBoxSubtitle>São Paulo, SP</ModalInfoBoxSubtitle>
          </ModalInfoBox>
          <ModalInfoBox>
            <ModalInfoBoxTitle>Tipo da consulta</ModalInfoBoxTitle>
            <ModalInfoBoxSubtitle>Rotina</ModalInfoBoxSubtitle>
          </ModalInfoBox>

          <Button onPress={() => navigation.navigate("HomeScreen_Patient")}>
            <ButtonTitle>Continuar</ButtonTitle>
          </Button>

          <ButtonLinkMediumCancel onPress={() => setShowModalQuery(false)}>
            <LinkMedium>Cancelar</LinkMedium>
          </ButtonLinkMediumCancel>
        </ModalQueryInfo>
      </ModalTransparent>
    </Modal>
  );
};
