import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

import mobileMenuBackground from 'images/mobile-menu-wallpaper.jpg';
// for home
import headerHomeBackgroundDesctop from 'images/header-background-desktop-x1.jpg';
import headerHomeBackgroundTablet from 'images/header-background-tablet-x1.jpg';
import headerHomeBackgroundMobile from 'images/mobile-header-background-1x.jpg';
// for library
import headerLibraryBackgroundDesctop from 'images/headerInLibrary/header-inLibrary-desctop.jpg';
import headerLibraryBackgroundTablet from 'images/headerInLibrary/header-inLibrary-tablet.jpg';
import headerLibraryBackgroundMobile from 'images/headerInLibrary/header-inLibrary-mobile.jpg';


export const HeaderSection = styled.header`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 41px;
    padding-bottom: 97px;

    position: relative;
    background-repeat: no-repeat;
    background-size: cover;

    background-image: url("${props => props.page === 'library' ? headerLibraryBackgroundMobile : headerHomeBackgroundMobile}");

    @media (min-width: 768px) {
        
        background-image: url("${props => props.page === 'library' ? headerLibraryBackgroundTablet : headerHomeBackgroundTablet}");
    }
    @media (min-width: 1024px) {
        background-image: url("${props => props.page === 'library' ? headerLibraryBackgroundDesctop : headerHomeBackgroundDesctop}");
    }
`;
export const NavigationWrapper = styled.nav`
   
    margin-bottom: 41px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content:space-between;
`;
export const LogoWrapper = styled.div`
    display: flex;
    align-items: center;
`;
export const LogoName = styled.span`
    display: none;
    color: #fff;
    font-weight: 500;
    
    margin-left: 10px;
    text-align: center;

    @media screen and (min-width: 768px) {
        display: flex;
        align-items: center;
        font-size: 20px;
        line-height: 22px;
    }
    @media screen and (min-width: 1024px) {

        font-size: 30px;
        line-height: 35px;
    }
`;
export const ButtonLink = styled(NavLink)`
    display: flex;
    width: 100px;
    height: 45px;
    border: 1px solid black;
    cursor: pointer;
    border-radius: 5px;
    justify-content: center;
    align-items: center;
    text-transform: uppercase;
    text-decoration: none;
    background-color: #FFF;

        &:hover {
            background-color: #810114;
            color: #FFF;
            box-shadow: 5px 5px 15px 1px #FFF;
            transform: scale(1.1);
        }
        &:active {
            transform: scale(1);
            opacity: 0.7;
            box-shadow: none;
        }
        &.active {
            background-color: #810114;
            color: #FFF
        }
        @media screen and (min-width: 320px) {
            width: 130px;
        }
        @media screen and (min-width: 768px) {
            width: 136px;
        }
`;
export const LibraryButtonsWrapper = styled.div`
    width: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;

    @media screen and (min-width: 320px) {
        width: 280px;
    }
    @media screen and (min-width: 768px) {
        width: 287px;
    }
`;
export const AuthWrapper = styled.div`

    @media screen and (max-width: 767px) {
        background-image: url("${mobileMenuBackground}");
        background-repeat: no-repeat;
        background-size: cover;


        ${props => props.activeStatus === true ? `display: flex;` : `display: none;`}
        width: 60vw;
        position: fixed;
        top: 0;
        right: 0;
        z-index: 2;
        background-color: #1A1634;
        box-sizing: border-box;

        border-left: 2px solid white;
        border-top: 2px solid white;
        border-bottom: 2px solid white;

        border-top-left-radius: 10px;
        border-bottom-left-radius: 10px;

        padding: 40px 10px 40px 10px;
        height: 100vh;     
        

        & .menu-button-wrapper {
            width: 30px;
            height: 30px;
            display: flex;
            justify-content: center;
            align-items: center;
            position: absolute;
            top: 50px;
            right: 20px;
            border: 2px solid white;
            border-radius: 10px;
            cursor: pointer;
        }
    }
    
    @media screen and (min-width: 420px) {
        width: 50vw;
    }
    @media screen and (min-width: 500px) {
        width: 40vw;
    }
 

    @media screen and (min-width: 768px) {
        width: 240px;
    }
`;
export const AuthContent = styled.div`
    display: flex;
    justify-content: space-between;

    @media screen and (max-width: 767px) {
        width: 100%;
        height: 100%;
        border: 2px solid grey;
        border-radius: 10px;
        padding: 10px;

        flex-direction: column-reverse;
        justify-content: start;
        align-items: flex-start;

    }

`;

export const ExtendedMenuList = styled.ul`
    width: 100%;
    @media screen and (min-width: 768px) {
        display: none;
    }
`;
export const ExtendedMenuListItem = styled.li`
    display: flex;
    justify-content: start;
    align-items: center;

    & a {
        color: white;
        font-size: 16px;
        line-height: 1.16;
        font-weight: 500;
        text-transform: uppercase;
        display: block;
        margin-left: 10px;
    }
`;