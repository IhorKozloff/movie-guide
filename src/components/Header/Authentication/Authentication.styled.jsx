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
`;


export const EntriesAndLogOutWrapper = styled.div`
    margin-right: 5px;
    display: flex;
    align-items: center;
    @media screen and (min-width: 768px) {
        width: 160px;
    }
`;
export const AuthBtnList = styled.ul`
    margin-top: 20px;
    & li {
        margin: 0 0 20px 0;
        text-align: end;
    }
    @media screen and (min-width: 768px) {
        display: flex;
        justify-content: end;
        align-items: center;

        margin-top: 0;

        & li {
            margin: 0 0 0 30px;
        }
    }
`;
export const UserEmail = styled.div`
    color: white;
    display: flex;
    align-items: center;
    font-size: 10px;

    @media screen and (min-width: 200px) {
        font-size: 14px;
    }
    @media screen and (min-width: 768px) {
        font-size: 16px;
    }
`;
export const EmailName = styled.p`
    
`;
export const EmailPrefix = styled.p`
    display: none;
    @media screen and (min-width: 768px) {
        display: block;
    }
`; 

export const LogoutBtn = styled.button`
    margin-left: 5px;
    width: 30px;
    height: 30px;
    border: none;
    font-weight: bolder;
    cursor: pointer;
    border-radius: 5px;
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