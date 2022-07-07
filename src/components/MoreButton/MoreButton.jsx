import { MoreButtonWrapper, MoreBtn } from "./MoreButton.styled";

export const MoreButton = ({children, onMoreBtnCLick}) => {
    return (
        <MoreButtonWrapper>
            <MoreBtn type="button" onClick={onMoreBtnCLick}>{children}</MoreBtn>
        </MoreButtonWrapper>
    )
}