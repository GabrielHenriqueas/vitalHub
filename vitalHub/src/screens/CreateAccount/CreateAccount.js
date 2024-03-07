import { Icon } from "react-native-elements";
import {
  Button,
  ButtonGoogle,
  ButtonTitle,
  ButtonTitleGoogle,
} from "../../components/Button/Button";
import { Container } from "../../components/Container/Container";
import { Input } from "../../components/Input/Input";
import { Logo } from "../../components/Logo/Logo";
import { Subtitle } from "../../components/Subtitle/Subtitle";
import { Title } from "../../components/Title/Title";

export const CreateAccount = ({ navigation }) => {
  return (
    <Container>
      <Logo source={require("../../assets/logo.png")} />
      <Title>Criar conta</Title>
      <Subtitle>
        Insira seu endereço de e-mail e senha para realizar seu cadastro
      </Subtitle>

      <Input placeholder="E-mail" />
      <Input placeholder="Senha" />
      <Input placeholder="confirmar Senha" />

      <Button onPress={() => navigation.replace("Login")}>
        <ButtonTitle>Cadastrar</ButtonTitle>
      </Button>
      <ButtonGoogle>
        <Icon
          name="google"
          type="antdesign"
          color="#496bba"
          width="16px"
          height="20px"
        />
        <ButtonTitleGoogle>Cadastrar com o google</ButtonTitleGoogle>
      </ButtonGoogle>
    </Container>
  );
};
