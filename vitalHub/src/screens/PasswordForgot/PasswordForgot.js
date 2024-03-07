import { Button, ButtonTitle } from "../../components/Button/Button";
import { Container } from "../../components/Container/Container";
import { Input } from "../../components/Input/Input";
import { Logo } from "../../components/Logo/Logo";
import { Subtitle2 } from "../../components/Subtitle/Subtitle";
import { Title } from "../../components/Title/Title";

export const PasswordForgot = ({ navigation }) => {
  return (
    <Container>
      <Logo source={require("../../assets/logo.png")} />
      <Title>Recuperar Senha</Title>
      <Subtitle2>
        Digite abaixo seu email cadastrado que enviaremos um link para
        recuperação de senha
      </Subtitle2>

      <Input placeholder="E-mail" />
      <Button  onPress={() => navigation.replace("EmailCode")} >
        <ButtonTitle>Continuar</ButtonTitle>
      </Button>
    </Container>
  );
};
