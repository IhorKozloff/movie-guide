import styled from '@emotion/styled';

export const ControlBtnsWrapper = styled.div`
max-width: 295px;
display: flex;
justify-content: space-between;
`;
export const ControlButton = styled.button`
width: 140px;
height: 45px;
border: 1px solid black;
cursor: pointer;
border-radius: 5px;
text-transform: uppercase;
background-color:${props => props.activeStatus ? 'orange' : 'white'};

&:hover {
    background-color: #FF6B01;
    color: #FFF;
    box-shadow: 5px 5px 15px 1px #000000;
    transform: scale(1.1);
}
`;  

// const Button = styled.button`
//   color: ${props =>
//     props.primary ? 'hotpink' : 'turquoise'};
// `