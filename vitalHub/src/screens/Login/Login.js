import { Icon } from "react-native-elements";
import {
  Button,
  ButtonGoogle,
  ButtonTitle,
  ButtonTitleGoogle,
} from "../../components/Button/Button";
import { Container } from "../../components/Container/Container";
import { Input } from "../../components/Input/Input";
import {
  ButtonLinkMedium,
  LinkMedium,
} from "../../components/LinkMedium/LinkMedium";
import { Logo } from "../../components/Logo/Logo";
import { Title } from "../../components/Title/Title";
import {
  ContentAccount,
  TextAccount,
  TextAccount2,
} from "../../components/ContentAccount/ContentAccount";
import { TouchableOpacity } from "react-native";

export const Login = ({ navigation }) => {
  async function Login() {
    navigation.navigate("Main");
  }
  return (
    <Container>
      <Logo source={require("../../assets/logo.png")} />
      <Title>Entrar ou criar conta</Title>
      <Input placeholder="Email" />
      <Input placeholder="Senha" />

      <ButtonLinkMedium onPress={() => navigation.replace("PasswordForgot")}>
        <LinkMedium>Esqueceu sua senha?</LinkMedium>
      </ButtonLinkMedium>
      <Button onPress={(e) => Login()}>
        <ButtonTitle>Entrar</ButtonTitle>
      </Button>

      <ButtonGoogle>
        <Icon
          name="google"
          type="antdesign"
          color="#496bba"
          width="16px"
          height="20px"
        />
        <ButtonTitleGoogle>Entrar com o google</ButtonTitleGoogle>
      </ButtonGoogle>

      <ContentAccount>
        <TextAccount>Não tem conta?</TextAccount>
        <TouchableOpacity onPress={() => navigation.replace("CreateAccount")}>
          <TextAccount2>Crie uma Agora</TextAccount2>
        </TouchableOpacity>
      </ContentAccount>
    </Container>
  );
};
