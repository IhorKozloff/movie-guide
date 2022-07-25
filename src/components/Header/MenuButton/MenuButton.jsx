import { BurgerMenuBtn } from  "./MenuButton.styled";
import { IconSVG } from "Utils"

export const MenuButton = ({activeStatus, onBtnClick}) => {
    

    return (
        <BurgerMenuBtn onClick={onBtnClick}>
            {activeStatus === false && <IconSVG id={"burger-mnu-btn"}/>}
            {activeStatus === true && <IconSVG id={"icon-modal-close-btn"}/>}
        </BurgerMenuBtn>
    );
};