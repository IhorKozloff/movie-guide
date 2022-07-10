import styled from '@emotion/styled';


export const AuthBtn = styled.button`
    color: #FFF;
    font-size: 12px;
    line-height: 1.16;
    font-weight: 500;
    text-transform: uppercase;
    text-decoration: none;
    cursor: pointer;
    border: none;
    background: none;
    margin-right: 40px;

`;
export const EntriesWrapper = styled.div``;
export const LogOutWrapper = styled.div`
    display: flex;
    margin-right: 10px;
`;
export const LogoutBtn = styled.button`
margin-left: 10px;
width: 80px;
    height: 25px;
    border: none;
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