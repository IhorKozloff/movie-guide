import styled from '@emotion/styled';

import { NavLink } from 'react-router-dom';

export const NavigationLinksList = styled.ul`
    
`;
export const NavigationLinksItem = styled.li`
    &:not(:last-child) {
        margin-right: 39px;
    }
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