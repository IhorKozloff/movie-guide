import styled from '@emotion/styled';

export const ControlBtnsWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;

    @media screen and (min-width: 768px) {
        width: 267px;
        margin-left: 295px;
    }
    
    @media screen and (min-width: 1024px) {
        width: 287px;
        margin-left: 425px;
    }
    // transform: translateX(480px);
`;
export const ControlButton = styled.button`
    width: 120px;
    height: 45px;
    border: 1px solid black;
    cursor: pointer;
    border-radius: 5px;
    text-transform: uppercase;
    background-color:${props => props.activeStatus ? 'orange' : 'white'};
    transition: transform 500ms ease;
    transition: box-shadow 500ms ease;

    &:hover {
        transition: transform 500ms ease;
        transition: box-shadow 500ms ease;
        background-color: #FF6B01;
        color: #FFF;
        box-shadow: 5px 5px 10px 1px #B1AEAB;
        transform: scale(1.05);
    }
    &:active {
        transform: scale(0.9);
    }
    @media screen and (min-width: 1024px) {
        width: 136px;
    }
`;  

// const Button = styled.button`
//   color: ${props =>
//     props.primary ? 'hotpink' : 'turquoise'};
// `