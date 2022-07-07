import styled from '@emotion/styled';

export const ControlBtnsWrapper = styled.div`
    width: 350px;
    display: flex;
    justify-content: space-between;
    position: absolute;
    bottom: 0;
    left: 0;
    transform: translateX(480px);
`;
export const ControlButton = styled.button`
width: 140px;
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
`;  

// const Button = styled.button`
//   color: ${props =>
//     props.primary ? 'hotpink' : 'turquoise'};
// `