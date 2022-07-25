import styled from '@emotion/styled';

export const BurgerMenuBtn = styled.button`
    padding: 0;
    width: 32px;
    height: 32px;
    border: none;
    background: none;
    display: flex;
    justify-content: center;
    align-items: center;
    fill: white;
    overflow: hidden;
    &:active {
        transform: scale(0.9);
    }
    @media screen and (min-width: 767px) {
        display: none;
    }
`;