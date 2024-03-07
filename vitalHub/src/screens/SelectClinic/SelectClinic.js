import { useState } from "react";
import { Container } from "../../components/Container/Container";
import HighLightList from "../../components/HighlightList/HighLightList";
import {
  ButtonContinue,
  HighLightListContainer,
} from "../../components/HighlightList/Style";
import { TitleSelectClinic } from "./Style";
import { ButtonTitle } from "../../components/Button/Button";
import {
  ButtonLinkMediumCancel,
  LinkMedium,
} from "../../components/LinkMedium/LinkMedium";

export const SelectClinic = ({ navigation }) => {
  const [statusList, setStatusList] = useState("");
  return (
    <Container>
      <TitleSelectClinic>Selecionar Clinica</TitleSelectClinic>

      <HighLightListContainer>
        <HighLightList
          cardTitle={"Clínica Natureh"}
          cardSubtitle={"São Paulo - SP"}
          clickButton={statusList === "select"}
          onPress={() => setStatusList("select")}
          starText={"4,5"}
          dayText={"Seg - Sex"}
        />
        <HighLightList
          cardTitle={"Diamond Pró-Mulher"}
          cardSubtitle={"São Paulo - SP"}
          clickButton={statusList === "selected"}
          onPress={() => setStatusList("selected")}
          starText={"4,8"}
          dayText={"Seg - Sex"}
        />
        <HighLightList
          cardTitle={"Clinica Villa Lobos"}
          cardSubtitle={"Taboão - SP"}
          clickButton={statusList === "selected2"}
          onPress={() => setStatusList("selected2")}
          starText={"5,0"}
          dayText={"Seg - Sex"}
        />
        <HighLightList
          cardTitle={"Clinica Villa Lobos"}
          cardSubtitle={"Taboão - SP"}
          clickButton={statusList === "selected2"}
          onPress={() => setStatusList("selected2")}
          starText={"5,0"}
          dayText={"Seg - Sex"}
        />
      </HighLightListContainer>

      <ButtonContinue onPress={() => navigation.replace("SelectDoctor")}>
        <ButtonTitle>Continuar</ButtonTitle>
      </ButtonContinue>

      <ButtonLinkMediumCancel>
        <LinkMedium>Cancelar</LinkMedium>
      </ButtonLinkMediumCancel>
    </Container>
  );
};
