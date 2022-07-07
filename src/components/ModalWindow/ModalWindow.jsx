import { createPortal } from "react-dom";
import { IconSVG } from "Utils";
import { ModalOverlay, ModalContent, ModalCloseBtn } from 'components/ModalWindow/ModalWindow.styled';

const modalWindowRoot = document.querySelector('#modal-window-root');

export const ModalWindow = ({children, onClose}) => {

    return createPortal(
        <ModalOverlay>
            <ModalContent>
            <ModalCloseBtn type="button" className="modal-btn-close" onClick={() => {
                onClose()
            }}><IconSVG id={"icon-modal-close-btn"}/></ModalCloseBtn>
                {children}
            </ModalContent>
            
        </ModalOverlay>, modalWindowRoot
    );
};