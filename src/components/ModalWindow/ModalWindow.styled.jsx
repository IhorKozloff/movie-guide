import styled from '@emotion/styled';

export const ModalOverlay = styled.div`
    position: fixed;
    background-color: rgba(47, 48, 58, 0.5);
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    z-index: 10;
`;

export const ModalContent = styled.div`
    border-radius: 10px;
    border: 1px solid black;
    position: absolute;
    background-color: #FFF;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
`;
export const ModalCloseBtn = styled.button`
    width: 40px;
    height: 40px;
    border-radius: 10px;
    background-image: url('/images/close-btn-background.jpg');
    background-repeat: no-repeat;
    background-position: center;
    background-size:contain;
    border: none;
    background-color: #FFF;
    position: absolute;
    top: 10px;
    right: 10px;
    cursor: pointer;
    &:hover {
        transform: scale(1.1);
        
    }
`; 
    
