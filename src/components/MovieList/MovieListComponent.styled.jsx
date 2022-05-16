import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const MovieList = styled.ul`
    padding-bottom: 40px;
    display: flex;
    flex-flow: row wrap;
`;
export const MovieListItem = styled.li`
    margin-right: 30px;
`;
export const MovieCardLink = styled(Link)`
    text-decoration: none;
    color: #000;
    display: block;
    padding-top: 10px;
    padding-bottom: 10px;
    max-width: 280px;
    width: 100%;
    &:hover {
        cursor: pointer;
    }
`;