import styled from '@emotion/styled';
import headerBackgroundDesctop from 'images/header-background-desktop-x1.jpg';
import headerBackgroundTablet from 'images/header-background-tablet-x1.jpg';
import headerBackgroundMobile from 'images/mobile-header-background-1x.jpg';
import { NavLink } from 'react-router-dom';




export const HeaderContainer = styled.section`
    position: relative;
    padding: 46px 20px 97px 20px;
    background-image: url("${headerBackgroundMobile}");
    background-repeat: no-repeat;
    background-size: cover;
    
    @media (min-width: 321px) {
        padding: 46px 76px 97px 71px;
        background-image: url("${headerBackgroundTablet}");
    }
    @media (min-width: 769px) {
        background-image: url("${headerBackgroundDesctop}");
    }
`;
export const NavigationWrapper = styled.nav`
    display: flex;
    align-items: flex-end;
    margin-bottom: 41px;
    justify-content:space-between;
`;
export const LogoWrapper = styled.div`
    display: flex;
    align-items: center;
`;
export const LogoName = styled.span`
    color: #fff;
    font-weight: 500;
    font-size: 30px;
    line-height: 35px;
    display: flex;
    align-items: center;
    text-align: center;
    margin-left: 10px;
`;
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


// }
// .library-btn-wrapper {
//     position: absolute;
//     bottom: 65px;
//     left: 50%;
//     transform: translateX(-50%);
//     opacity: 0;
//     pointer-events: none;
    
//     &.libraryOn {
//         opacity: 1;
//         pointer-events:all;
         
//     }
// }
// .pre-gallery {
//     position: relative;
// }