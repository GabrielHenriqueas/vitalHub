import { Button, ButtonTitle } from "../../components/Button/Button";
import { Container } from "../../components/Container/Container";
import { InputCode, InputCodeBox } from "../../components/Input/Input";
import { Logo } from "../../components/Logo/Logo";
import { ResendLink } from "../../components/ResendLink/ResendLink";
import {
  Subtitle3,
  SubtitleAlternateColor,
  SubtitleBox,
} from "../../components/Subtitle/Subtitle";
import { Title } from "../../components/Title/Title";

export const EmailCode = ({ navigation }) => {
  return (
    <Container>
      <Logo source={require("../../assets/logo.png")} />
      <Title>Verifique o seu E-mail</Title>
      <SubtitleBox>
        <Subtitle3>Digite o código de 4 dígitos enviado para</Subtitle3>
        <SubtitleAlternateColor>username@gmail.com</SubtitleAlternateColor>
      </SubtitleBox>

      <InputCodeBox>
        <InputCode placeholder="0" />
        <InputCode placeholder="0" />
        <InputCode placeholder="0" />
        <InputCode placeholder="0" />
      </InputCodeBox>

      <Button onPress={() => navigation.replace("PasswordReset")}>
        <ButtonTitle>continuar</ButtonTitle>
      </Button>

      <ResendLink>Reenviar Código</ResendLink>
    </Container>
  );
};
