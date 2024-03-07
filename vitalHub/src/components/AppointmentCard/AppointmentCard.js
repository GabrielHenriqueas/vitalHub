import { AntDesign } from "@expo/vector-icons";
import {
  ButtonCard,
  ButtonText,
  ClockCard,
  ContainerCardsList,
  ContentCard,
  DataProfileCard,
  ProfileData,
  ProfileImage,
  ProfileName,
  TextAge,
  TextBold,
  ViewRow,
} from "./Style";
import { TouchableOpacity } from "react-native";
import { useState } from "react";

export const AppointmentCard = ({
  situacao = "pendente",
  onPressCancel,
  onPressAppointment,
  navigation,

}) => {
  return (
    // container principal
    <ContainerCardsList>
      <ProfileImage source={require("../../assets/ModalUserPhoto.png")} />

      <ContentCard>
        <DataProfileCard>
          <ProfileName>Niccole Sarga</ProfileName>

          <ProfileData>
            <TextAge>19 anos</TextAge>
            <TextBold>Rotina</TextBold>
          </ProfileData>
        </DataProfileCard>

        <ViewRow>
          <ClockCard situacao={situacao}>
            <AntDesign
              name="clockcircle"
              size={14}
              color={situacao == "pendente" ? "#49B3BA" : "#8C8A97"}
            />
            <TextBold situacao={situacao}>14:00</TextBold>
          </ClockCard>

          {/* valida e mostra o tipo de botão conforme a situação da consulta */}
          {situacao == "cancelado" ? (
            <></>
          ) : situacao == "pendente" ? (
            <ButtonCard onPress={onPressCancel}>
              <ButtonText situacao={situacao}>Cancelar</ButtonText>
            </ButtonCard>
          ) : (
            <ButtonCard onPress={onPressAppointment}>
              <ButtonText situacao={situacao}>Ver prontuário</ButtonText>
            </ButtonCard>
          )}
        </ViewRow>
      </ContentCard>
    </ContainerCardsList>
  );
};

export const AppointmentCardDoctor = ({
  navigation,
  situacao = "pendente",
  onPressCancel,
  onPressAppointment,
}) => {

  const [profile, setProfile] = useState("Paciente")
  
  return (
    // container principal
    <ContainerCardsList>
      <TouchableOpacity onPress={onPressAppointment}>
        <ProfileImage source={require("../../assets/DoctorImageSmall.png")} />
      </TouchableOpacity>
      <ContentCard>
        <TouchableOpacity onPress={onPressAppointment}>
          <DataProfileCard>
            <ProfileName>Dr. Claudio</ProfileName>

            <ProfileData>
              <TextAge>22 anos</TextAge>
              <TextBold>Rotina</TextBold>
            </ProfileData>
          </DataProfileCard>
        </TouchableOpacity>

        <ViewRow>
          <ClockCard situacao={situacao}>
            <AntDesign
              name="clockcircle"
              size={14}
              color={situacao == "pendente" ? "#49B3BA" : "#8C8A97"}
            />
            <TextBold situacao={situacao}>14:00</TextBold>
          </ClockCard>

          {/* valida e mostra o tipo de botão conforme a situação da consulta */}
          {situacao == "cancelado" ? (
            <></>
          ) : situacao == "pendente" ? (
            <ButtonCard onPress={onPressCancel}>
              <ButtonText situacao={situacao}>Cancelar</ButtonText>
            </ButtonCard>
          ) : (
            <ButtonCard onPress={profile !== "Paciente" ? onPressAppointment : () => navigation.replace("ViewPrescription")}>
              <ButtonText situacao={situacao}>Ver prontuário</ButtonText>
            </ButtonCard>
          )}
        </ViewRow>
      </ContentCard>
    </ContainerCardsList>
  );
};
