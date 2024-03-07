import { AntDesign } from "@expo/vector-icons";
import CalendarSelectData from "../../components/CalendarSelectData/CalendarSelectData";
import { Container } from "../../components/Container/Container";
import {
  SelectDataSelectHourBox,
  SelectDataTitle,
  SelectHour,
  SelectHourButtonTitle,
  SelectHourTitle,
} from "./Style";
import { Button, ButtonTitle } from "../../components/Button/Button";
import {
  ButtonLinkMediumCancel,
  LinkMedium,
} from "../../components/LinkMedium/LinkMedium";
import { useState } from "react";
import { ModalConfirmation } from "../../components/ModalConfirmation/ModalConfirmation";
import InputSelect from "../../components/InputSelect/InputSelect";

export const SelectData = ({navigation}) => {
  
  const [showModalQuery, setShowModalQuery] = useState(false);

  return (
    <Container>
      <SelectDataTitle>Selecionar Data</SelectDataTitle>

      <CalendarSelectData />

      <InputSelect />

      <Button onPress={() => setShowModalQuery(true)}>
        <ButtonTitle>Continuar</ButtonTitle>
      </Button>

      <ButtonLinkMediumCancel>
        <LinkMedium>Cancelar</LinkMedium>
      </ButtonLinkMediumCancel>

      <ModalConfirmation
        visible={showModalQuery}
        setShowModalQuery={setShowModalQuery}
        navigation={navigation}
      />
    </Container>
  );
};
