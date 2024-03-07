import { Icon } from "react-native-elements";
import { Container } from "../../components/Container/Container";
import {
  BlueGradientHeader,
  DoctorImageHeader,
  DoctorInfoBoxHeader,
  DoctorInfoBoxTextHeader,
  DoctorNameHeader,
  Welcome,
} from "../../components/Header/Header";
import CalendarHome from "../../components/CalendarHome/CalendarHome";
import { StyledCalendarStrip } from "../../components/CalendarHome/Style";
import { ButtonFilterBox } from "../../components/BtnListAppointment/Style";
import { BtnListAppointment } from "../../components/BtnListAppointment/BtnListAppointment";
import { useState } from "react";
import { ListComponent } from "../../components/List/ListComponent";
import { AppointmentCardDoctor } from "../../components/AppointmentCard/AppointmentCard";
import { CancelattionModal } from "../../components/CancelattionModal/CancelattionModal";
import { MedicalRecordModal } from "../../components/MedicalRecordModal/MedicalRecordModal";
import {
  ModalSCheduleAppointmentBox,
  ModalScheduleAppointment,
} from "../../components/ModalScheduleAppointment/ModalScheduleAppointment";
import { FontAwesome } from "@expo/vector-icons";
import { ScheduleAppointmentModal } from "../../components/ModalScheduleAppointment/ScheduleAppointmentModal";
import { DoctorOverview } from "../../components/DoctorOverview/DoctorOverview";
import { TouchableOpacity } from "react-native";

const Consultas = [
  { id: 1, nome: "Carlos", situacao: "pendente" },
  { id: 2, nome: "Carlos", situacao: "realizado" },
  { id: 3, nome: "Carlos", situacao: "cancelado" },
  { id: 4, nome: "Carlos", situacao: "realizado" },
  { id: 5, nome: "Carlos", situacao: "cancelado" },
];

export const HomeScreen_Patient = ({ navigation }) => {
  const [statusLista, setStatusLista] = useState("pendente");
  const [showModalCancel, setshowModalCancel] = useState(false);
  const [showDoctorOverview, setShowDoctorOverview] = useState(false);
  const [showModalScheduleAppointment, setShowModalScheduleAppointment] =
    useState(false);

  return (
    <Container>
      <BlueGradientHeader>
        <TouchableOpacity onPress={() => navigation.replace("UserScreen")}>
          {/* Nesse caso é do paciente porém estou reutilizando a do doctor */}
          <DoctorInfoBoxHeader>
            <DoctorImageHeader source={require("../../assets/UserPhoto.png")} />
            <DoctorInfoBoxTextHeader>
              <Welcome>Bem Vindo!</Welcome>
              <DoctorNameHeader>Richard Kosta</DoctorNameHeader>
            </DoctorInfoBoxTextHeader>
          </DoctorInfoBoxHeader>
        </TouchableOpacity>
        <Icon
          name="notifications"
          type="ionicons"
          color="#ffffff"
          width="25px"
          height="25px"
        />
      </BlueGradientHeader>

      <CalendarHome>
        <StyledCalendarStrip />
      </CalendarHome>

      <ButtonFilterBox>
        <BtnListAppointment
          textButton={"Agendadas"}
          clickButton={statusLista === "pendente"}
          onPress={() => setStatusLista("pendente")}
        />
        <BtnListAppointment
          textButton={"Realizadas"}
          clickButton={statusLista === "realizado"}
          onPress={() => setStatusLista("realizado")}
        />
        <BtnListAppointment
          textButton={"Canceladas"}
          clickButton={statusLista === "cancelado"}
          onPress={() => setStatusLista("cancelado")}
        />
      </ButtonFilterBox>

      <ListComponent
        data={Consultas}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) =>
          statusLista == item.situacao && (
            <AppointmentCardDoctor
              situacao={item.situacao}
              onPressCancel={() => setshowModalCancel(true)}
              onPressAppointment={() => setShowDoctorOverview(true)}
              navigation={navigation}
            />
          )
        }
        showsVerticalScrollIndicator={false}
      />

      <CancelattionModal
        visible={showModalCancel}
        setShowModalCancel={setshowModalCancel}
      />

      <DoctorOverview
        visible={showDoctorOverview}
        setShowDoctorOverview={setShowDoctorOverview}
        navigation={navigation}
      />

      <ModalSCheduleAppointmentBox>
        <ModalScheduleAppointment
          onPress={() => setShowModalScheduleAppointment(true)}
        >
          <FontAwesome name="stethoscope" size={32} color="#ffffff" />
        </ModalScheduleAppointment>
      </ModalSCheduleAppointmentBox>

      <ScheduleAppointmentModal
        visible={showModalScheduleAppointment}
        setShowModalScheduleAppointment={setShowModalScheduleAppointment}
        navigation={navigation}
      />
    </Container>
  );
};
