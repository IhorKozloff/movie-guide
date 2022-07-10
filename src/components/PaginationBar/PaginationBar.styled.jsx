import styled from '@emotion/styled';

export const PaginationWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5px;
    // background-color: aqua;
    // border: 1px solid black;
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