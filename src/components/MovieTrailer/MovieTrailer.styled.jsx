import styled from '@emotion/styled';

export const MovieTrailerWrapper = styled.div`

`;
export const MovieTrailerBtn = styled.button`
border: none;
overflow: hidden;
    position: absolute;
    top: 190px;
    left: 150px;
    width: 120px;
    height: 80px;
    border-radius: 20px;
    background: #fff;
    opacity: 0.5;
    cursor: pointer;
    transition: opacity 500ms ease;
    &:hover {
        opacity: 1;
    }
    &:active {
        transform: scale(0.9);
    }
    & svg {
        position: absolute;
        top: 0;
        left: -8px;
        transform: translateY(-50px);
        border: 1px solid black;
    }
`;
export const MovieTrailerPlayer = styled.iframe`

`;