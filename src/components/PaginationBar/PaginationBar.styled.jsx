import styled from '@emotion/styled';



export const PaginationWrapper = styled.div`
    display: flex;
    justify-content: center;
    width: 220px;
    height: 40px;
    margin: 0 auto;
`;
export const PaginationList = styled.ul`
    display: flex;
    justify-content: center;
    align-items: center;
`;
export const PaginationListItem = styled.li`
    background-color: ${props => props.active === true ? "tomato" : "grey"};
    padding-top: 3px;
    padding-bottom: 3px;
    border-radius: 5px;
    margin-right: 5px; 

    &.background-none {
        background: none;
        padding-bottom: 0;
        & button {
            color: grey;
            font-weight: bolder;
        }
    }
`;
export const PaginationButton = styled.button`
color: white;
    cursor: pointer;
    width: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: none;
    border: none;

`;