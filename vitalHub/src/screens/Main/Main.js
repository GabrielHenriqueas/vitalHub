import {
  createBottomTabNavigator,
  treateBottonTabNavigator,
} from "@react-navigation/bottom-tabs";
import { HomeScreen_Patient } from "../HomeScreen_Patient/HomeScreen_Patient";
import { UserScreen } from "../UserScreen/UserScreen";
import { ContentIcon, TextIcon } from "./Style";
import { FontAwesome, FontAwesome5 } from "@expo/vector-icons";

const BottomTab = createBottomTabNavigator();

export const Main = () => {
  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarStyle: {
          backgroundColor: "#ffffff",
          height: 80,
          paddingTop: 10,
        },
        tabBarActiveBackgroundColor: "transparent",
        tabBarShowLabel: false,
        headerShown: false,

        tabBarIcon: ({ focused }) => {
          if (route.name === "Home") {
            return (
              <ContentIcon
                tabBarActiveBackgroundColor={
                  focused ? "#ecf2ff" : "transparent"
                }
              >
                <FontAwesome name="calendar" size={18} color={"#4e4b59"} />
                {focused && <TextIcon>Agenda</TextIcon>}
              </ContentIcon>
            );
          } else {
            return (
              <ContentIcon
                tabBarActiveBackgroundColor={
                  focused ? "#ecf2ff" : "transparent"
                }
              >
                <FontAwesome5 name="user-circle" size={18} color={"#4e4b59"} />
                {focused && <TextIcon>usuario</TextIcon>}
              </ContentIcon>
            );
          }
        },
      })}
    >
      <BottomTab.Screen name="Home" component={HomeScreen_Patient} />
      <BottomTab.Screen name="Perfil" component={UserScreen} />
    </BottomTab.Navigator>
  );
};
