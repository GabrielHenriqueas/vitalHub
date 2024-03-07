import { Icon } from "react-native-elements";
import { Container, ContainerUser } from "../../components/Container/Container";
import {
  BlueGradientHeader,
  DoctorImageHeader,
  DoctorInfoBoxHeader,
  DoctorInfoBoxTextHeader,
  DoctorNameHeader,
  Welcome,
} from "../../components/Header/Header";
import CalendarHome from "../../components/CalendarHome/CalendarHome";
import { ButtonFilterBox } from "../../components/BtnListAppointment/Style";
import { BtnListAppointment } from "../../components/BtnListAppointment/BtnListAppointment";
import { useState } from "react";
import { ListComponent } from "../../components/List/ListComponent";
import { AppointmentCard } from "../../components/AppointmentCard/AppointmentCard";
import { CancelattionModal } from "../../components/CancelattionModal/CancelattionModal";
import { MedicalRecordModal } from "../../components/MedicalRecordModal/MedicalRecordModal";

const Consultas = [
  { id: 1, nome: "Carlos", situacao: "pendente" },
  { id: 2, nome: "Carlos", situacao: "realizado" },
  { id: 3, nome: "Carlos", situacao: "cancelado" },
  { id: 4, nome: "Carlos", situacao: "realizado" },
  { id: 5, nome: "Carlos", situacao: "cancelado" },
];

export const HomeScreen_Doctor = () => {
  // state para o estado da lista(cards)
  const [statusLista, setStatusLista] = useState("pendente");

  const [showModalCancel, setshowModalCancel] = useState(false);
  const [showModalAppointment, setshowModalAppointment] = useState(false);

  return (
    // <ContainerUser>
    <Container>
      <BlueGradientHeader>
        <DoctorInfoBoxHeader>
          <DoctorImageHeader
            source={require("../../assets/DoctorImageSmall.png")}
          />
          <DoctorInfoBoxTextHeader>
            <Welcome>Bem Vindo!</Welcome>
            <DoctorNameHeader>Dr. Claudio</DoctorNameHeader>
          </DoctorInfoBoxTextHeader>
        </DoctorInfoBoxHeader>

        <Icon
          name="notifications"
          type="ionicons"
          color="#ffffff"
          width="25px"
          height="25px"
        />
      </BlueGradientHeader>

      <CalendarHome />

      <ButtonFilterBox>
        <BtnListAppointment
          textButton={"Agendadas"}
          clickButton={statusLista === "pendente"}
          onPress={() => setStatusLista("pendente")}
        />

        {/* botão para realizadas */}
        <BtnListAppointment
          textButton={"Realizadas"}
          clickButton={statusLista === "realizado"}
          onPress={() => setStatusLista("realizado")}
        />

        {/* botão para canceladas */}
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
            <AppointmentCard
              situacao={item.situacao}
              onPressCancel={() => setshowModalCancel(true)}
              onPressAppointment={() => setshowModalAppointment(true)}
            />
          )
        }
        showsVerticalScrollIndicator={false}
      />

      {/* modal cancelar */}

      <CancelattionModal
        visible={showModalCancel}
        setShowModalCancel={setshowModalCancel}
      />

      {/* modal ver prontuário */}

      <MedicalRecordModal
        visible={showModalAppointment}
        setshowModalAppointment={setshowModalAppointment}
      />
    </Container>
    // </ContainerUser>
  );
};
