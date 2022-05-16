import { LargeBtn } from 'components/ButtonLarge/ButtonLarge.styled';


export const ButtonLarge = ({children, onButtonClick, customClass }) => {
    return (
        <LargeBtn className={`large-btn ${customClass}`} onClick={onButtonClick}>{children}</LargeBtn>
    )
};