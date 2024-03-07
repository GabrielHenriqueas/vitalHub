import styled from "styled-components";
import { Title } from "../../components/Title/Title";
import { YearEmailBox } from "../../components/MedicalRecordModal/Style";
import { ModalText2 } from "../../components/CancelattionModal/Style";

export const DoctorImageBig = styled.Image`
  width: 100%;
  height: 280px;
`;

export const TitleViewPrescription = styled(Title)`
  margin-top: 20px;
`;

export const InfoDoctorBox = styled(YearEmailBox)`
  margin-top: 15px;
  gap: 20px;
  justify-content: center;
  align-items: center;
`;

export const InfoDoctorText = styled(ModalText2)`
  font-family: "Quicksand_500Medium";
`;

export const DoctorPrescriptionContainer = styled.View`
  width: 90%;
  height: auto;
  gap: 15px;
  margin-top: 20px;
`;

export const DoctorPrescriptionTitle = styled.Text`
  font-size: 16px;
  font-family: "Quicksand_600SemiBold";
  color: #33303e;
  height: auto;
  width: auto;
`;

export const DoctorPrescriptionBox = styled.View`
  width: 100%;
  height: 121px;
  border-radius: 5px;
  background-color: #f5f3f3;
  padding-top: 15px;
  padding-left: 10px;
`;
export const DoctorPrescriptionBoxImages = styled.View`
  width: 100%;
  height: 121px;
  border-radius: 5px;
  background-color: #f5f3f3;
  /* padding-top: 15px;
  padding-left: 10px; */
  justify-content: center;
  align-items: center;
  flex-direction: row;
  gap: 15px;
`;

export const DoctorPrescriptionBoxSmall = styled.View`
  width: 100%;
  height: 53px;
  border-radius: 5px;
  background-color: #f5f3f3;
  padding-top: 15px;
  padding-left: 10px;
`;

export const DoctorPrescriptionText = styled.Text`
  width: auto;
  height: auto;
  font-size: 14px;
  color: #4e4b59;
  font-family: "MontserratAlternates_500Medium";
`;

export const SendCancelButtonContainer = styled.View`
  height: auto;
  width: 90%;
  justify-content: space-between;
  flex-direction: row;
  margin-top: 15px;
  padding-right: 15px;
`;

export const SendButton = styled.TouchableOpacity`
  background-color: #49b3ba;
  border-radius: 5px;
  width: 172px;
  height: 44px;
  justify-content: center;
  align-items: center;
  gap: 15px;
  flex-direction: row;
`;

export const SendButtonText = styled.Text`
  color: white;
  font-size: 14px;
  font-family: "MontserratAlternates_700Bold";
`;

export const CancelButton = styled.TouchableOpacity`
  width: 104px;
  height: 44px;
  align-items: center;
  justify-content: center;
`;

export const CancelButtonText = styled.Text`
  color: #c81d25;
  font-size: 12px;
  font-family: "MontserratAlternates_500Medium";
`;
