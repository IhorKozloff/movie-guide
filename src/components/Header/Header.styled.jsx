import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';


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
        ${props => props.activeStatus === true ? `display: flex;` : `display: none;`}

        position: absolute;
        top: 40px;
        left: 0;
        z-index: 2;
        background-color: #1A1634;
        box-sizing: border-box;
        border: 1px solid gray;
        padding: 10px;
        height: 120px;     
        flex-direction: column-reverse;
        justify-content: start;
        align-items: flex-end;
    }

    @media screen and (max-width: 319px) {
        width: 100%;
    }
    @media screen and (min-width: 320px) {
        width: 280px;
    }

    @media screen and (min-width: 768px) {
        display: flex;
        justify-content: space-between;
        width: 200px;
    }
`;