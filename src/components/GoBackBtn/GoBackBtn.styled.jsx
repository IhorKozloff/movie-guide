import styled from '@emotion/styled';

export const BackButtonWrapper = styled.div`
    position: absolute;
    z-index: 1;
    display: flex;
    transform: translateY(-40px);
    display: flex;
    justify-content: center;
    align-items: center;
    @media screen and (max-width: 767px) {
        top: 45px;
    }
`;

export const BackButtonTittle = styled.p`
    color: ${props => props.themeDecor === "light" ? "#000" : "#FFF"};
    margin-left: 5px;
    font-weight: 800;
    @media screen and (max-width: 767px) {
        color: white;
    }
`;

export const BackButton = styled.button`
    background: none;
    border: none;
    width: 30px;
    height: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: fill 2s ease;
    & svg {
        fill: ${props => props.themeDecor === "light" ? "#000" : "#FFF"};
        transition: fill 500ms ease;
        @media screen and (max-width: 767px) {
            fill: white;
        }
    }
    &:hover {
        & svg {
            fill: green;
          
        }
    }
    
`;