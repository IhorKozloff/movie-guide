import { BackButton, BackButtonWrapper, BackButtonTittle } from "./GoBackBtn.styled"
import { IconSVG } from "Utils"

export const GoBackBtn = ({onBackBtn, themeDecor}) => {

    return (
        <BackButtonWrapper>
            <BackButton onClick={onBackBtn} themeDecor={themeDecor}>
                <IconSVG id={"icon-circle-left"}/>
            </BackButton>
            <BackButtonTittle themeDecor={themeDecor}>
                Go Back
            </BackButtonTittle>
        </BackButtonWrapper>
    );     
};
