import { ViewBoxCode } from "../Container/StyleContainer";
import {CancelBackMargin, CancelCard, CancelLessMargin, DescripritionDoctor, DescripritionEmail, DescripritionForgot, EmailText, ResendCode, SeeMedicalRecord, SmallDescriptionModal, SmallDescriptionModal2 } from "./StyledDescriptions";

export const DescriptionPassword = ({ description }) => {

    return (
        <DescripritionForgot>
            {description}
        </DescripritionForgot>
    )
}

export const DescriptionDoc = ({ description }) => {

    return (
        <DescripritionDoctor>
            {description}
        </DescripritionDoctor>
    )
}

export const EmailDescription = () => {

    return(

        <DescripritionEmail>Digite o código de 4 dígitos enviado para <EmailText>username@email.com</EmailText></DescripritionEmail>

    )

}


export const CodeResend = ({
    text,
    onPress
}) => {

    return(

        <ResendCode onPress={onPress}>{text}</ResendCode>

    )

}

export const SeeRecord = ({ onPressAppointment, text }) => {

    return(

        <SeeMedicalRecord onPress={onPressAppointment}>{text}</SeeMedicalRecord>

    )

}

export const CardCancel = ({ onPressCancel, text }) => {

    return(

        <CancelCard onPress={onPressCancel}>{text}</CancelCard>

    )

}

export const CardCancelLess = ({ onPressCancel, text }) => {

    return(

        <CancelLessMargin onPress={onPressCancel}>{text}</CancelLessMargin>

    )

}

export const CardBackLess = ({ onPressCancel, text }) => {

    return(
        <CancelBackMargin onPress={onPressCancel}>{text} </CancelBackMargin>

    )

}

export const DescripritionModalSmall2 = ({text }) => {

    return(

        <SmallDescriptionModal2>{text}</SmallDescriptionModal2>

    )

}

export const DescripritionModalSmall = ({text }) => {

    return(

        <SmallDescriptionModal>{text}</SmallDescriptionModal>

    )

}