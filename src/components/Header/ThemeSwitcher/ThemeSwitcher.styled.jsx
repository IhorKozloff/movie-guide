import styled from '@emotion/styled';

export const ThemeSwitcherWrapper = styled.div`
    display: flex;
`;

export const ThemeBtn = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    background: none;
    border: none;
    cursor: pointer;
    &:active {
        transform: scale(0.9);
    }
    &:hover {
        & svg {
            fill: yellow;
        }
    } 
`;