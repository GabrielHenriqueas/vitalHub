import { Button, ButtonTitle } from "../../components/Button/Button";
import { Container } from "../../components/Container/Container";
import { Input } from "../../components/Input/Input";
import { Logo } from "../../components/Logo/Logo";
import { Subtitle } from "../../components/Subtitle/Subtitle";
import { Title } from "../../components/Title/Title";

export const PasswordReset = ({ navigation }) => {
  return (
    <Container>
      <Logo source={require("../../assets/logo.png")} />
      <Title>Redefinir Senha</Title>
      <Subtitle>Insira e confirme sua nova senha</Subtitle>
      <Input placeholder="Nova senha" />
      <Input placeholder="Confirmar nova senha" />
      <Button onPress={() => navigation.replace("Login")}>
        <ButtonTitle>Confirmar nova senha</ButtonTitle>
      </Button>
    </Container>
  );
};
