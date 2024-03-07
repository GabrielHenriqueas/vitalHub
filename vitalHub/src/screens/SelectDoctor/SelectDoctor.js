import { useState } from "react";
import { Container } from "../../components/Container/Container";
import { TitleSelectDoctor } from "./Style";
import {
  ButtonContinue,
  HighLightListContainer,
} from "../../components/HighlightList/Style";
import { HighlightListDoctor } from "../../components/HighlightListDoctor/HighlightListDoctor";
import { ButtonTitle } from "../../components/Button/Button";
import {
  LinkMedium,
  ButtonLinkMediumCancel,
} from "../../components/LinkMedium/LinkMedium";

export const SelectDoctor = ({ navigation }) => {
  const [statusList, setStatusList] = useState("");

  return (
    <Container>
      <TitleSelectDoctor>Selecionar Médico</TitleSelectDoctor>

      <HighLightListContainer>
        <HighlightListDoctor
          source={{ uri: "https://github.com/gabrielhenriqueas.png" }}
          doctorName={"Dr. Gabriel"}
          doctorSpecialization={"urologista"}
          clickButton={statusList === "select"}
          onPress={() => setStatusList("select")}
        />
        <HighlightListDoctor
          source={{ uri: "https://github.com/heitorperrotta.png" }}
          doctorName={"Dr. Heithor Perrotta"}
          doctorSpecialization={"Pediatra"}
          clickButton={statusList === "selected"}
          onPress={() => setStatusList("selected")}
        />
        <HighlightListDoctor
          source={{ uri: "https://github.com/kauameloo.png" }}
          doctorName={"Dr. Kallan"}
          doctorSpecialization={"Fonoaudiologo"}
          clickButton={statusList === "selected2"}
          onPress={() => setStatusList("selected2")}
        />

        <ButtonContinue onPress={() => navigation.replace("SelectData")}>
          <ButtonTitle>Continuar</ButtonTitle>
        </ButtonContinue>

        <ButtonLinkMediumCancel>
          <LinkMedium>Cancelar</LinkMedium>
        </ButtonLinkMediumCancel>
      </HighLightListContainer>
    </Container>
  );
};
