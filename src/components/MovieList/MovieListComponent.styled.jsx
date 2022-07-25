import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const MovieList = styled.ul`
    margin-bottom: 40px;
    margin-top: -20px;
    @media screen and (min-width: 768px) {
        margin-right: -15px;
        margin-left: -15px;
        display: flex;
        flex-flow: row wrap;
    }
`;
export const MovieListItem = styled.li`
    box-sizing: border-box;
    border:${props => props.themeStyle === "light" ? "none" : "1px solid #95949A"};
    margin: 20px auto auto auto;

    @media screen and (min-width: 280px) {
        width: 280px;
    }

    @media screen and (min-width: 768px) {
        margin-right: 15px;
        margin-left: 15px;
        width: calc((100% - 4 * 15px) / 2);
    }
    @media screen and (min-width: 1024px) {
        margin-right: 15px;
        margin-left: 15px;
        width: calc((100% - 6 * 15px) / 3);
    }


`;
export const MovieCardLink = styled(Link)`
    text-decoration: none;
    color: #000;
    display: block;
    &:hover {
        cursor: pointer;
    }
`;