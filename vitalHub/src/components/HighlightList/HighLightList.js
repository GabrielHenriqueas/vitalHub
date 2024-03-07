import {
  Days,
  DaysText,
  HighLightListBox,
  HighLightListContainerIcons,
  HighLightListContainerText,
  HighLightListSubtitle,
  HighLightListTitle,
  Stars,
  StarsText,
} from "./Style";
import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";

const HighLightList = ({
  clickButton = false,
  onPress,
  cardTitle,
  cardSubtitle,
  starText,
  dayText,
}) => {
  return (
    <HighLightListBox onPress={onPress} clickButton={clickButton}>
      <HighLightListContainerText>
        <HighLightListTitle>{cardTitle}</HighLightListTitle>
        <HighLightListSubtitle>{cardSubtitle}</HighLightListSubtitle>
      </HighLightListContainerText>

      <HighLightListContainerIcons>
        <Stars>
          <AntDesign name="star" size={20} color={"#F9A620"} />
          <StarsText>{starText}</StarsText>
        </Stars>

        <Days>
          <MaterialCommunityIcons
            name="calendar-outline"
            size={14}
            color={"#49B3BA"}
          />
          <DaysText>{dayText}</DaysText>
        </Days>
      </HighLightListContainerIcons>
    </HighLightListBox>
  );
};

export default HighLightList;
