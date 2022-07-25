import styled from '@emotion/styled';

export const PaginationWrapper = styled.div`
    width: 100%; 
    padding: 5px 0;
`;
export const PaginationList = styled.ul`
    display: flex;
    justify-content: center;
    align-items: center;
`;
export const PaginationListItem = styled.li`
    padding-top: 3px;
    padding-bottom: 3px;
    border-radius: 5px;
    margin-right: 5px;
    background-color: ${props => props.active === true ? "tomato" : "grey"}
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