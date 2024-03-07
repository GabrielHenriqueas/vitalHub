// O burro aqui colocou o nome errado no arquivo de estilização para o BOTÃO do modal, e como não pode apagar eu fiz esse arquivo de nome igual porém diferente para ocorrer essa diferenciação, a programação do verdadeiro modal está neste arquivo

import { Modal, TouchableOpacity } from "react-native";
import {
  ButtonConfirmSchedule,
  CancelButton,
  ModalScheduleQuery,
  ModalTitle,
  ModalTransparent,
  QueryInput,
  QueryOptions,
  QueryOptionsContainer,
  QueryQuestions,
  Question,
  QuestionContainer,
  TextOption,
} from "./Style";
import { Title } from "../Title/Title";
import { ButtonLinkMediumCancel, LinkMedium } from "../LinkMedium/LinkMedium";
import { ButtonTitle } from "../Button/Button";

export const ScheduleAppointmentModal = ({
  navigation,
  visible,
  setShowModalScheduleAppointment,
  ...rest
}) => {
  return (
    <Modal {...rest} visible={visible} animationType="fade" transparent={true}>
      <ModalTransparent>
        <ModalScheduleQuery>
          <ModalTitle>Agendar Consulta</ModalTitle>

          {/* <QueryQuestions>
            <Question>Informe o tipo da consulta</Question>
            <QueryInput
              placeholder="Tipo de consulta"
              placeholderTextColor="#34898F"
            />
          </QueryQuestions> */}
          <QueryQuestions>
            <QuestionContainer>
              <Question>Qual o nível da consulta</Question>
            </QuestionContainer>

            <QueryOptionsContainer>
              <TouchableOpacity>
                <QueryOptions>
                  <TextOption>Rotina</TextOption>
                </QueryOptions>
              </TouchableOpacity>
              <TouchableOpacity>
                <QueryOptions>
                  <TextOption>Exame</TextOption>
                </QueryOptions>
              </TouchableOpacity>
              <TouchableOpacity>
                <QueryOptions>
                  <TextOption>Urgência</TextOption>
                </QueryOptions>
              </TouchableOpacity>
            </QueryOptionsContainer>
          </QueryQuestions>

          <QueryQuestions>
            <QuestionContainer>
              <Question>Informe a localização desejada</Question>
            </QuestionContainer>

            <QueryInput
              placeholder="Informe a localização"
              placeholderTextColor="#34898F"
            />
          </QueryQuestions>

          <ButtonConfirmSchedule onPress={() => navigation.navigate("SelectClinic")}>
            <ButtonTitle>CONTINUAR</ButtonTitle>
          </ButtonConfirmSchedule>

          <CancelButton
            onPress={() => setShowModalScheduleAppointment(false)}
          >
            <LinkMedium> Cancelar</LinkMedium>
          </CancelButton>
        </ModalScheduleQuery>
      </ModalTransparent>
    </Modal>
  );
};
