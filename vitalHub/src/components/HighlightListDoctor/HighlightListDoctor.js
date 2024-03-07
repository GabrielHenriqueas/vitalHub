import { HighLightListContainerText } from "../HighlightList/Style";
import { HighLightListDoctorsName, HighLightListDoctorsPhoto, HighLightListDoctorsSpecialization, HighlightListDoctorBox } from "./Style";

export const HighlightListDoctor = ({
  clickButton = false,
  onPress,
  source,
  doctorName,
  doctorSpecialization,

}) => {
  return (
    <HighlightListDoctorBox onPress={onPress} clickButton={clickButton}>
        <HighLightListDoctorsPhoto source={source}/> 
      <HighLightListContainerText>
        <HighLightListDoctorsName>{doctorName}</HighLightListDoctorsName>
        <HighLightListDoctorsSpecialization>{doctorSpecialization}</HighLightListDoctorsSpecialization>
      </HighLightListContainerText>
    </HighlightListDoctorBox>
  );
};
