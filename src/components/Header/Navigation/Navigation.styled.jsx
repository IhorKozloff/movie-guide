import styled from '@emotion/styled';

import { NavLink } from 'react-router-dom';

export const NavigationLinksList = styled.ul`
    display: flex;
    justify-content: center;

    & li {
        &:not(:last-child) {
            margin-right: 10px;
        }
    }
    @media screen and (min-width: 250px){
        & li {
            &:not(:last-child) {
                margin-right: 20px;
            }
        }
    }
    @media screen and (min-width: 290px) and (max-width: 319px){
        & li {
            &:not(:last-child) {
                margin-right: 30px;
            }
        }
    }
    @media screen and (min-width: 320px) {
        
        & li {
            &:not(:last-child) {
                margin-right: 40px;
            }
        }
    }
    
`;
export const NavigationLinksItem = styled.li`
    
`;
export const NavigationLink = styled(NavLink)`
    color: #fff;
    font-size: 12px;
    line-height: 1.16;
    font-weight: 500;
    text-transform: uppercase;
    position: relative;
    text-decoration: none;
    &.active {
        &::after {
            content: '';
            width: 100%;
            height: 3px;
            background-color: #FF6B08;
            position: absolute;
            bottom: 0;
            left: 0;
        }
    }
`;