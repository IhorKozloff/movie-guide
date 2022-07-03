import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Section = styled.section`
    padding-top: 60px;
    padding-bottom: 50px;
`;

export const Container = styled.div`
    margin: 0 auto;
    display: flex;
    flex-direcion: column;
    justify-content: center;
    align-items: center;
    max-width: 1024px;
`;

export const StyledLink = styled(NavLink)`
    text-decoration: none;
    color: #000;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 19px;
    line-height: 23px;
    &.active {
        color: #FFF;
    }
`;