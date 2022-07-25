import styled from '@emotion/styled';

export const MovieTrailerWrapper = styled.div`

`;
export const MovieTrailerBtn = styled.button`
    dispaly: none;
    border: none;
    overflow: hidden;
    position: absolute;
    top: 190px;
    left: 150px;
    border-radius: 20px;
    background: #fff;
    opacity: 0.3;
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
    @media screen and (min-width: 320px) {
        width: 120px;
        height: 80px;
        top: 140px;
        left: 80px;
    }
    @media screen and (min-width: 768px) {
        top: 190px;
        left: 100px;
    }
    @media screen and (min-width: 1024px) {
        top: 240px;
        left: 170px;
    }
`;
export const MovieTrailerPlayer = styled.iframe`

`;