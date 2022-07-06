import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const MovieList = styled.ul`
    padding-bottom: 40px;
    display: flex;
    flex-flow: row wrap;
`;
export const MovieListItem = styled.li`
    &:nth-child(n + 4) {
        margin-top: 10px;
    }
    margin-right: 30px;
    border:${props => props.themeStyle === "light" ? "none" : "1px solid #95949A"}
`;
export const MovieCardLink = styled(Link)`
    text-decoration: none;
    color: #000;
    display: block;
    max-width: 280px;
    width: 100%;
    &:hover {
        cursor: pointer;
    }
`;