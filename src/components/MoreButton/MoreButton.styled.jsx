import styled from '@emotion/styled';


export const MoreButtonWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;
export const MoreBtn = styled.button`
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