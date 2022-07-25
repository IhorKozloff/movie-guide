import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';




export const Section = styled.section`
    background: ${props => props.backgroundTheme === "light" ? "#fff" : "#1A1634"};
    padding-top: 20px;
    padding-bottom: 40px;

    @media screen and (min-width: 768px) {
        padding-top: 60px;
        padding-bottom: 50px;
    }
    
    
`;

export const Container = styled.div`
    background-color: c;
    margin: 0 auto;
    width: 100%;
    &.header-container {
        background: none;
    }

    @media (min-width: 320px) {
        width: 280px;
    }
    @media (min-width: 768px) {
        width: 620px;
    }
    @media (min-width: 1024px) {
        width: 882px;
    }
    
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
export const MovieDetailsPageWrapper = styled.div`
    position: relative;

    @media screen and (min-width: 768px) {
        padding: 42px 30px 0 28px;
    }
    @media screen and (min-width: 1024px) {
        padding: 50px 30px 0 30px;
    }
`;